import type { ReactNode } from "react";

export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <div className="legal-content mt-8 space-y-8 text-sm leading-relaxed text-neutral-300 sm:text-[15px]">
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
      <h2 className="text-lg font-semibold text-white sm:text-xl">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
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
