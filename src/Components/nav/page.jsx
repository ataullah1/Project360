/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
  Accordion,
  AccordionItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { ImCross } from "react-icons/im";

const Navigation = () => {
  const [show, setShow] = useState("hidden");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSearchbar = () => {
    setShow("");
  };
  // menu item for large device
  const menuItems = (
    <>
      <li className="">
        <Dropdown>
          <DropdownTrigger>
            <div className="flex gap-2 items-center cursor-pointer">
              Collections <FaAngleDown />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className=" ">
            <DropdownItem key="new">
              {" "}
              <Link
                href={"/collections/largeCatalogs"}
                className="font-semibold hover:underline "
              >
                Large catalogs
              </Link>
            </DropdownItem>
            <DropdownItem key="copy">
              {" "}
              <Link
                href={"/collections/smallCatalogs"}
                className="font-semibold hover:underline "
              >
                Small catalogs
              </Link>{" "}
            </DropdownItem>
            <DropdownItem key="edit" >
              {" "}
              <Link href={"/collections/freeTheme"} className="font-semibold hover:underline ">
                Free themes
              </Link>
            </DropdownItem>
            <DropdownItem key="edit">
              {" "}
              <Link
                href={"/collections/sellingPerson"}
                className="font-semibold hover:underline "
              >
                Selling in person
              </Link>
            </DropdownItem>
            <DropdownItem key="edit">
              <Link
                href={"/collections/sellingInternational"}
                className="font-semibold hover:underline"
              >
                Selling internationally
              </Link>
            </DropdownItem>
            <DropdownItem key="edit">
              {" "}
              <Link href={"/collections/minimalist"} className="font-semibold hover:underline">
                Minimalist style
              </Link>
            </DropdownItem>
            <DropdownItem key="edit">
              {" "}
              <Link href={"/collections/trending"} className="font-semibold hover:underline">
                Trending this week
              </Link>
            </DropdownItem>
            <DropdownItem key="edit">
              {" "}
              <Link href={"/collections/newTheme"} className="font-semibold hover:underline">
                New theme releases
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </li>
      <li>
        <Link href={"/themes"}>All themes</Link>
      </li>
    </>
  );

  return (
    <div className="w-full h-20 flex  bg-white fixed top-0 left-0 right-0 z-40">
      <nav className="w-10/12 mx-auto h-20 flex items-center justify-between px-2 lg:px-0 md:px-0 bg-white fixed top-0 left-0 right-0 z-40">
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
            {menuItems}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* search icon  */}
          <div className="text-3xl">
            <button onClick={handleSearchbar}>
              <IoSearch />
            </button>
          </div>

          {/* menu  icon  */}
          <div className=" md:hidden lg:hidden text-2xl flex flex-col gap-2">
            {/* + icon  */}
            <button
              onClick={onOpen}
              className="flex justify-center w-16 h-16 rounded-full items-center"
            >
              <GrMenu />
            </button>
            {/* icon container  */}
            <Modal
              className="overflow-y-auto"
              backdrop="opaque"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              radius="lg"
              size="full"
              hideCloseButton
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex items-end justify-end  gap-1 border-b border-slate-200">
                      <Button
                        className="h-8 text-sm  rounded-full text-white bg-slate-900 font-semibold"
                        onPress={onClose}
                      >
                        <ImCross />
                      </Button>
                    </ModalHeader>
                    <ModalBody>
                      <ul>
                        <li className=" text-lg font-semibold ">
                          <Accordion selectionMode="multiple">
                            <AccordionItem
                              key="1"
                              aria-label="Collections"
                              title="Collections"
                            >
                              <ul className=" text-base font-normal text-gray-900">
                                <li>
                                  {" "}
                                  <Link
                                    onClick={onClose}
                                    href={"/collections/largeCatalogs"}
                                  >
                                    Large catalogs
                                  </Link>
                                </li>
                                <li>
                                  {" "}
                                  <Link
                                    onClick={onClose}
                                    href={"/collections/freeTheme"}
                                  >
                                    Free themes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={onClose}
                                    href={"/collections/sellingPerson"}
                                  >
                                    Selling in person
                                  </Link>
                                </li>
                                <li>
                                  {" "}
                                  <Link
                                    onClick={onClose}
                                    href={"/collections/sellingInternational"}
                                  >
                                    Selling internationally
                                  </Link>
                                </li>
                                <li>
                                  {" "}
                                  <Link
                                    onClick={onClose}
                                    href={"/collections/minimalist"}
                                  >
                                    Minimalist style
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={onClose}
                                    href={"/collections/trending"}
                                  >
                                    Trending this week
                                  </Link>
                                </li>
                                <li>
                                  {" "}
                                  <Link
                                    onClick={onClose}
                                    href={"/collections/newTheme"}
                                  >
                                    New theme releases
                                  </Link>
                                </li>
                              </ul>
                            </AccordionItem>
                          </Accordion>
                        </li>
                        <li className=" text-lg font-semibold ml-2">
                          <Link onClick={onClose} href={"/themes"}>
                            All themes
                          </Link>
                        </li>
                      </ul>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div className="hidden md:flex lg:flex">
            <Link
              href={"/login"}
              className="px-8 py-3 text-[#42474c] font-semibold"
            >
              Log in
            </Link>
            <Link
              href={"/signup"}
              className="px-6 py-3 bg-[#008060] hover:bg-white hover:text-black rounded-full font-medium text-white border border-black"
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>
      <Searchbar cls={show} setShow={setShow} />
    </div>
  );
};

export default Navigation;
