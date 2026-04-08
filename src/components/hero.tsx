"use client";

import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { useState, useContext, useEffect, useRef } from "react";
import { BodyVisibilityContext } from "@/contexts/BodyVisibility";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const featuredDivisions = [
  {
    name: "Motors",
    header:
      "Driving the future of mobility with sustainable transportation solutions.",
    subheader:
      "Leading the charge in revolutionizing transportation through innovative electric vehicles and sustainable mobility solutions.",
    link: "/divisions/motors",
  },
  {
    name: "Agriculture",
    header: "Cultivating innovation for a sustainable future in agriculture.",
    subheader:
      "Pioneering sustainable agricultural practices and innovative solutions for a greener future. We are committed to transforming agriculture through technology, research, and sustainable farming methods that ensure food security and environmental stewardship.",
    link: "/divisions/agriculture",
  },
  {
    name: "Technologies",
    header: "Empowering the future with innovative technology solutions.",
    subheader:
      "Driving technological innovation to empower a smarter, more connected future. Our technology division is at the forefront of developing cutting-edge solutions that transform industries and enhance lives.",
    link: "/divisions/technology",
  },
];

export default function Hero() {
  const [bodyIsVisible] = useContext(BodyVisibilityContext);
  const videoElemRef = useRef<HTMLVideoElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [featuredDivision, setFeaturedDivision] = useState<{
    name: string;
    header: string;
    subheader: string;
    link: string;
  }>({
    name: "",
    header: "",
    subheader: "",
    link: "",
  });

  useEffect(() => {
    const slider = sliderRef.current;
    const videoElem = videoElemRef.current;
    if (!slider || !videoElem) return;
    const interval = setInterval(() => {
      setSliderValue(() => {
        const duration = videoElem.duration || 0;
        const currentTime = videoElem.currentTime || 0;
        return (currentTime / duration) * 100;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 min-h-dvh overflow-clip text-white">
      <div className="absolute inset-0 bg-black/40" />
      <video
        autoPlay
        loop
        muted
        className="size-full object-cover"
        ref={videoElemRef}
        onTimeUpdate={(e) => {
          const elem = e.target as HTMLVideoElement;
          if (elem.currentTime <= 6.5) {
            setFeaturedDivision(featuredDivisions[0]);
          } else if (elem.currentTime > 6.5 && elem.currentTime <= 13) {
            setFeaturedDivision(featuredDivisions[1]);
          } else if (elem.currentTime > 13 && elem.currentTime <= 20) {
            setFeaturedDivision(featuredDivisions[2]);
          }
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <input
        type="range"
        name=""
        id=""
        min={0}
        max={100}
        className="absolute bottom-20 left-10 w-1/3 rounded-full"
        ref={sliderRef}
        step={0.1}
        value={sliderValue}
        onChange={(e) => {
          if (videoElemRef.current) {
            const value = parseFloat(e.target.value);
            const duration = videoElemRef.current.duration;
            videoElemRef.current.currentTime = (value / 100) * duration;
          }
        }}
      />

      <div className="absolute left-20 max-[541px]:left-3 top-25 pb-4 max-[541px]:top-20 max-w-lg after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-accent-primary overflow-clip">
        <AnimatePresence>
          <motion.p
            initial={{
              translateY: "100%",
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 1,
              },
            }}
            exit={{
              translateY: "100%",
              opacity: 0,
              position: "absolute",
              transition: {
                duration: 1,
              },
            }}
            className="text-4xl max-[541px]:text-2xl font-bold capitalize leading-tight"
            key={featuredDivision.name}
          >
            {featuredDivision.header}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="absolute max-[541px]:right-1 right-14 pr-6 max-[541px]:pr-3 max-[541px]:bottom-30 bottom-20 max-[541px]:max-w-full max-w-lg after:absolute after:bottom-0 after:right-0 after:w-0.5 after:h-full after:bg-accent-secondary overflow-clip">
        <AnimatePresence>
          <motion.div
            className="flex flex-col items-end gap-y-5"
            initial={{
              translateX: "100%",
              opacity: 0,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 1,
              },
            }}
            exit={{
              translateX: "100%",
              opacity: 0,
              position: "absolute",
              transition: {
                duration: 1,
              },
            }}
            key={featuredDivision.name}
          >
            <p className="max-[541px]:text-sm text-right leading-relaxed">
              {featuredDivision.subheader}
            </p>

            <div className="">
              <Link
                href={featuredDivision.link}
                className="block px-7 w-fit py-3 text-sm tracking-widest font-medium bg-background-secondary text-accent-secondary transition-colors duration-300"
              >
                Coscharis {featuredDivision.name}
                <HiOutlineArrowLongRight className="inline-block ml-2 text-lg" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {!bodyIsVisible && (
          <motion.div
            exit={{ opacity: 0 }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/40 flex flex-col items-center animate-pulse"
          >
            <p className="">Scroll Down</p>
            <div className="h-10 w-0.5 bg-linear-to-b from-transparent to-accent-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
