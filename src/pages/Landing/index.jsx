import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";

export default function Landing({ data }) {
  return (
    <div>
      <HeroSection />
      <IntroSection data={data} />
    </div>
  );
}