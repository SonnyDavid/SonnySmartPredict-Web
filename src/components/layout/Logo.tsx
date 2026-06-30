import { Link } from "react-router-dom";
import { BRAND_GREEN, SITE } from "../../config/site";
import LogoMark from "./LogoMark";

export default function Logo() {
  return (
    <Link
      to="/"
      className="group flex shrink-0 items-center gap-3.5 transition-opacity duration-300 hover:opacity-90"
      aria-label={`${SITE.fullName} Home`}
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-300 group-hover:border-[#71CC02]/45 group-hover:shadow-[0_0_16px_rgba(113,204,2,0.15)] sm:h-11 sm:w-11">
        <LogoMark className="h-6 w-6 sm:h-7 sm:w-7" />
      </span>

      <span className="hidden min-w-0 flex-col leading-none sm:flex">
        <span className="text-[15px] font-bold uppercase tracking-[0.06em] sm:text-[17px] md:text-[19px] md:tracking-[0.07em]">
          <span className="text-white">SONNY </span>
          <span style={{ color: BRAND_GREEN }}>SMART</span>
        </span>
        <span
          className="mt-1 text-[12px] font-bold uppercase tracking-[0.22em]"
          style={{ color: BRAND_GREEN }}
        >
          PREDICTION
        </span>
      </span>
    </Link>
  );
}
