import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND_GREEN, SITE } from "../../config/site";
import Logo from "./Logo";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const NAV: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
];

function isActive(pathname: string, item: NavItem) {
  return item.end ? pathname === item.to : pathname.startsWith(item.to);
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
      aria-hidden
    >
      <path
        d="M8 2v7M8 9l3-3M8 9L5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavLink({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const active = isActive(pathname, item);

  return (
    <Link
      to={item.to}
      onClick={onNavigate}
      className={`relative flex min-h-11 items-center px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 sm:px-4 sm:text-[14px] lg:text-[15px] ${
        active ? "text-[#71CC02]" : "text-white/75 hover:text-white"
      }`}
    >
      {item.label}
      {active && (
        <span
          className="absolute bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full"
          style={{
            backgroundColor: BRAND_GREEN,
            boxShadow: `0 0 8px ${BRAND_GREEN}80`,
          }}
        />
      )}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="site-header__bar mx-auto flex max-w-[1440px] items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex min-w-0 flex-1 items-center">
          <Logo />
        </div>

        <nav
          className="hidden items-center justify-center md:flex"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-0.5 lg:gap-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta group hidden items-center gap-2 sm:inline-flex"
          >
            Download App
            <DownloadIcon />
          </a>

          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/40 text-white transition-colors duration-300 hover:border-white/20 hover:bg-black/60 sm:h-10 sm:w-10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto max-w-[1440px] px-4 py-3 sm:px-6"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink item={item} onNavigate={() => setOpen(false)} />
              </li>
            ))}
          </ul>
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta mt-2 flex w-full items-center justify-center gap-2"
            onClick={() => setOpen(false)}
          >
            Download App
            <DownloadIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
