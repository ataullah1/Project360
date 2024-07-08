"use client";
import { FaQuoteLeft } from "react-icons/fa";
import "./style/componentStyle.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  return (
    <div className="bg-[#fbf2ef]">
      <div className="max-w-[1800px] w-10/12 mx-auto px-4 py-10 relative">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          loop={true}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <div className="">
                <FaQuoteLeft className="text-5xl mb-7 mt-20" />
                <h3 className="text-4xl font-semibold">
                  When I launched my company it took me forever to choose a
                  theme and I'm so glad I picked pipeline. It grew as my
                  business grew.
                </h3>
                <p className="mt-10 text-xl">— Ouive</p>
              </div>
              <div className="ml-36">
                <div className="text-center inline-block">
                  <Image
                    width={500}
                    height={500}
                    src={
                      "https://cdn.shopify.com/theme-store/q1alwd14rzguxn4ilv2kepclqr5u.jpg"
                    }
                    className="w-[450px] h-[650px] border border-black rounded-xl"
                  ></Image>

                  <p className="text-xl mt-10">
                    {" "}
                    <Link
                      href={`https://themes.shopify.com/themes/pipeline/styles/clean?locale=en&surface_detail=testimonials&surface_inter_position=4&surface_intra_position=8&surface_type=home`}
                      className="underline"
                    >
                      Pipeline
                    </Link>{" "}
                    by Groupthought
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <div className="">
                <FaQuoteLeft className="text-5xl mb-7 mt-20" />
                <h3 className="text-4xl font-semibold">
                  When I launched my company it took me forever to choose a
                  theme and I'm so glad I picked pipeline. It grew as my
                  business grew.
                </h3>
                <p className="mt-10 text-xl">— Ouive</p>
              </div>
              <div className="ml-36">
                <div className="text-center inline-block">
                  <Image
                    height={500}
                    width={500}
                    src="https://cdn.shopify.com/theme-store/q1alwd14rzguxn4ilv2kepclqr5u.jpg"
                    className="w-[450px] h-[650px] border border-black rounded-xl"
                  ></Image>

                  <p className="text-xl mt-10">
                    {" "}
                    <Link
                      href={`https://themes.shopify.com/themes/pipeline/styles/clean?locale=en&surface_detail=testimonials&surface_inter_position=4&surface_intra_position=8&surface_type=home`}
                      className="underline"
                    >
                      Pipeline
                    </Link>{" "}
                    by Groupthought
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <div className="">
                <FaQuoteLeft className="text-5xl mb-7 mt-20" />
                <h3 className="text-4xl font-semibold">
                  When I launched my company it took me forever to choose a
                  theme and I'm so glad I picked pipeline. It grew as my
                  business grew.
                </h3>
                <p className="mt-10 text-xl">— Ouive</p>
              </div>
              <div className="ml-36">
                <div className="text-center inline-block">
                  <Image
                    height={500}
                    width={500}
                    src="https://cdn.shopify.com/theme-store/q1alwd14rzguxn4ilv2kepclqr5u.jpg"
                    className="w-[450px] h-[650px] border border-black rounded-xl"
                  ></Image>

                  <p className="text-xl mt-10">
                    {" "}
                    <Link
                      href={`https://themes.shopify.com/themes/pipeline/styles/clean?locale=en&surface_detail=testimonials&surface_inter_position=4&surface_intra_position=8&surface_type=home`}
                      className="underline"
                    >
                      Pipeline
                    </Link>{" "}
                    by Groupthought
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="arrow-left arrow absolute top-[480px] left-40 z-50 cursor-pointer">
          {" "}
          <FaLongArrowAltRight className="text-4xl" />{" "}
        </button>
        <button className="arrow-right arrow absolute top-[480px]  z-50 cursor-pointer">
          {" "}
          <FaLongArrowAltLeft className="text-4xl" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
