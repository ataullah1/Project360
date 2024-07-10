/* eslint-disable jsx-a11y/alt-text */
"use clinet";
import useFetchQuery from "@/Hooks/shared/useFetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeCard from "../ThemeCard/ThemeCard";

const HeroSection = () => {
  const { data, isLoading } = useFetchQuery("/themes");
  const cards = data?.data || [];
  return (
    <div className="pt-10">
      <div>
        <h1 className="xl:text-7xl lg:text-5xl text-[40px] font-semibold text-primaryColor">
          Shopify themes— <br />
          built for commerce
        </h1>
        <div className="flex justify-between gap-5 lg:flex-row flex-col ">
          <p className="xl:text-2xl text-xl mt-5 w-1/2">
            Take your store from launch to scale with themes that make selling
            easy.
          </p>
          <div className="w-1/2 lg:flex items-end justify-end">
            <Link href={"/themes"}>
              <button className="bg-black px-7 w-[180px] py-3 rounded-full text-white text-[16px] font-semibold hover:bg-black/80">
                Explore themes
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 gap-10">
        {cards.slice(0, 2).map((dta) => (
          <ThemeCard dta={dta} key={dta._id} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
