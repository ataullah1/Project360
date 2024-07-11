"use client";

import HeroSection from "@/Components/home-page/HeroSection";
import HomeCardSection from "@/Components/home-page/HomeCardSection";
import HomeMarquee from "@/Components/home-page/HomeMarquee";
// import Testimonial from "@/Components/home-page/Testimonial";

import Testimonial from "@/Components/home-page/Testimonial";
import { useContextData } from "@/providers/ContextProvider";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

export default function Home() {
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);

        if (decoded.id) {
          console.log("User is logged in");
        }
      } catch (error) {
        console.error("Error decoding token:", error);

        console.log("User is not logged in");
      }
    } else {
      console.log("User is not logged in");
    }
  }, [token]);

  const { userData } = useContextData();
  console.log(userData);
  return (
    <main>
      <HeroSection />
      <div className="w-11/12 md:w-10/12 max-w-[1800px] mx-auto px-4 mt-20">
        <HomeCardSection />
      </div>

      <Testimonial />
      <HomeMarquee />
    </main>
  );
}
