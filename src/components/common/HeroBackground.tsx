import type { ReactNode } from "react";
import { ASSETS } from "../../config/site";

const HERO_WIDTH = 1024;
const HERO_HEIGHT = 585;

type HeroBackgroundProps = {
  children: ReactNode;
  className?: string;
};

export default function HeroBackground({ children, className = "" }: HeroBackgroundProps) {
  const srcSet = [
    `${ASSETS.heroStadium} 1024w`,
    `${ASSETS.heroStadium2k} 2048w`,
    `${ASSETS.heroStadium4k} 4096w`,
  ].join(", ");

  return (
    <section className={`hero-section ${className}`.trim()}>
      <img
        src={ASSETS.heroStadium4k}
        srcSet={srcSet}
        sizes="100vw"
        alt=""
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
        className="hero-stadium-img block w-full"
        decoding="async"
        fetchPriority="high"
        draggable={false}
      />
      {children}
    </section>
  );
}
