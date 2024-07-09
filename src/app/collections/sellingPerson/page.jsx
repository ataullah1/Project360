import Header from "@/Components/HeadingComponents/Header";
import ThemeCard from "@/Components/ThemeCard/ThemeCard";
import React from "react";

const SellingPerson = () => {
  return (
    <div className="mt-24">
      <Header
        heading={"Selling in person"}
        details={
          "Find themes that make it easy for customers to find your retail locations and give them options to pick up orders during their visit. Features to look for: store locators, in-store pickup availability, events calendar"
        }
      />
      {/* All Card Section */}
      <div className="py-8 md:py-12 w-11/12 mx-auto  items-center justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((element) => (
            <ThemeCard key={1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellingPerson;
