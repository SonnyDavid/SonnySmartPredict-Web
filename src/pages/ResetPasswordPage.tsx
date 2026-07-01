import { type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroBackground from "../components/common/HeroBackground";
import Logo from "../components/layout/Logo";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

type PageState = "loading" | "ready" | "success" | "error";

async function establishRecoverySession(): Promise<string | null> {
  if (!supabase) {
    return "Supabase is not configured. Please contact support.";
  }

  const query = new URLSearchParams(window.location.search);
  const tokenHash = query.get("token_hash");
  const type = query.get("type");

  if (tokenHash && type === "recovery") {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "recovery",
    });
    if (error) return error.message;
    return null;
  }

  const code = query.get("code");
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) return error.message;
    return null;
  }

  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const accessToken = hashParams.get("access_token");
  const refreshToken = hashParams.get("refresh_token");
  const hashType = hashParams.get("type");

  if (accessToken && refreshToken && hashType === "recovery") {
    const { error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) return error.message;
    window.history.replaceState({}, document.title, window.location.pathname);
    return null;
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) return null;

  return "This reset link is invalid or has expired. Please request a new password reset email from the app.";
}

export default function ResetPasswordPage() {
  const [pageState, setPageState] = useState<PageState>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setErrorMessage("Supabase is not configured. Please contact support.");
      setPageState("error");
      return;
    }

    let active = true;

    const { data: authListener } = supabase!.auth.onAuthStateChange((event) => {
      if (!active) return;
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        setPageState("ready");
        setErrorMessage("");
      }
    });

    void establishRecoverySession().then((error) => {
      if (!active) return;
      if (error) {
        setErrorMessage(error);
        setPageState("error");
        return;
      }
      setPageState("ready");
      setErrorMessage("");
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!supabase) {
      setErrorMessage("Supabase is not configured. Please contact support.");
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.auth.updateUser({ password });

    setSubmitting(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    await supabase.auth.signOut();
    setPageState("success");
  }

  return (
    <main className="bg-black">
      <HeroBackground className="reset-password-hero">
        <div className="reset-password-panel">
          <div className="reset-password-card">
            <div className="reset-password-logo">
              <Logo />
            </div>

            {pageState === "success" ? (
              <div className="reset-password-success">
                <p className="reset-password-success__message">
                  ✓ Password updated successfully.
                </p>
                <Link to="/" className="reset-password-home-btn">
                  Return to Home
                </Link>
              </div>
            ) : (
              <>
                <h1 className="reset-password-title">Reset Password</h1>
                <p className="reset-password-subtitle">
                  Enter your new password below.
                </p>

                {pageState === "loading" ? (
                  <p className="reset-password-status" role="status">
                    Verifying reset link…
                  </p>
                ) : pageState === "error" ? (
                  <p className="reset-password-error" role="alert">
                    {errorMessage}
                  </p>
                ) : (
                  <form className="reset-password-form" onSubmit={handleSubmit} noValidate>
                    <label className="reset-password-field">
                      <span className="reset-password-label">New Password</span>
                      <input
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        required
                        minLength={8}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="reset-password-input"
                      />
                    </label>

                    <label className="reset-password-field">
                      <span className="reset-password-label">Confirm New Password</span>
                      <input
                        type="password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        required
                        minLength={8}
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className="reset-password-input"
                      />
                    </label>

                    {errorMessage && pageState === "ready" ? (
                      <p className="reset-password-error" role="alert">
                        {errorMessage}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      className="reset-password-submit"
                      disabled={submitting}
                    >
                      {submitting ? "Updating…" : "Update Password"}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </HeroBackground>
    </main>
  );
}
