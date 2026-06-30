import { BRAND_GREEN } from "../../config/site";

type FeatureIconProps = {
  name: "calendar" | "lock" | "chart" | "globe" | "shield";
};

export default function FeatureIcon({ name }: FeatureIconProps) {
  const stroke = BRAND_GREEN;

  const icons = {
    calendar: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
        <rect x="8" y="12" width="32" height="28" rx="3" stroke={stroke} strokeWidth="2" />
        <path d="M8 20h32" stroke={stroke} strokeWidth="2" />
        <path d="M16 8v8M32 8v8" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="26" width="6" height="6" rx="1" fill={stroke} opacity="0.35" />
        <rect x="26" y="26" width="6" height="6" rx="1" fill={stroke} />
      </svg>
    ),
    lock: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
        <rect x="12" y="20" width="24" height="20" rx="3" stroke={stroke} strokeWidth="2" />
        <path
          d="M16 20v-4a8 8 0 0 1 16 0v4"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="30" r="3" fill={stroke} />
        <path d="M24 33v4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
        <path d="M10 38V10" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 38h30" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="28" width="6" height="10" rx="1" fill={stroke} opacity="0.4" />
        <rect x="26" y="22" width="6" height="16" rx="1" fill={stroke} opacity="0.65" />
        <rect x="36" y="16" width="6" height="22" rx="1" fill={stroke} />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
        <circle cx="24" cy="24" r="16" stroke={stroke} strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="7" ry="16" stroke={stroke} strokeWidth="1.5" />
        <path d="M8 24h32M12 16h24M12 32h24" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden>
        <path
          d="M24 6L38 12v12c0 9-6 16-14 18-8-2-14-9-14-18V12L24 6z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18 24l4 4 8-9"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return icons[name];
}
