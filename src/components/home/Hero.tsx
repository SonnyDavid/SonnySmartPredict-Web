import StoreBadges from "../common/StoreBadges";
import { BRAND_GREEN, SITE } from "../../config/site";

function HeroArcHeadline() {
  return (
    <svg
      viewBox="0 0 900 380"
      className="hero-arc-svg"
      role="img"
      aria-hidden
    >
      <defs>
        <path
          id="hero-arc-top"
          d="M 60 205 Q 450 62 840 205"
          fill="none"
        />
        <path
          id="hero-arc-bottom"
          d="M 110 298 Q 450 368 790 298"
          fill="none"
        />
        <linearGradient id="hero-grad-white" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f4f4f4" />
          <stop offset="100%" stopColor="#bdbdbd" />
        </linearGradient>
        <linearGradient id="hero-grad-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8f255" />
          <stop offset="48%" stopColor={BRAND_GREEN} />
          <stop offset="100%" stopColor="#4d9200" />
        </linearGradient>
        <filter id="hero-text-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* WORLD CUP 2026 — curved like stadium roof */}
      <text
        fill="url(#hero-grad-white)"
        fontFamily="Nunito, Inter, sans-serif"
        fontWeight="900"
        fontSize="58"
        letterSpacing="6"
        filter="url(#hero-text-shadow)"
      >
        <textPath href="#hero-arc-top" startOffset="50%" textAnchor="middle">
          WORLD CUP 2026
        </textPath>
      </text>

      {/* PREDICTION — center spotlight */}
      <text
        x="450"
        y="248"
        textAnchor="middle"
        fill="url(#hero-grad-green)"
        fontFamily="Nunito, Inter, sans-serif"
        fontWeight="900"
        fontSize="122"
        letterSpacing="2"
        filter="url(#hero-text-shadow)"
      >
        PREDICTION
      </text>

      {/* SONNY SMART — curved along the pitch */}
      <text
        fontFamily="Nunito, Inter, sans-serif"
        fontWeight="900"
        fontSize="70"
        letterSpacing="4"
        filter="url(#hero-text-shadow)"
      >
        <textPath href="#hero-arc-bottom" startOffset="50%" textAnchor="middle">
          <tspan fill="url(#hero-grad-white)">SONNY </tspan>
          <tspan fill="url(#hero-grad-green)">SMART</tspan>
        </textPath>
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <div className="hero-content absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="sr-only">{SITE.fullName} — World Cup 2026</h1>

      <div className="hero-copy flex w-full max-w-5xl flex-col items-center">
        <HeroArcHeadline />
        <StoreBadges className="mt-6 sm:mt-8" />
      </div>
    </div>
  );
}
