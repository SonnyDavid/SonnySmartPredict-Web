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
    <footer className="border-t border-white/[0.06] bg-black pt-12 pb-8 sm:pt-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/60">
                <LogoMark className="h-6 w-6" />
              </span>
              <span className="text-base font-bold uppercase tracking-[0.06em]">
                <span className="text-white">SONNY </span>
                <span style={{ color: BRAND_GREEN }}>SMART</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              {SITE.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/terms">Terms &amp; Conditions</FooterLink></li>
              <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
            </ul>
          </div>

          {/* How To */}
          <div>
            <h3 className="text-sm font-semibold text-white">How To</h3>
            <ul className="mt-4 space-y-2.5">
              <li><FooterLink to="/reset-password">How to Reset Password</FooterLink></li>
              <li><FooterLink to="/delete-account">How to Delete Account</FooterLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2.5">
              <li><FooterLink to="/support">Contact Us</FooterLink></li>
              <li>
                <a
                  href={`mailto:${SITE.supportEmail}`}
                  className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                >
                  {SITE.supportEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-sm font-semibold text-white">Download App</h3>
            <StoreBadges className="mt-4 flex-col !items-start gap-3" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center sm:flex-row sm:text-left">
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
