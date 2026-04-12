"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  FaCarSide,
  FaDisplay,
  FaBottleWater,
  FaWheatAwn,
  FaTruckFast,
  FaCapsules,
} from "react-icons/fa6";

const businesses = [
  {
    id: "motors",
    name: "Motors",
    kicker: "Flagship Distribution",
    description:
      "A high-visibility automotive business built around premium vehicle brands, nationwide reach, and dependable aftersales support that keeps customers moving.",
    eyebrow: "01",
    imageSrc: "/cars.jpg",
    stat: "Nationwide",
    statLabel: "Sales and service footprint",
    highlights: [
      "Vehicle sales, financing support, and fleet relationships",
      "Aftersales, parts distribution, and workshop excellence",
      "A brand experience designed to feel premium at every touchpoint",
    ],
    Icon: FaCarSide,
  },
  {
    id: "technologies",
    name: "Technologies",
    kicker: "Enterprise Solutions",
    description:
      "Technology operations focused on infrastructure, devices, and business systems that help modern organizations run smarter, faster, and more reliably.",
    eyebrow: "02",
    imageSrc: "/tech.jpg",
    stat: "Connected",
    statLabel: "Digital systems for modern operations",
    highlights: [
      "Enterprise hardware, deployment, and support services",
      "Solutions built for resilience, security, and continuity",
      "Technology partnerships that turn complexity into confidence",
    ],
    Icon: FaDisplay,
  },
  {
    id: "mobility",
    name: "Mobility",
    kicker: "Movement At Scale",
    description:
      "Integrated mobility solutions designed to improve how people, fleets, and goods move through busy markets with speed, reliability, and care.",
    eyebrow: "03",
    imageSrc: "/",
    stat: "Always On",
    statLabel: "Transport solutions with operational depth",
    highlights: [
      "Fleet-driven thinking for demanding commercial needs",
      "Customer-first mobility experiences across touchpoints",
      "Systems that prioritize uptime, service quality, and trust",
    ],
    Icon: FaTruckFast,
  },
  {
    id: "beverages",
    name: "Beverages",
    kicker: "Consumer Reach",
    description:
      "A consumer-facing business with room for storytelling, shelf presence, and brand-building across retail channels and high-frequency purchase moments.",
    eyebrow: "04",
    imageSrc: "/",
    stat: "Everyday",
    statLabel: "Brands built for visibility and repeat demand",
    highlights: [
      "Retail distribution with strong market-facing energy",
      "Products positioned for memorability and repeat purchase",
      "Execution that balances reach, consistency, and freshness",
    ],
    Icon: FaBottleWater,
  },
  {
    id: "medicine-foods",
    name: "Medicine & Foods",
    kicker: "Essential Supply",
    description:
      "Critical product categories delivered with care, consistency, and strong operational discipline across health and nutrition needs.",
    eyebrow: "05",
    imageSrc: "/",
    stat: "Trusted",
    statLabel: "Essential categories handled responsibly",
    highlights: [
      "Operations built for compliance, reliability, and care",
      "Supply chains that support product confidence",
      "A practical business with meaningful everyday impact",
    ],
    Icon: FaCapsules,
  },
  {
    id: "farms",
    name: "Farms",
    kicker: "Agricultural Value",
    description:
      "Agricultural investments and production activities shaped around long-term sustainability, food systems, and dependable execution in the field.",
    eyebrow: "06",
    imageSrc: "/",
    stat: "Grounded",
    statLabel: "Long-horizon thinking backed by real operations",
    highlights: [
      "Production-led execution with durable market relevance",
      "A long-term play in value creation and resilience",
      "Sustainability and stewardship built into the business story",
    ],
    Icon: FaWheatAwn,
  },
];

export const OurBusinesses = () => {
  const [activeBusinessId, setActiveBusinessId] = useState(businesses[0].id);

  const activeBusiness =
    businesses.find((business) => business.id === activeBusinessId) ??
    businesses[0];

  return (
    <section className="px-10 py-7 text-black relative max-[541px]:px-5 max-[541px]:py-5 overflow-hidden">
      <AnimatePresence>
        <motion.div
          initial={{
            scaleY: 0.92,
            opacity: 0,
          }}
          animate={{
            scaleY: 1,
            opacity: 1,
          }}
          exit={{
            scaleY: 0.92,
            opacity: 0,
          }}
          transition={{
            type: "tween",
          }}
          key={activeBusinessId}
          className={`absolute -inset-10 bg-no-repeat bg-cover will-change-transform`}
          style={{
            backgroundImage: `url("${activeBusiness.imageSrc}")`,
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/18" />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] relative text-white">
        <div className="">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/45">
            Our Businesses
          </p>
          <h2 className="mt-4 max-w-xl text-5xl font-black leading-none max-[541px]:text-4xl">
            Big ideas deserve more than a row of tiny cards.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65 max-[541px]:text-base">
            Each division carries its own market role, customer promise, and
            operating strength. This section gives every business enough room to
            feel distinct, credible, and worth exploring.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 max-[541px]:mt-5">
            {businesses.map((business) => {
              const isActive = business.id === activeBusiness.id;

              return (
                <button
                  key={business.id}
                  type="button"
                  onClick={() => setActiveBusinessId(business.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-red-700 text-white"
                      : "bg-white/60 text-black/70"
                  }`}
                >
                  {business.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeBusiness.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-4xl p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] max-[541px]:rounded-3xl max-[541px]:p-5 bg-black/40 backdrop-blur-sm`}
            >
              <div className="relative">
                <div className="flex items-start justify-between gap-6 max-[541px]:flex-col">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/65">
                      {activeBusiness.kicker}
                    </p>
                    <div className="mt-5 flex items-end gap-4 max-[541px]:items-center">
                      <span className="text-sm font-semibold text-white/50">
                        {activeBusiness.eyebrow}
                      </span>
                      <h3 className="text-6xl font-black leading-none max-[541px]:text-4xl">
                        {activeBusiness.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-8 max-[451px]:mt-4 max-w-2xl text-lg leading-relaxed text-white/82 max-[541px]:mt-6 max-[541px]:text-base">
                  {activeBusiness.description}
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-[1.1fr_0.9fr] max-[541px]:mt-8 max-[541px]:hidden">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                      What Makes It Stand Out
                    </p>
                    <ul className="mt-4 space-y-4">
                      {activeBusiness.highlights.map((item) => (
                        <li
                          key={item}
                          className="border-l border-white/20 pl-4 text-sm leading-relaxed text-white/82"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="self-end justify-self-end">
                    <button
                      type="button"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:translate-x-1"
                    >
                      Explore {activeBusiness.name}
                      <HiOutlineArrowLongRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
