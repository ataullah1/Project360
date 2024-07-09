"use client";

import { Link } from "@nextui-org/react";
import React from "react";

const CardSection = () => {
  return (
    <div className="bg-white text-black my-24 pt-16 ">
      <div className="flex gap-8 max-w-7xl mx-auto flex-col justify-center items-center  md:flex-row">
        <div className="max-w-sm">
          <div className="">
            <Link href="">
              <img
                src="https://cdn.shopify.com/theme-store/ufmgkob5wrgc51c9nieletmjudti.jpg"
                className=" rounded-2xl"
                alt=""
              />
            </Link>
          </div>
          <div className="my-4 ">
            <h2 className=" text-xl font-semibold">Fits every brand</h2>
            <p className=" text-[#56524E]">
              Customize colors, typography, call-to-actions, filter colors. Due
              to it's versatility, Polyform works great with every brand.
            </p>
          </div>
        </div>
        <div className="max-w-sm">
          <Link href="https://www.youtube.com/watch?v=9MKf1NbdrJo">
            <img
              src="https://cdn.shopify.com/theme-store/ufmgkob5wrgc51c9nieletmjudti.jpg"
              className=" rounded-2xl"
              alt=""
            />
          </Link>

          <div className="my-4 ">
            <h2 className=" text-xl font-semibold">Fits every brand</h2>
            <p className=" text-[#56524E]">
              Customize colors, typography, call-to-actions, filter colors. Due
              to it's versatility, Polyform works great with every brand.
            </p>
          </div>
        </div>
        <div className="max-w-sm">
          <Link href="">
            {" "}
            <img
              src="https://cdn.shopify.com/theme-store/ufmgkob5wrgc51c9nieletmjudti.jpg"
              className=" rounded-2xl"
              alt=""
            />
          </Link>
          <div className="my-4 ">
            <h2 className=" text-xl font-semibold">Fits every brand</h2>
            <p className=" text-[#56524E]">
              Customize colors, typography, call-to-actions, filter colors. Due
              to it's versatility, Polyform works great with every brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
