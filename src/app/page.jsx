"use client";

import HeroSection from "@/Components/home-page/HeroSection";
import HomeCardSection from "@/Components/home-page/HomeCardSection";
import HomeMarquee from "@/Components/home-page/HomeMarquee";
// import Testimonial from "@/Components/home-page/Testimonial";

import Testimonial from "@/Components/home-page/Testimonial";
// import usePublicApi from "@/Hooks/usePublicApi";

export default function Home() {
  // const api = usePublicApi();
  console.log("++++++++++++ AAAAAAA ++++++++++");

  // console.log("API Data = ", api.baseURL);

  console.log("++++++++++++ AAAAAAA ++++++++++");
  return (
    <main>
      <div className="w-11/12 md:w-10/12 max-w-[1800px] mx-auto px-4 mt-20">
        <HeroSection></HeroSection>
        <HomeCardSection></HomeCardSection>
      </div>
      <Testimonial />
      <HomeMarquee />
    </main>
  );
}
