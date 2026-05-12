"use client";

import { Vehicle } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Swiper from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperComp, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { DetailsCtaShouldShowContext } from "@/contexts/DetailsCtaContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const Hero = ({ vehicleDetails }: { vehicleDetails: Vehicle }) => {
  const [thumbsSwiper, setThumbsSlider] = useState<Swiper | null>(null);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedBeginning, setReachedBeginning] = useState(true);
  const [, SetCtaShouldShow] = useContext(DetailsCtaShouldShowContext);
  return (
    <motion.div
      className="mt-3 mb-10"
      onViewportEnter={() => SetCtaShouldShow(false)}
      onViewportLeave={() => SetCtaShouldShow(true)}
    >
      <div className="grid grid-cols-[1fr_400px] gap-x-5 gap-y-3 px-10 max-[1164px]:px-5 max-[1040px]:grid-cols-1">
        <div className="min-w-0 max-[760px]:-mx-3">
          <div className="min-w-0 relative">
            <div
              className={`absolute left-5 top-1/2 -translate-y-1/2 z-10 text-2xl text-white bg-black/45 hover:bg-red-700/75 transition-colors p-2 cursor-pointer leftEl md:inline-block hidden ${reachedBeginning ? "opacity-0 pointer-events-none" : ""}`}
            >
              <FaChevronLeft />
            </div>
            <SwiperComp
              modules={[Navigation, Thumbs]}
              thumbs={{
                swiper: thumbsSwiper,
              }}
              navigation={{
                nextEl: ".rightEl",
                prevEl: ".leftEl",
              }}
              pagination={{ clickable: true }}
              onSlideChange={(e) => {
                if (e.isEnd) {
                  setReachedEnd(true);
                  return;
                }
                if (e.isBeginning) {
                  setReachedBeginning(true);
                  return;
                }
                setReachedBeginning(false);
                setReachedEnd(false);
              }}
            >
              {vehicleDetails.detailShots.map((shot, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-full aspect-3/2">
                    <Image
                      src={shot}
                      alt={vehicleDetails.name}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1040px) calc(100vw - 40px), calc(100vw - 480px)"
                      quality={80}
                      priority={i === 0}
                      className="object-contain object-bottom"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </SwiperComp>
            <div
              className={`absolute right-5 top-1/2 -translate-y-1/2 z-10 text-2xl text-white bg-black/45 hover:bg-red-700/75 transition-colors p-2 cursor-pointer rightEl md:inline-block hidden ${reachedEnd ? "opacity-0 pointer-events-none" : ""}`}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-[1040px]:order-3">
          <p className="text-sm text-black/45 tracking-[0.35em] uppercase font-bold mb-5">
            Land Rover
          </p>
          <h1 className="text-[2.7rem] line-clamp-3 leading-none font-black text-black mb-4 max-[768px]:text-3xl max-[1220px]:text-4xl max-[760px]:mb-2">
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
          <div className="flex gap-2 items-center max-[760px]:flex-col max-[760px]:items-stretch">
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
        <div className="relative min-w-0 max-[1040px]:order-2 max-[760px]:-mx-3">
          <SwiperComp
            onSwiper={(swiper) => {
              setThumbsSlider(swiper);
              swiper.el.style.opacity = "1";
              swiper.el.style.height = "auto";
            }}
            className="thumb-swiper swiper-over-one_per_view"
            modules={[Navigation, Thumbs, FreeMode]}
            cssMode={true}
            freeMode={{
              enabled: true,
            }}
            watchSlidesProgress={true}
            breakpoints={{
              760: {
                slidesPerView: 6,
                slidesPerGroup: 1,
                spaceBetween: 5,
              },
            }}
            slidesPerView={4.3}
            slidesPerGroup={1}
            spaceBetween={3}
          >
            {vehicleDetails.detailShots?.map((shot, i) => {
              return (
                <SwiperSlide key={i} className="relative aspect-3/2">
                  <Image
                    src={shot}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 23vw, 66px"
                    quality={60}
                    className="object-contain"
                  />
                </SwiperSlide>
              );
            })}
          </SwiperComp>
        </div>
      </div>
    </motion.div>
  );
};
// thumb swiper breakpoint: 1100px
