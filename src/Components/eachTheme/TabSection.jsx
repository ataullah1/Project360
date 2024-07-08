"use client";
import { Tabs, Tab, Button } from "@nextui-org/react";
import React from "react";
<<<<<<< HEAD
=======
import { FaHeadphones } from "react-icons/fa";
import { GrDocumentVerified } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
>>>>>>> tafiya

const TabSection = () => {
  return (
    <div className=" max-w-7xl mx-auto my-24">
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-black",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-black",
          }}
        >
<<<<<<< HEAD
          <Tab key="photos" title="FEATURES" className=" bg-white border-0">
=======
          <Tab key="feature" title="FEATURES" className=" bg-white border-0">
>>>>>>> tafiya
            <div>
              <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-black ">
                  <tbody>
<<<<<<< HEAD
                    {[1, 2, 3, 4].map((element) => (
                      <tr key={1} className="border-b  ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-semibold"
=======
                    {/* {[1, 2, 3, 4].map((element) => (
                      <tr key={1} className="border-b text-start  ">
                        <th
                          scope="row"
                          className="px-6 py-4  text-gray-900 whitespace-nowrap font-semibold"
>>>>>>> tafiya
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Silver</td>
                        <td className="px-6 py-4">Laptop</td>
                        <td className="px-6 py-4">$2999</td>
                        <td className="px-6 py-4">$2999</td>
                      </tr>
<<<<<<< HEAD
                    ))}
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">$2999</td>
=======
                    ))} */}
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        This theme is great for
                      </th>
                      <td className=" py-8 w-64">
                        <span className=" font-bold">Dropshippers</span> <br />
                        Designed specifically for dropshippers
                      </td>
                      <td className=" py-8 w-64">
                        <span className=" font-bold">High-volume stores</span>{" "}
                        <br />
                        Designed for stores that process a large number of
                        transactions in a given period
                      </td>
                      <td className=" py-8 w-64">
                        <span className=" font-bold">Quick setup</span> <br />
                        Theme setup steps are minimal to allow for quick launch
                      </td>
                    
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Cart and checkout
                      </th>
                      <td className=" py-8 w-64">Cart notes</td>
                      <td className=" py-8 w-64">In-store pickups</td>
                      <td className=" py-8 w-64">Quick buy</td>
                      <td className=" py-8 w-64">Sticky cart</td>
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Marketing and conversion
                      </th>
                      <td className=" py-8 w-64">
                        Blogs <br />
                        FAQ page <br />
                        Promo banners <br />
                        Trust badges
                      </td>
                      <td className=" py-8 w-64">
                        Cross-selling <br />
                        Press coverage <br />
                        Quick view
                      </td>
                      <td className=" py-8 w-64">
                        Customizable contact form <br />
                        Product badges
                        <br />
                        Recommended products
                      </td>
                      <td className=" py-8 w-64">
                        EU translations (EN, FR, IT, DE, ES) <br />
                        Product reviews <br />
                        Stock counter
                      </td>
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Merchandising
                      </th>
                      <td className=" py-8 w-64">
                        High-resolution images <br />
                        Image zoom <br />
                        Shipping/delivery information
                      </td>
                      <td className=" py-8 w-64">
                        Image galleries <br />
                        Product options <br />
                        Slideshow
                      </td>
                      <td className=" py-8 w-64">
                        Image hotspot
                        <br />
                        Product tabs
                      </td>
                      <td className=" py-8 w-64">
                        Image rollover <br />
                        Product videos
                      </td>
                    </tr>
                    <tr className="border-b  ">
                      <th
                        scope="row"
                        className=" py-8 w-[480px] text-lg text-gray-900 whitespace-nowrap font-semibold"
                      >
                        Product discovery
                      </th>
                      <td className=" py-8 w-64">
                      Breadcrumbs <br />
                      Recommended products
                      </td>
                      <td className=" py-8 w-64">
                      Collection page navigation
                      </td>
                      <td className=" py-8 w-64">
                      Enhanced search
                      </td>
                      <td className=" py-8 w-64">
                      Product filtering and sorting
                      </td>
>>>>>>> tafiya
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tab>
<<<<<<< HEAD
          <Tab key="music" title="REVIEWS">
=======
          <Tab key="review" title="REVIEWS">
>>>>>>> tafiya
            <div>
              <div className="flex ">
                <div className="w-1/4">
                  <h2 className=" text-2xl font-bold">243 reviews</h2>
                  <p>96% positive</p>
                  <Button className=" bg-white border" radius="full">
                    Write a review
                  </Button>
                </div>
                <div className="w-3/4"></div>
              </div>
            </div>
          </Tab>
<<<<<<< HEAD
          <Tab key="videos" title="SUPPORT AND DOCUMENTATION">
            <div>
              <div>
                <div className="relative overflow-x-auto ">
                  <table className="w-full text-sm text-left rtl:text-right text-black ">
                    <tbody>
                      <tr className="border-b  ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-semibold"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Silver</td>
                        <td className="px-6 py-4">Laptop</td>
                        <td className="px-6 py-4">$2999</td>
                        <td className="px-6 py-4">$2999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
=======
          <Tab key="support" title="SUPPORT AND DOCUMENTATION">
            <div className=" flex md:gap-28 flex-col md:flex-row">
              <div>
                <h2 className=" text-base font-bold mb-6">
                  This theme is supported by Electric Maybe
                </h2>
                <div className=" flex gap-2 items-center mb-4">
                  <FaHeadphones size={"1.5rem"} />
                  <a
                    href=" "
                    className=" text-sm underline hover:text-blue-600 hover:no-underline"
                  >
                    Get support
                  </a>
                </div>
                <div className=" mb-10 flex gap-2 items-center">
                  <GrDocumentVerified size={"1.5rem"} />
                  <a
                    href=" "
                    className="text-sm  underline hover:text-blue-600 hover:no-underline"
                  >
                    Read the documentation
                  </a>
                </div>
                <h2 className="mb-6 text-lg">About</h2>
                <div className=" my-2 flex gap-2 items-center">
                  <IoLocationSharp size={"1.5rem"} />
                  <h2>Istambul. TR</h2>
                </div>
                <div className=" flex gap-2 items-center">
                  <GrDocumentVerified size={"1.5rem"} />
                  <h2>abcd@xyz.com</h2>
                </div>
              </div>

              <div>
                <h2 className=" text-xl font-bold mb-6">Release notes</h2>
                <h2>No release notes available for this theme.</h2>
>>>>>>> tafiya
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TabSection;
