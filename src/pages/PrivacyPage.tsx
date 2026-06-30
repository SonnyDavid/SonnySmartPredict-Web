import Container from "../components/common/Container";
import {
  LegalContent,
  LegalLink,
  LegalSection,
} from "../components/common/LegalContent";
import { SITE } from "../config/site";

const LAST_UPDATED = "29 June 2025";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black pt-[64px]">
      <Container className="max-w-3xl py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {LAST_UPDATED}
        </p>
        <p className="mt-4 text-neutral-400">
          {SITE.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, store, and share your personal information when you
          use our mobile application and website.
        </p>

        <LegalContent>
          <LegalSection title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Account information:</strong>{" "}
                name, email address, username, and password when you register
              </li>
              <li>
                <strong className="text-white">Usage data:</strong> app
                interactions, features used, match views, language preferences,
                and session duration
              </li>
              <li>
                <strong className="text-white">Device information:</strong>{" "}
                device type, operating system, unique device identifiers, and
                app version
              </li>
              <li>
                <strong className="text-white">Purchase information:</strong>{" "}
                transaction records processed by Google Play or Apple App Store
                (we do not receive your full payment card details)
              </li>
              <li>
                <strong className="text-white">Communications:</strong> messages
                you send to our support team
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="2. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide, maintain, and improve the App and our services</li>
              <li>Deliver match predictions, statistics, and personalised content</li>
              <li>Process subscriptions and unlock premium features</li>
              <li>Send service-related notifications and respond to support requests</li>
              <li>Analyse usage patterns to improve user experience</li>
              <li>Detect, prevent, and address fraud, abuse, or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Legal Basis for Processing">
            <p>
              Where applicable under the General Data Protection Regulation
              (GDPR) and similar laws, we process your data based on:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Contract:</strong> to provide the
                services you requested
              </li>
              <li>
                <strong className="text-white">Legitimate interests:</strong> to
                improve our App, ensure security, and prevent abuse
              </li>
              <li>
                <strong className="text-white">Consent:</strong> where required
                for marketing communications or optional features
              </li>
              <li>
                <strong className="text-white">Legal obligation:</strong> where
                we must comply with applicable law
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Sharing Your Information">
            <p>
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Payment processors:</strong>{" "}
                Google Play and Apple App Store for in-app purchases
              </li>
              <li>
                <strong className="text-white">Service providers:</strong>{" "}
                hosting, analytics, and customer support tools bound by
                confidentiality agreements
              </li>
              <li>
                <strong className="text-white">Legal authorities:</strong> when
                required by law, court order, or to protect our rights and safety
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Data Retention">
            <p>
              We retain your personal information only for as long as necessary
              to fulfil the purposes described in this policy, unless a longer
              retention period is required by law. When you delete your account,
              we will delete or anonymise your data within a reasonable
              timeframe, except where we must retain it for legal or legitimate
              business purposes.
            </p>
          </LegalSection>

          <LegalSection title="6. Data Security">
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal information against unauthorised access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </LegalSection>

          <LegalSection title="7. Your Rights">
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <LegalLink href={`mailto:${SITE.privacyEmail}`}>
                {SITE.privacyEmail}
              </LegalLink>
              . We will respond within the timeframe required by applicable law.
            </p>
          </LegalSection>

          <LegalSection title="8. Children's Privacy">
            <p>
              The App is not intended for users under 18 years of age. We do not
              knowingly collect personal information from children. If you
              believe a child has provided us with personal data, please contact
              us and we will take steps to delete such information.
            </p>
          </LegalSection>

          <LegalSection title="9. International Transfers">
            <p>
              Your information may be processed in countries other than your
              country of residence. Where we transfer data outside the European
              Economic Area or other protected regions, we ensure appropriate
              safeguards are in place, such as standard contractual clauses
              approved by relevant authorities.
            </p>
          </LegalSection>

          <LegalSection title="10. Cookies & Similar Technologies">
            <p>
              Our website may use essential cookies and similar technologies to
              ensure proper functionality. We do not use cookies for advertising
              purposes on this website. The mobile App may collect device
              identifiers as described in Section 1.
            </p>
          </LegalSection>

          <LegalSection title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will post
              the revised policy on this page and update the &quot;Last
              updated&quot; date. We encourage you to review this policy
              periodically. Material changes may be communicated through the App
              or by email where appropriate.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact Us">
            <p>
              For privacy-related questions or requests, contact our privacy
              team at:
            </p>
            <p>
              <LegalLink href={`mailto:${SITE.privacyEmail}`}>
                {SITE.privacyEmail}
              </LegalLink>
            </p>
            <p>
              General support:{" "}
              <LegalLink href={`mailto:${SITE.supportEmail}`}>
                {SITE.supportEmail}
              </LegalLink>
            </p>
          </LegalSection>
        </LegalContent>
      </Container>
    </main>
  );
}
