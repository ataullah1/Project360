"use clinet";
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import useFetchQuery from "@/Hooks/shared/useFetch";
import Link from "next/link";
const HomeMarquee = () => {
  const { data, isLoading } = useFetchQuery("/themes");
  const cards = data?.data || [];
  return (
    <div className="my-20">
      <h1 className="max-w-[1800px] mx-auto px-4 mb-10 md:text-2xl font-bold text-lg ">
        Powering our community of entrepreneurs
      </h1>
      <Marquee pauseOnHover={true} className="">
      {cards.map((dta) => (
         <div  key={dta._id} className="h-[470px] w-[380px] mr-12 relative group overflow-hidden">
         <Image
           fill
           className="w-full h-[550px] border border-black rounded-xl"
           src={dta?.featuredDesktopImage}
         ></Image>
         <div className="absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center">
           <h3 className="text-2xl">{dta?.name}</h3>
           <p>${dta?.price} USD</p>
           <Link href={`/themes/${dta._id}`}><button className="text-xl px-5 py-3 bg-black text-white rounded-full">
             View theme
           </button></Link>
           
         </div>
       </div>
             
              ))}
      </Marquee>

      <Marquee pauseOnHover={true} direction={"right"} className="mt-10">
      {cards.slice().reverse().map((dta) => (
         <div  key={dta._id} className="h-[470px] w-[380px] mr-12 relative group overflow-hidden">
         <Image
           fill
           className="w-full h-[550px] border border-black rounded-xl"
           src={dta?.featuredDesktopImage}
         ></Image>
         <div className="absolute hover:bg-white/80 inset-0 w-full h-full translate-y-[100%] group-hover:translate-y-0 flex flex-col justify-center items-center">
           <h3 className="text-2xl">{dta?.name}</h3>
           <p>${dta?.price} USD</p>
           <Link href={`/themes/${dta._id}`}><button className="text-xl px-5 py-3 bg-black text-white rounded-full">
             View theme
           </button></Link>
           
         </div>
       </div>   
              ))}
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
