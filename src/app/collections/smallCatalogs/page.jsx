"use client";
import Header from "@/Components/HeadingComponents/Header";
import ThemeCard from "@/Components/ThemeCard/ThemeCard";
import React from "react";
import { ImSpinner9 } from "react-icons/im";

const SmallCatalogs = () => {
  return (
    <div className="mt-24">
      <Header
        heading={"Small catalogs"}
        details={
          "Explore themes that allow you to showcase your products without the clutter of unnecessary features."
        }
      />
      {/* All Card Section */}
      <div className="py-8 md:py-12 w-11/12 mx-auto  items-center justify-between">
        {isLoading ? (
          <div className=" w-full min-h-96 flex items-center justify-center">
            <span className="text-6xl animate-spin">
              <ImSpinner9 />
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((dta) => (
              <ThemeCard dta={dta} key={dta._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallCatalogs;
