"use client";

import { useState } from "react";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Businesses } from "@/data";

export const OurBusinesses = () => {
  const [activeBusinessId, setActiveBusinessId] = useState(Businesses[0].id);

  const activeBusiness =
    Businesses.find((business) => business.id === activeBusinessId) ??
    Businesses[0];

  return (
    <section className="px-10 py-7 mt-15 max-[541px]:mt-10 text-black relative max-[541px]:px-5 max-[541px]:py-5 overflow-hidden">
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <m.div
            key={activeBusinessId}
            className={`absolute -inset-10 bg-no-repeat bg-cover will-change-transform`}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            style={{
              backgroundImage: `url("${activeBusiness.imageSrc}")`,
            }}
          />
        </AnimatePresence>
      </LazyMotion>
      <div className="absolute inset-0 bg-black/18" />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] relative text-white min-h-140">
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
            {Businesses.map((business) => {
              const isActive = business.id === activeBusinessId;

              return (
                <button
                  key={business.id}
                  type="button"
                  onClick={() => setActiveBusinessId(business.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
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
          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait">
              <m.article
                key={activeBusinessId}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{ duration: 0.25, type: "tween" }}
                className={`relative overflow-hidden h-full rounded-4xl p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] max-[541px]:rounded-3xl max-[541px]:p-5 bg-black/40 backdrop-blur-sm`}
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

                  <p className="mt-8 max-[451px]:mt-4 max-w-2xl text-lg leading-relaxed text-white/82 max-[541px]:mt-6 max-[541px]:text-base line-clamp-2 max-[541px]:line-clamp-none">
                    {activeBusiness.description}
                  </p>

                  <div className="mt-7 grid gap-4 md:grid-cols-[1.1fr_0.9fr] max-[541px]:mt-8 max-[541px]:hidden">
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
                  </div>

                  <div className="max-[541px]:justify-self-end">
                    <button
                      type="button"
                      className="mt-8 inline-flex items-center gap-2 bg-red-700 px-5 py-3 text-xs uppercase tracking-widest font-semibold text-white transition-transform duration-300 hover:translate-x-1"
                    >
                      Explore {activeBusiness.name}
                      <HiOutlineArrowLongRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </m.article>
            </AnimatePresence>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};
