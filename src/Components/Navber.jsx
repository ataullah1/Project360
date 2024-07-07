'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgClose, CgMenuRightAlt, CgSearch } from 'react-icons/cg';

const Navber = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrolled);
    return () => {
      window.removeEventListener('scroll', handleScrolled);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[900] duration-300 bg-[#ffffff] ${
        scrolled ? 'shadow-xl shadow-[#4a484845] py-2' : 'py-3'
      }`}
    >
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <button className="text-3xl font-bold max-w-28 sm:w-36 h-12 rounded-lg border-2 text-slate-600 border-slate-700">
          Logo
        </button>
        <div className="hidden lg:flex xl:gap-4 items-center navigation text-slate-900 xl:text-lg">
          <Link className="py-2 px-2 hover:text-pClr" href={'/'}>
            Home
          </Link>
          <Link className="py-2 px-2 hover:text-pClr" href={'/service'}>
            Service
          </Link>
          <Link className="py-2 px-2 hover:text-pClr" href={'/guides'}>
            Guides
          </Link>
          <Link className="py-2 px-2 hover:text-pClr" href={'/provider'}>
            Become a service provider
          </Link>
        </div>

        <div className="flex items-center gap-2 relative">
          <div className="relative max-w-48 xl:w-auto xl:max-w-full">
            <input
              type="text"
              placeholder="Search here..."
              className="py-1 px-2 border border-slate-200 focus:outline-none outline-none rounded-full pl-3 w-full text-slate-600"
            />
            <span className="absolute z-30 top-1/2 -translate-y-1/2 right-3 text-xl text-slate-600">
              <CgSearch />
            </span>
          </div>
          <div className="hidden sm:flex gap-2">
            <Link
              href={'/login'}
              className="py-2 px-4 xl:px-6 duration-200 bg-purple-50 hover:bg-purple-100 text-slate-900 rounded-full font-semibold"
            >
              Log in
            </Link>
            <Link
              href={'/signup'}
              className="py-2 px-4 xl:px-6 duration-200 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold"
            >
              Sign Up
            </Link>
          </div>

          {/* Menu Btn */}
          <button
            onClick={() => setMenu(!menu)}
            className="text-4xl lg:hidden duration-300 text-slate-800"
          >
            {menu ? <CgClose /> : <CgMenuRightAlt />}
          </button>

          {menu && (
            <div className="absolute top-12 w-72 rounded-md p-5 right-0 bg-[#F5F4F3] lg:hidden flex flex-col items-center navigation text-slate-900 text-lg">
              <span
                onClick={() => setMenu(!menu)}
                className="rounded-full absolute top-2 left-2 border p-1 border-slate-700 text-xl"
              >
                <CgClose />
              </span>
              <Link
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                href={'/'}
              >
                Home
              </Link>
              <Link
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                href={'/service'}
              >
                Service
              </Link>
              <Link
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                href={'/guides'}
              >
                Guides
              </Link>
              <Link
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                href={'/provider'}
              >
                Become a service provider
              </Link>

              <div className="flex flex-col gap-2 w-full text-center">
                <Link
                  href={'/login'}
                  className="py-2 px-4 w-full xl:px-6 duration-200 bg-purple-50 hover:bg-purple-100 text-slate-900 rounded-full font-semibold"
                >
                  Log in
                </Link>
                <Link
                  href={'/signup'}
                  className="py-2 px-4 w-full xl:px-6 duration-200 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber;
