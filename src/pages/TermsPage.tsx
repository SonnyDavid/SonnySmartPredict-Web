import Container from "../components/common/Container";
import {
  LegalContent,
  LegalLink,
  LegalSection,
} from "../components/common/LegalContent";
import { SITE } from "../config/site";

const LAST_UPDATED = "29 June 2025";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black pt-[64px]">
      <Container className="max-w-3xl py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {LAST_UPDATED}
        </p>
        <p className="mt-4 text-neutral-400">
          Please read these Terms &amp; Conditions carefully before using{" "}
          {SITE.fullName}. By accessing or using our mobile application or
          website, you agree to be bound by these terms.
        </p>

        <LegalContent>
          <LegalSection title="1. Acceptance of Terms">
            <p>
              By downloading, installing, accessing, or using {SITE.name} (the
              &quot;App&quot;) or our website at{" "}
              <LegalLink href={SITE.url}>{SITE.url}</LegalLink>, you confirm
              that you have read, understood, and agree to these Terms &amp;
              Conditions and our{" "}
              <LegalLink href="/privacy">Privacy Policy</LegalLink>.
            </p>
            <p>
              If you do not agree with any part of these terms, you must not use
              the App or our services.
            </p>
          </LegalSection>

          <LegalSection title="2. Service Description">
            <p>
              {SITE.fullName} provides football match predictions, statistics,
              insights, and related content for informational and entertainment
              purposes. Our predictions are generated using data analysis and
              proprietary models. They do not constitute financial, betting, or
              professional advice.
            </p>
            <p>
              We do not guarantee the accuracy of any prediction. Past
              performance does not guarantee future results. You are solely
              responsible for any decisions you make based on information
              provided through the App.
            </p>
          </LegalSection>

          <LegalSection title="3. Eligibility">
            <p>
              You must be at least 18 years old (or the minimum legal age in your
              jurisdiction) to use the App. By using our services, you represent
              that you meet this requirement and have the legal capacity to enter
              into a binding agreement.
            </p>
          </LegalSection>

          <LegalSection title="4. Account Registration">
            <p>
              Some features may require you to create an account. You agree to
              provide accurate, current, and complete information and to keep
              your login credentials confidential. You are responsible for all
              activity that occurs under your account.
            </p>
            <p>
              Notify us immediately at{" "}
              <LegalLink href={`mailto:${SITE.supportEmail}`}>
                {SITE.supportEmail}
              </LegalLink>{" "}
              if you suspect unauthorized access to your account.
            </p>
          </LegalSection>

          <LegalSection title="5. Premium Features & Payments">
            <p>
              Certain matches and features may require a paid subscription or
              one-time purchase (&quot;Premium&quot; or &quot;Unlock&quot;
              content). All prices are displayed in the App before you complete
              a purchase.
            </p>
            <p>
              Payments are processed through Google Play or the Apple App Store.
              Billing, refunds, and subscription management are subject to the
              policies of the respective platform. We do not store your full
              payment card details.
            </p>
            <p>
              Subscriptions renew automatically unless cancelled at least 24
              hours before the end of the current billing period through your
              platform account settings.
            </p>
          </LegalSection>

          <LegalSection title="6. Acceptable Use">
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the App for any unlawful purpose or in violation of applicable laws</li>
              <li>Attempt to reverse engineer, decompile, or extract source code from the App</li>
              <li>Scrape, copy, or redistribute our content without written permission</li>
              <li>Interfere with or disrupt the App, servers, or networks</li>
              <li>Create multiple accounts to abuse free trials or promotions</li>
            </ul>
          </LegalSection>

          <LegalSection title="7. Intellectual Property">
            <p>
              All content in the App — including logos, text, graphics, icons,
              predictions, statistics, software, and design — is owned by or
              licensed to {SITE.name} and protected by copyright, trademark,
              and other intellectual property laws.
            </p>
            <p>
              You receive a limited, non-exclusive, non-transferable licence to
              use the App for personal, non-commercial purposes in accordance
              with these terms.
            </p>
          </LegalSection>

          <LegalSection title="8. Disclaimer of Warranties">
            <p>
              The App and all content are provided &quot;as is&quot; and
              &quot;as available&quot; without warranties of any kind, whether
              express or implied, including but not limited to merchantability,
              fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the App will be uninterrupted, error-free,
              or free of harmful components.
            </p>
          </LegalSection>

          <LegalSection title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, {SITE.name} and its
              officers, directors, employees, and affiliates shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including loss of profits, data, or goodwill, arising
              from your use of the App.
            </p>
            <p>
              Our total liability for any claim relating to the App shall not
              exceed the amount you paid us in the twelve (12) months preceding
              the claim, or one hundred euros (€100), whichever is greater.
            </p>
          </LegalSection>

          <LegalSection title="10. Termination">
            <p>
              We may suspend or terminate your access to the App at any time if
              you breach these terms or if we discontinue the service. You may
              stop using the App at any time and delete your account through the
              App settings or by contacting support.
            </p>
          </LegalSection>

          <LegalSection title="11. Changes to These Terms">
            <p>
              We may update these Terms &amp; Conditions from time to time. We
              will post the revised version on this page and update the
              &quot;Last updated&quot; date. Continued use of the App after
              changes take effect constitutes acceptance of the updated terms.
            </p>
          </LegalSection>

          <LegalSection title="12. Governing Law">
            <p>
              These terms are governed by the laws applicable in the jurisdiction
              where {SITE.name} operates, without regard to conflict of law
              principles. Any disputes shall be subject to the exclusive
              jurisdiction of the competent courts in that jurisdiction, unless
              mandatory consumer protection laws in your country provide
              otherwise.
            </p>
          </LegalSection>

          <LegalSection title="13. Contact Us">
            <p>
              If you have questions about these Terms &amp; Conditions, contact
              us at:
            </p>
            <p>
              <LegalLink href={`mailto:${SITE.legalEmail}`}>
                {SITE.legalEmail}
              </LegalLink>
            </p>
          </LegalSection>
        </LegalContent>
      </Container>
    </main>
  );
}
