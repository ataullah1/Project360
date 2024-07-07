import HeroSection from "@/Components/home-page/HeroSection";
import HomeCardSection from "@/Components/home-page/HomeCardSection";
// import Testimonial from "@/Components/home-page/Testimonial";

import Testimonial from "@/Components/home-page/Testimonial";

export default function Home() {
  return <main>
    <div className="max-w-[1800px] mx-auto px-4 mt-20">

      <HeroSection></HeroSection>
      <HomeCardSection></HomeCardSection>
      </div>

      <Testimonial></Testimonial>
      {/* <HomeMarquee></HomeMarquee> */}
  </main>;
}
