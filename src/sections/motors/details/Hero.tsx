"use client";

import { Vehicle } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Swiper from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperComp, SwiperSlide } from "swiper/react";

export const Hero = ({ vehicleDetails }: { vehicleDetails: Vehicle }) => {
  const [thumbsSwiper, setThumbsSlider] = useState<Swiper | null>(null);
  return (
    <div className="h-150 max-[1010px]:h-auto mt-15 mb-10 max-[760px]:mt-10">
      <div className="grid grid-cols-[2fr_1fr] gap-5 h-full px-10 max-[1230px]:px-5 max-[1010px]:grid-cols-1">
        <div className="grid grid-rows-[5fr_1fr] gap-y-5 max-[1010px]:h-[50dvh] max-[768px]:h-[40vh] max-[760px]:grid-rows-[3.5fr_1fr] max-[760px]:-mx-4">
          <div className="relative flex justify-center items-center min-w-0">
            {/* <FaChevronLeft className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-2xl text-black cursor-pointer leftEl" /> */}
            <SwiperComp
              className="size-full"
              modules={[Navigation, Thumbs]}
              thumbs={{
                swiper: thumbsSwiper,
              }}
              navigation={{
                nextEl: ".rightEl",
                prevEl: ".leftEl",
              }}
              pagination={{ clickable: true }}
            >
              {vehicleDetails.detailShots.map((shot, i) => (
                <SwiperSlide key={i}>
                  <div className="relative size-full">
                    <Image
                      src={shot}
                      alt={vehicleDetails.name}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </SwiperComp>
            {/* <FaChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-2xl text-black cursor-pointer rightEl" /> */}
          </div>
          <div className="relative h-full min-w-0">
            <SwiperComp
              onSwiper={(swiper) => setThumbsSlider(swiper)}
              className="size-full thumb-swiper"
              modules={[Navigation, Thumbs, FreeMode]}
              cssMode={true}
              freeMode={{
                enabled: true,
              }}
              watchSlidesProgress={true}
              breakpoints={{
                768: {
                  slidesPerView: 5,
                  spaceBetween: 12,
                },
              }}
              slidesPerView={4.2}
              slidesPerGroup={1}
              spaceBetween={8}
            >
              {vehicleDetails.detailShots?.map((shot, i) => {
                return (
                  <SwiperSlide key={i} className="">
                    <Image src={shot} alt="" fill className="object-cover" />
                  </SwiperSlide>
                );
              })}
            </SwiperComp>
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-sm text-black/45 tracking-[0.35em] uppercase font-bold mb-5">
            Land Rover
          </p>
          <h1 className="text-5xl line-clamp-3 leading-none font-black text-black mb-4 max-[768px]:text-3xl max-[760px]:mb-2">
            Land Rover Defender 130 X-Dynamic
          </h1>

          <p className="text-xl text-black/75 mb-5 max-[760px]:text-lg">
            Bold luxury meets intelligent performance.
          </p>

          <p className="text-3xl font-black mb-5 max-[760px]:text-2xl">
            N
            {Number(vehicleDetails.startingPrice).toLocaleString("en-NG") ||
              "0"}
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/45 ml-2">
              Starting Price
            </span>
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-3 mb-10  text-sm font-bold">
            {vehicleDetails.keySpecs.map((spec) => (
              <span
                key={spec}
                className="border border-black/10 bg-black/3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/65"
              >
                {spec}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-black/85 mb-3">
            <p>Official dealership warranty included.</p>
          </div>
          <div className="flex gap-2 items-center max-[1120px]:flex-col max-[1120px]:items-stretch max-[1010px]:flex-row max-[361px]:flex-col">
            <Link
              href={"/"}
              className="inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 hover:translate-x-1 justify-center"
            >
              <p>Book Test Drive</p>
              <HiOutlineArrowLongRight className="text-lg" />
            </Link>

            <Link
              href=""
              className="inline-flex items-center border border-black/45 gap-2 px-5 py-[0.688rem] text-xs font-semibold uppercase tracking-widest transition-transform duration-300 hover:translate-x-1  justify-center"
            >
              <p>Get a Quote</p>
              <HiOutlineArrowLongRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
// thumb swiper breakpoint: 1100px
