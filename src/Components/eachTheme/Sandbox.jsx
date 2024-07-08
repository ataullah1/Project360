/* eslint-disable @next/next/no-img-element */
import { Link } from "@nextui-org/react";
import React from "react";

const Sandbox = () => {
  return (
    <div className="max-w-7xl mx-auto my-24">
      <h2 className=" text-2xl font-semibold mb-5">
        More themes by{" "}
        <a
          href=" "
          className=" underline hover:text-blue-600 hover:no-underline"
        >
          {" "}
          Out of the Sandbox
        </a>
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full justify-items-center  gap-4">
        <div className=" bg-white border border-gray-200 rounded-lg shadow h-[524px]">
          <div className="h-[324px] overflow-hidden rounded-lg ">
            <Link href="#">
              <img
                src="https://cdn.shopify.com/theme-store/ufvkupzj7jvu6vm7gy047gdfa40k.jpg"
                className=" "
                alt=""
              />
            </Link>
          </div>

          <div className="px-6 py-4 ">
            <div className=" flex justify-between text-lg font-semibold ">
              <h2>Zest</h2>
              <h2>$300 USD</h2>
            </div>
            <div className="flex flex-wrap gap-4 items-center py-2">
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-red-500"></button>
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-blue-500"></button>
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-gray-500"></button>
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-green-500"></button>
            </div>
            <div className="flex flex-wrap gap-3 text-sm items-center py-2">
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                EU translation (EN,FR,IT,DE,ES)
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                Countdoen timer
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                color Swatches
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                Quick View
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                Stock Counter
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow h-[524px]">
          <div className="h-[324px] overflow-hidden rounded-lg ">
            <Link href="#">
              <img
                src="https://cdn.shopify.com/theme-store/ufvkupzj7jvu6vm7gy047gdfa40k.jpg"
                className=" "
                alt=""
              />
            </Link>
          </div>

          <div className="px-6 py-4 ">
            <div className=" flex justify-between text-lg font-semibold ">
              <h2>Zest</h2>
              <h2>$300 USD</h2>
            </div>
            <div className="flex flex-wrap gap-4 items-center py-2">
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-red-500"></button>
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-blue-500"></button>
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-gray-500"></button>
              <button className=" w-[17px] h-[17px] p-3 rounded-full bg-green-500"></button>
            </div>
            <div className="flex flex-wrap gap-3 text-sm items-center py-2">
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                EU translation (EN,FR,IT,DE,ES)
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                Countdoen timer
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                color Swatches
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                Quick View
              </button>
              <button className="bg-[#cdd0d3] px-1 rounded-md">
                Stock Counter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
