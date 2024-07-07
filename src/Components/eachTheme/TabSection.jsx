"use client";
import { Tabs, Tab, Button } from "@nextui-org/react";
import React from "react";

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
          <Tab key="photos" title="FEATURES" className=" bg-white border-0">
            <div>
              <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-black ">
                  <tbody>
                    {[1, 2, 3, 4].map((element) => (
                      <tr key={1} className="border-b  ">
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tab>
          <Tab key="music" title="REVIEWS">
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
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TabSection;
