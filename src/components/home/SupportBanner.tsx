import { Link } from "react-router-dom";
import Container from "../common/Container";
import { BRAND_GREEN } from "../../config/site";

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11 shrink-0" aria-hidden>
      <path
        d="M10 28v-6a14 14 0 0 1 28 0v6"
        stroke={BRAND_GREEN}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="6" y="26" width="8" height="12" rx="3" stroke={BRAND_GREEN} strokeWidth="2" />
      <rect x="34" y="26" width="8" height="12" rx="3" stroke={BRAND_GREEN} strokeWidth="2" />
      <path d="M14 38h20" stroke={BRAND_GREEN} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default function SupportBanner() {
  return (
    <section className="bg-black pb-14 sm:pb-16" aria-labelledby="support-heading">
      <Container>
        <div className="support-banner flex flex-col items-start justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#111111] px-6 py-6 sm:flex-row sm:items-center sm:px-8 sm:py-7">
          <div className="flex items-center gap-4 sm:gap-5">
            <HeadsetIcon />
            <div>
              <h2 id="support-heading" className="text-lg font-bold text-white sm:text-xl">
                24/7 Support
              </h2>
              <p className="mt-1 text-sm text-neutral-400 sm:text-[15px]">
                We are here for you anytime, anywhere.
              </p>
            </div>
          </div>

          <Link to="/support" className="support-banner__cta shrink-0">
            Contact Support
            <span aria-hidden>&nbsp;&gt;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
