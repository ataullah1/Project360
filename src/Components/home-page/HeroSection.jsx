/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use clinet";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import useFetchQuery from "@/Hooks/shared/useFetch";

const HeroSection = () => {
  const { data, isLoading } = useFetchQuery("/themes");
  const images = data?.data || [];
  // console.log("Is Loading: ", isLoading);
  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center w-11/12 mx-auto lg:w-auto lg:pl-40 gap-10 mt-14">
      <div className="w-full lg:w-2/5">
        <h1 className="text-5xl font-bold leading-snug">
          Creative multi-purpose{" "}
          <span className="text-primaryColor">Shopify</span> theme
        </h1>
        <p className="text-xl opacity-70 pt-3 pb-12">
          <span className="text-primaryColor">#1 Best Selling</span> Shopify
          Theme of all time on Envato. An all-in-one template for your Shopify
          store, allowing you to create various structures and meet specific
          requirements.
        </p>
        <div className="flex items-center gap-8">
          <button className="relative h-12 w-52 origin-top transform rounded-lg border-2 border-primaryColor text-xl before:absolute before:bottom-0 before:block before:h-0 before:w-full before:duration-500 hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full bg-primaryColor before:rounded-lg text-white hover:text-primaryColor hover:before:bg-white">
            Buy Theme
          </button>
          <button className="relative h-12 w-52 origin-top transform rounded-lg border-2 border-primaryColor text-xl text-primaryColor before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primaryColor">
            Explore Theme
          </button>
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <div className="w-full relative">
          <div className="border-slate-200 rounded-lg shadow-md shadow-slate-300 lg:p-8 lg:pt-12 border min-h-96 relative">
            <div className="absolute top-5 left-7 flex items-center gap-2">
              <div className="size-3 bg-slate-600 rounded-full"></div>
              <div className="size-3 bg-slate-600 rounded-full"></div>
              <div className="size-3 bg-slate-600 rounded-full"></div>
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full h-96 md:h-[450px] lg:h-[650px]"
            >
              {images.map((img) => (
                <SwiperSlide
                  key={img._id}
                  className="h-full w-full bg-cover bg-no-repeat bg-top rounded-md"
                  style={{
                    backgroundImage: `url(${img.featuredDesktopImage})`,
                  }}
                >
                  {/* <img
                    className="max-w-full rounded-md"
                    src={img.featuredDesktopImage}
                    alt=""
                  /> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* side image color */}
      <img
        className="absolute h-full -left-[600px] -rotate-12 top-6 "
        src="https://themes.halothemes.com/marketplace/shopify-ella-ldp/assets/images/parallax-layer-red.png"
        alt=""
      />
    </div>
  );
};

export default HeroSection;
