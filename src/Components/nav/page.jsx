"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import Searchbar from "../searchBar/page";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const Navigation = () => {
  const [show, setShow] = useState("hidden");

  const handleSearchbar = () => {
    setShow("");
  };

  return (
    <div className="w-full h-20 flex  bg-white fixed top-0 left-0 right-0 z-40">
      <nav className="max-w-[1400px] mx-auto h-20 flex items-center justify-between px-2 lg:px-0 md:px-0 bg-white fixed top-0 left-0 right-0 z-40">
        <div className="flex gap-16">
          <Link href={"/"}>
            <div className="flex gap-1 items-center">
              <img
                src="https://i.ibb.co/jgzQqq1/edit.png"
                className="h-7 w-7"
              />
              <h2 className="italic font-light text-lg">Themes</h2>
            </div>
          </Link>
          <div className="flex">
            <ul className="hidden md:flex lg:flex gap-7 font-medium">
              <li className="">
                <Dropdown>
                  <DropdownTrigger>
                    <div className="flex gap-2 items-center">
                      Collections <FaAngleDown />
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new"> Large catalogs</DropdownItem>
                    <DropdownItem key="copy">Small catalogs</DropdownItem>
                    <DropdownItem key="edit">Free themes</DropdownItem>
                    <DropdownItem key="edit">Selling in person</DropdownItem>
                    <DropdownItem key="edit">
                      Selling internationally
                    </DropdownItem>
                    <DropdownItem key="edit">Minimalist style</DropdownItem>
                    <DropdownItem key="edit">Trending this week</DropdownItem>
                    <DropdownItem key="edit">New theme releases</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>
                <Link href={"/themes"}>All themes</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-3xl">
            <button onClick={handleSearchbar}>
              <IoSearch />
            </button>
          </div>
          <div className="block md:hidden lg:hidden text-2xl">
            <GrMenu />
          </div>
          <div className="hidden md:flex lg:flex">
            <button className="px-8 py-3 text-[#42474c] font-semibold">
              Log in
            </button>
            <button className="px-6 py-3 bg-[#008060] hover:bg-white hover:text-black rounded-full font-medium text-white border border-black">
              Sign in
            </button>
          </div>
        </div>
      </nav>
      <Searchbar cls={show} setShow={setShow} />
    </div>
  );
};

export default Navigation;
