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
    <div className="min-h-screen w-full relative">
      <div className="w-full lg:w-2/5">
        <h1 className="text-5xl font-bold">
          Creative multi-purpose{" "}
          <span className="text-primaryColor">Shopify</span> theme
        </h1>
        <p className="text-xl opacity-70">
          <span className="text-primaryColor">#1 Best Selling</span> Shopify
          Theme of all time on Envato. An all-in-one template for your Shopify
          store, allowing you to create various structures and meet specific
          requirements.
        </p>
      </div>
      <div className="w-full lg:w-3/5"></div>
    </div>
  );
};

export default HeroSection;
