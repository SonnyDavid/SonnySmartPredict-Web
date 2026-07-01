import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import StoreBadges from "../common/StoreBadges";
import Container from "../common/Container";
import { BRAND_GREEN, SITE } from "../../config/site";
import LogoMark from "./LogoMark";

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black pt-10 pb-6 sm:pt-12 sm:pb-8 md:pt-14">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/60 sm:h-10 sm:w-10">
                <LogoMark className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.06em] sm:text-base">
                <span className="text-white">SONNY </span>
                <span style={{ color: BRAND_GREEN }}>SMART</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-neutral-400 sm:mt-4 sm:text-sm">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/terms">Terms &amp; Conditions</FooterLink></li>
              <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">How To</h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              <li><FooterLink to="/how-to-reset-password">How to Reset Password</FooterLink></li>
              <li><FooterLink to="/delete-account">How to Delete Account</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              <li><FooterLink to="/support">Contact Us</FooterLink></li>
              <li>
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="text-sm break-all text-neutral-400 transition-colors duration-300 hover:text-white"
                >
                  {SITE.supportEmail}
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-sm font-semibold text-white">Download App</h3>
            <StoreBadges className="store-badges--stack mt-3 sm:mt-4" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-5 text-center sm:mt-10 sm:flex-row sm:gap-3 sm:pt-6 sm:text-left md:mt-12">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Made with <span style={{ color: BRAND_GREEN }}>♥</span> for football fans.
          </p>
        </div>
      </Container>
    </footer>
  );
}
