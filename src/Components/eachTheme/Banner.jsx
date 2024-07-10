"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { MdReadMore } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-black text-white">
      <div className="  py-16 w-11/12 md:w-10/12 max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-6 ">
        {/* description section */}
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
          <div className="my-6">
            {/* <Button
              className="bg-white text-black px-36 my-6 font-bold "
              radius="full"
            >
              Try Theme
            </Button> */}
            <button
              className="relative h-14 w-64 shadow-md hover:shadow-none shadow-primaryColor  origin-top transform rounded-lg border-2
             border-primaryColor/80 text-xl text-primaryColor before:absolute before:top-0 before:block 
             before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute 
             hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primaryColor/80"
            >
              Buy Now
            </button>
          </div>
          <div className="pt-8 flex gap-4 items-center flex-col">
            <Link href="">
              {" "}
              <p className="text-lg text-center flex items-center gap-2 hover:text-primaryColor">
                View Demo Store <MdReadMore size={'2rem'} />
              </p>{" "}
            </Link>
            <p className="text-sm  text-gray-500">
              {" "}
              <span className="underline hover:no-underline text-white">
                {" "}
                <Link href="" className=" hover:text-primaryColor">
                  Unlimited free trial
                </Link>
              </span>
              . Pay if you publish.
            </p>
          </div>
        </div>
        {/* image card section */}

        <div
          className="lg:w-2/3  xl:h-[580px] h-[480px] overflow-hidden  max-h-full flex flex-col-reverse rounded-xl border-large border-primaryColor border-opacity-70  hover:shadow-primaryColor hover:shadow-lg  bg-cover bg-no-repeat bg-top hover:bg-bottom duration-[4s]"
          style={{
            backgroundImage: `url('https://cdn.shopify.com/theme-store/qumk1q6o0adk0lzvfybn0xfr4rl3.jpg')`,
          }}
        >
          <div
            className="w-2/5 ml-auto xl:h-[380px] lg:h-[270px] h-[200px]  overflow-hidden   max-h-full flex flex-col-reverse rounded-xl border-primaryColor border-opacity-70 border-large hover:shadow-primaryColor hover:shadow-lg  bg-primaryColor bg-cover bg-no-repeat bg-top hover:bg-bottom duration-[2s]"
            style={{
              backgroundImage: `url('https://cdn.shopify.com/theme-store/qumk1q6o0adk0lzvfybn0xfr4rl3.jpg')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
