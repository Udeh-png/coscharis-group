"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const featuredDivisions = [
  {
    name: "Motors",
    label: "Mobility Leadership",
    header: "Moving premium automotive experiences closer to more people.",
    subheader:
      "From distribution to aftersales, the business is built to make performance, trust, and service feel visible at every customer touchpoint.",
    fact: "Nationwide sales and service footprint",
    stat: "40+ years",
    metric: "of operating depth across multiple sectors",
    link: "/divisions/motors",
  },
  {
    name: "Agriculture",
    label: "Long-Horizon Growth",
    header: "Investing in agricultural value with scale, resilience, and care.",
    subheader:
      "A future-facing business shaped around production, sustainability, and dependable execution where long-term thinking matters most.",
    fact: "Built for food systems and durable value creation",
    stat: "20 countries",
    metric: "served through the group's broader footprint",
    link: "/divisions/no-demo",
  },
  {
    name: "Technologies",
    label: "Enterprise Solutions",
    header: "Equipping modern businesses with smarter systems.",
    subheader:
      "Technology operations focused on devices, business systems, and practical digital capability that helps organizations move with confidence.",
    fact: "Reliable infrastructure for modern operations",
    stat: "$60M",
    metric: "yearly market capital highlighted on this page",
    link: "/divisions/no-demo",
  },
];

export default function Hero() {
  const videoElemRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredDivision = featuredDivisions[activeIndex];

  return (
    <section className="absolute inset-0 min-h-dvh overflow-clip text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="size-full object-cover"
        ref={videoElemRef}
        onTimeUpdate={(e) => {
          const elem = e.target as HTMLVideoElement;
          let nextIndex = 0;

          if (elem.currentTime > 13) {
            nextIndex = 2;
          } else if (elem.currentTime > 6.5) {
            nextIndex = 1;
          }

          setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(4,10,18,0.82)_10%,rgba(4,10,18,0.45)_48%,rgba(4,10,18,0.9)_100%)]" />

      <div className="absolute inset-x-0 top-0 mx-auto flex min-h-dvh max-w-400 items-center px-10 pb-14 pt-28 max-[955px]:items-end max-[955px]:pb-10 max-[541px]:px-5 max-[541px]:pt-24">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredDivision.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/55">
                    {featuredDivision.label}
                  </p>
                  <h1 className="mt-5 max-w-4xl text-6xl font-black text-balance max-[1100px]:text-5xl max-[541px]:text-[2.55rem]">
                    {featuredDivision.header}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 max-[541px]:text-base">
                    {featuredDivision.subheader}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="mt-9 max-[541px]:mt-4 flex flex-wrap items-center gap-4"
            >
              <Link
                href={featuredDivision.link}
                className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white transition-transform duration-300 hover:translate-x-1"
              >
                Explore {featuredDivision.name}
                <HiOutlineArrowLongRight className="text-lg" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 border border-white/50 px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white/88 transition-colors duration-300"
              >
                Start A Conversation
                <HiOutlineArrowLongRight className="text-lg" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
