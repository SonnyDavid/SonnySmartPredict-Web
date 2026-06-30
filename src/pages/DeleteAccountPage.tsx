import Container from "../components/common/Container";
import {
  LegalContent,
  LegalLink,
  LegalSection,
} from "../components/common/LegalContent";
import { SITE } from "../config/site";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-black pt-[64px]">
      <Container className="max-w-3xl py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          How to Delete Account
        </h1>
        <p className="mt-4 text-neutral-400">
          You can permanently delete your {SITE.name} account at any time. This
          action cannot be undone.
        </p>

        <LegalContent>
          <LegalSection title="Before you delete your account">
            <p>Please note the following:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                All your personal data, preferences, and unlocked match history
                will be permanently removed
              </li>
              <li>
                Active subscriptions must be cancelled separately through Google
                Play or the App Store — deleting your account does not
                automatically cancel billing
              </li>
              <li>You will lose access to all premium features immediately</li>
              <li>This action cannot be reversed</li>
            </ul>
          </LegalSection>

          <LegalSection title="Delete your account in the app">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Open the {SITE.name} app and sign in.</li>
              <li>
                Go to your profile and tap{" "}
                <strong className="text-white">Settings</strong>.
              </li>
              <li>
                Scroll down and select{" "}
                <strong className="text-white">Account</strong>.
              </li>
              <li>
                Tap <strong className="text-white">Delete Account</strong>.
              </li>
              <li>
                Read the confirmation message carefully, then enter your password
                to verify your identity.
              </li>
              <li>
                Tap <strong className="text-white">Confirm Delete</strong> to
                permanently remove your account.
              </li>
            </ol>
            <p>
              Your account and associated data will be deleted within 30 days. Some
              information may be retained where required by law.
            </p>
          </LegalSection>

          <LegalSection title="Cancel your subscription">
            <p>
              If you have an active subscription, cancel it before or after
              deleting your account:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Android:</strong> Google Play
                Store → Payments &amp; subscriptions → Subscriptions
              </li>
              <li>
                <strong className="text-white">iOS:</strong> Settings → your
                name → Subscriptions
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="Request deletion by email">
            <p>
              If you cannot access the app, you may request account deletion by
              emailing us from the address linked to your account:
            </p>
            <p>
              <LegalLink href={`mailto:${SITE.supportEmail}`}>
                {SITE.supportEmail}
              </LegalLink>
            </p>
            <p>
              Include the subject line{" "}
              <strong className="text-white">Account Deletion Request</strong>{" "}
              and we will process your request within 30 days.
            </p>
          </LegalSection>

          <LegalSection title="Questions about your data">
            <p>
              For more information on how we handle your data, see our{" "}
              <LegalLink href="/privacy">Privacy Policy</LegalLink>.
            </p>
          </LegalSection>
        </LegalContent>
      </Container>
    </main>
  );
}
