import type { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "./supabase";

export function urlHasRecoveryParams(): boolean {
  const search = new URLSearchParams(window.location.search);
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));

  return (
    search.has("code") ||
    search.has("token_hash") ||
    search.has("token") ||
    search.get("type") === "recovery" ||
    hash.has("access_token") ||
    hash.get("type") === "recovery"
  );
}

function cleanRecoveryParamsFromUrl() {
  window.history.replaceState({}, document.title, window.location.pathname);
}

function readHashTokens() {
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));

  return {
    accessToken: hash.get("access_token"),
    refreshToken: hash.get("refresh_token"),
    type: hash.get("type"),
  };
}

export async function establishRecoverySession(
  client: SupabaseClient = supabase!
): Promise<string | null> {
  const { accessToken, refreshToken, type } = readHashTokens();

  if (accessToken && refreshToken && type === "recovery") {
    const { error } = await client.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) return error.message;
    cleanRecoveryParamsFromUrl();
    return null;
  }

  const search = new URLSearchParams(window.location.search);
  const tokenHash = search.get("token_hash") ?? search.get("token");
  const queryType = search.get("type");

  if (tokenHash && queryType === "recovery") {
    const { error } = await client.auth.verifyOtp({
      token_hash: tokenHash,
      type: "recovery",
    });
    if (error) return error.message;
    cleanRecoveryParamsFromUrl();
    return null;
  }

  const code = search.get("code");
  if (code) {
    const { error } = await client.auth.exchangeCodeForSession(code);
    if (error) return error.message;
    cleanRecoveryParamsFromUrl();
    return null;
  }

  await new Promise((resolve) => window.setTimeout(resolve, 250));

  const {
    data: { session },
  } = await client.auth.getSession();

  if (session) return null;

  if (urlHasRecoveryParams()) {
    return "This reset link is invalid or has expired. Please request a new password reset email from the app.";
  }

  return "Please open the password reset link from your email to continue.";
}

export function waitForRecoveryReady(
  client: SupabaseClient = supabase!
): Promise<string | null> {
  return new Promise((resolve) => {
    let settled = false;

    const finish = (error: string | null) => {
      if (settled) return;
      settled = true;
      subscription.unsubscribe();
      window.clearTimeout(timeoutId);
      resolve(error);
    };

    const { data: { subscription } } = client.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || (session && event === "SIGNED_IN")) {
        finish(null);
      }
    });

    void establishRecoverySession(client).then((error) => {
      if (!error) {
        finish(null);
        return;
      }

      if (!urlHasRecoveryParams()) {
        finish(error);
      }
    });

    const timeoutId = window.setTimeout(async () => {
      const {
        data: { session },
      } = await client.auth.getSession();
      finish(session ? null : "This reset link is invalid or has expired. Please request a new password reset email from the app.");
    }, 4000);
  });
}
