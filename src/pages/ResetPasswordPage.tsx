import { type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroBackground from "../components/common/HeroBackground";
import Logo from "../components/layout/Logo";
import { waitForRecoveryReady } from "../lib/recoverySession";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

type PageState = "loading" | "ready" | "success" | "error";

export default function ResetPasswordPage() {
  const [pageState, setPageState] = useState<PageState>("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setErrorMessage("Supabase is not configured. Please contact support.");
      setPageState("error");
      return;
    }

    let active = true;

    void waitForRecoveryReady(supabase).then((error) => {
      if (!active) return;
      if (error) {
        setErrorMessage(error);
        setPageState("error");
        return;
      }
      setErrorMessage("");
      setPageState("ready");
    });

    return () => {
      active = false;
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

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      setErrorMessage(
        "Your reset session has expired. Please request a new password reset email from the app."
      );
      setPageState("error");
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

  const formDisabled = pageState === "loading" || pageState === "error";

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
                ) : null}

                {pageState === "error" ? (
                  <p className="reset-password-error" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <form
                  className="reset-password-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <label className="reset-password-field">
                    <span className="reset-password-label">New Password</span>
                    <input
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      disabled={formDisabled}
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
                      disabled={formDisabled}
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
                    disabled={formDisabled || submitting}
                  >
                    {submitting ? "Updating…" : "Update Password"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </HeroBackground>
    </main>
  );
}
