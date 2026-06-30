import Container from "../common/Container";
import FeatureIcon from "../common/FeatureIcon";

const FEATURES = [
  {
    icon: "calendar" as const,
    title: "Daily Matches",
    text: "Get daily match predictions from leagues worldwide.",
  },
  {
    icon: "lock" as const,
    title: "Unlock Matches",
    text: "Access premium matches with high accuracy.",
  },
  {
    icon: "chart" as const,
    title: "Detailed Statistics",
    text: "In-depth stats and insights for every match.",
  },
  {
    icon: "globe" as const,
    title: "Multi-language",
    text: "Available in multiple languages.",
  },
  {
    icon: "shield" as const,
    title: "Secure Payments",
    text: "Your payments are 100% secure and protected.",
  },
];

export default function Features() {
  return (
    <section className="bg-black pt-8 pb-14 sm:pt-10 sm:pb-16" aria-labelledby="features-heading">
      <Container>
        <h2 id="features-heading" className="sr-only">
          Features
        </h2>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {FEATURES.map((feature) => (
            <li key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 items-center justify-center">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-base font-semibold text-white sm:text-[17px]">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-neutral-400">
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
