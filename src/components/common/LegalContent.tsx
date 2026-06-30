import type { ReactNode } from "react";

export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <div className="legal-content mt-6 space-y-6 text-[13px] leading-relaxed text-neutral-300 sm:mt-8 sm:space-y-8 sm:text-sm md:text-[15px]">
      {children}
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-base font-semibold text-white sm:text-lg md:text-xl">{title}</h2>
      <div className="mt-2 space-y-2 sm:mt-3 sm:space-y-3">{children}</div>
    </section>
  );
}

export function LegalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-[#71CC02] transition-opacity hover:opacity-80"
    >
      {children}
    </a>
  );
}
