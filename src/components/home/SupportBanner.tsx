import { Link } from "react-router-dom";
import Container from "../common/Container";
import { BRAND_GREEN } from "../../config/site";

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10 md:h-11 md:w-11" aria-hidden>
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
    <section className="bg-black pb-10 sm:pb-14 md:pb-16" aria-labelledby="support-heading">
      <Container>
        <div className="support-banner flex flex-col items-stretch justify-between gap-5 rounded-xl border border-white/[0.08] bg-[#111111] px-4 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-6 md:px-8 md:py-7">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            <HeadsetIcon />
            <div className="min-w-0">
              <h2 id="support-heading" className="text-base font-bold text-white sm:text-lg md:text-xl">
                24/7 Support
              </h2>
              <p className="mt-0.5 text-[13px] text-neutral-400 sm:mt-1 sm:text-sm md:text-[15px]">
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
