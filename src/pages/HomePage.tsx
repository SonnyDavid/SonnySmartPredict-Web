import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import SupportBanner from "../components/home/SupportBanner";
import { ASSETS } from "../config/site";

const HERO_WIDTH = 1024;
const HERO_HEIGHT = 585;

export default function HomePage() {
  const srcSet = [
    `${ASSETS.heroStadium} 1024w`,
    `${ASSETS.heroStadium2k} 2048w`,
    `${ASSETS.heroStadium4k} 4096w`,
  ].join(", ");

  return (
    <main className="bg-black">
      <section className="relative w-full">
        <img
          src={ASSETS.heroStadium4k}
          srcSet={srcSet}
          sizes="100vw"
          alt=""
          width={HERO_WIDTH}
          height={HERO_HEIGHT}
          className="hero-stadium-img block h-auto w-full"
          decoding="async"
          fetchPriority="high"
          draggable={false}
        />
        <Hero />
      </section>

      <div className="home-lower">
        <Features />
        <SupportBanner />
      </div>
    </main>
  );
}
