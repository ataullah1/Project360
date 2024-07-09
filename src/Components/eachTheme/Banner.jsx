<<<<<<< HEAD
=======
"use client";
>>>>>>> init
/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-black text-white">
      <div className="  py-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 ">
        <div className="lg:w-1/3 w-full text-center lg:text-left">
          <h1 className="text-4xl ">
            Polyform{" "}
            <span className=" text-sm">
              by{" "}
              <a href="/kjfvnke" className="underline">
                SmartBase®
              </a>
            </span>
          </h1>
          <h1 className=" text-[12px]">Version 1.0.1 •Jun 11, 2024</h1>
          <h1 className=" text-lg font-bold mt-7">$290 USD</h1>
          <p className=" text-lg my-8">
            Clean and fast theme for ambitious brands
          </p>
          <p className=" text-sm font-bold mb-2">Includes support for:</p>
          <li>Color swatches</li>
          <li>Quick view</li>
          <li>Stock counter</li>
          <li>Mega menu</li>
          <li>Sticky header</li>
          <li>See all features here</li>
          <div className="text-center">
            <Button
              className="bg-white text-black px-36 my-6 font-bold "
              radius="full"
            >
              Try Theme
            </Button>
          </div>

          <Link href="">
            {" "}
            <p className="text-lg text-center hover:underline hover:text-blue-500">
              View Demo Store
            </p>{" "}
          </Link>
          <p className="text-sm text-center text-gray-500">
            {" "}
            <span className="underline text-white">
              {" "}
              <Link href="">Unlimited free trial</Link>
            </span>
            . Pay if you publish.
          </p>
        </div>
        <div className="lg:w-2/3 h-[580px] overflow-hidden rounded-xl ">
          <img
            src="https://cdn.shopify.com/theme-store/qumk1q6o0adk0lzvfybn0xfr4rl3.jpg"
            className=" "
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
