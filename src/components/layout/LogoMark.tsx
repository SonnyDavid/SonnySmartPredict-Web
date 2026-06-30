import { BRAND_GREEN } from "../../config/site";

/** Shared logo mark — stadium arc + smart S + prediction target */
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden>
      <path
        d="M8 30C8 30 14 10 22 10C30 10 36 30 36 30"
        stroke={BRAND_GREEN}
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M10 32H34"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M28 14C22 13 17 15.5 17 19.5C17 23 24 23.5 24 27C24 30.5 19 32.5 15 31"
        stroke="white"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="13" r="2.75" fill={BRAND_GREEN} />
      <circle
        cx="30"
        cy="13"
        r="5.5"
        stroke={BRAND_GREEN}
        strokeWidth="1"
        opacity="0.45"
      />
    </svg>
  );
}
