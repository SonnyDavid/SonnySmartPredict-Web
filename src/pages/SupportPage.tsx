import Container from "../components/common/Container";
import { SITE } from "../config/site";

export default function SupportPage() {
  return (
    <main className="min-h-[50vh] bg-black pt-[64px]">
      <Container className="py-16">
        <h1 className="text-3xl font-bold text-white">Contact Support</h1>
        <p className="mt-4 max-w-xl text-neutral-400">
          We are here for you anytime, anywhere. Reach out and our team will get back to you as soon as possible.
        </p>
        <a
          href={`mailto:${SITE.supportEmail}`}
          className="mt-6 inline-block text-lg font-semibold text-[#71CC02] transition-opacity hover:opacity-80"
        >
          {SITE.supportEmail}
        </a>
      </Container>
    </main>
  );
}
