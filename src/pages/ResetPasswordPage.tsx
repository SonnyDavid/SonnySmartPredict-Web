import Container from "../components/common/Container";
import {
  LegalContent,
  LegalLink,
  LegalSection,
} from "../components/common/LegalContent";
import { SITE } from "../config/site";

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-black pt-[64px]">
      <Container className="max-w-3xl py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          How to Reset Password
        </h1>
        <p className="mt-4 text-neutral-400">
          If you forgot your password or want to change it, follow the steps
          below inside the {SITE.name} app.
        </p>

        <LegalContent>
          <LegalSection title="Reset your password in the app">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Open the {SITE.name} app on your device.</li>
              <li>
                On the login screen, tap <strong className="text-white">Forgot Password?</strong>
              </li>
              <li>
                Enter the email address linked to your account and tap{" "}
                <strong className="text-white">Send Reset Link</strong>.
              </li>
              <li>
                Check your inbox (and spam folder) for an email from {SITE.name}.
              </li>
              <li>
                Tap the reset link in the email. The link is valid for 24 hours.
              </li>
              <li>
                Enter your new password twice and tap{" "}
                <strong className="text-white">Save</strong>.
              </li>
              <li>
                Return to the app and sign in with your new password.
              </li>
            </ol>
          </LegalSection>

          <LegalSection title="Password requirements">
            <p>Your new password must:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Be at least 8 characters long</li>
              <li>Include at least one uppercase letter and one number</li>
              <li>Not match a previously used password</li>
            </ul>
          </LegalSection>

          <LegalSection title="Change password while logged in">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Open the app and go to your profile.</li>
              <li>
                Tap <strong className="text-white">Settings</strong>, then{" "}
                <strong className="text-white">Account</strong>.
              </li>
              <li>
                Select <strong className="text-white">Change Password</strong>.
              </li>
              <li>Enter your current password and your new password.</li>
              <li>Tap <strong className="text-white">Update</strong> to save.</li>
            </ol>
          </LegalSection>

          <LegalSection title="Did not receive the reset email?">
            <ul className="list-disc space-y-2 pl-5">
              <li>Check your spam or junk folder</li>
              <li>Make sure you entered the correct email address</li>
              <li>Wait a few minutes and try again</li>
              <li>
                If the problem continues, contact us at{" "}
                <LegalLink href={`mailto:${SITE.supportEmail}`}>
                  {SITE.supportEmail}
                </LegalLink>
              </li>
            </ul>
          </LegalSection>
        </LegalContent>
      </Container>
    </main>
  );
}
