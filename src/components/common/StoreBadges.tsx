import { SITE } from "../../config/site";

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="store-badge__icon" aria-hidden>
      <path fill="#EA4335" d="M4.5 3.5v17l10.5-8.5L4.5 3.5z" />
      <path fill="#FBBC04" d="M15 12 4.5 20.5 19 14.5 15 12z" />
      <path fill="#4285F4" d="M19 9.5 4.5 3.5 15 12l4-2.5z" />
      <path fill="#34A853" d="M19 14.5 4.5 20.5 15 12l4 2.5z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="store-badge__icon" aria-hidden>
      <path
        fill="currentColor"
        d="M16.9 12.6c0-1.9 1.6-2.8 1.7-2.9-0.9-1.3-2.3-1.5-2.8-1.5-1.2-0.1-2.3 0.7-2.9 0.7s-1.5-0.7-2.5-0.7c-1.3 0-2.5 0.8-3.1 2-1.4 2.3-0.4 5.8 1 7.7 0.7 1 1.5 2.1 2.6 2.1 1 0 1.4-0.7 2.6-0.7s1.6 0.7 2.6 0.7c1.1 0 1.8-1 2.5-2 0.8-1.2 1.1-2.3 1.1-2.4-0.1 0-2.2-0.8-2.2-3.2zm-2.1-5.9c0.5-0.6 0.9-1.5 0.8-2.4-0.8 0-1.7 0.5-2.2 1.1-0.5 0.6-0.9 1.5-0.8 2.3 0.9 0.1 1.8-0.5 2.2-1z"
      />
    </svg>
  );
}

type StoreBadgesProps = {
  className?: string;
};

export default function StoreBadges({ className = "" }: StoreBadgesProps) {
  return (
    <div className={`store-badges ${className}`.trim()}>
      <a
        href={SITE.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="store-badge"
        aria-label="Get it on Google Play"
      >
        <GooglePlayIcon />
        <span className="store-badge__text">
          <span className="store-badge__label">Get it on</span>
          <span className="store-badge__name">Google Play</span>
        </span>
      </a>

      <a
        href={SITE.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="store-badge"
        aria-label="Download on the App Store"
      >
        <AppleIcon />
        <span className="store-badge__text">
          <span className="store-badge__label">Download on the</span>
          <span className="store-badge__name">App Store</span>
        </span>
      </a>
    </div>
  );
}
