"use client";

import Hero from "@/components/hero";
import { NumberGrid } from "@/components/number-grid";
import { BodyVisibilityContext } from "@/contexts/BodyVisibility";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Home() {
  return (
    <div>
      <div className="h-dvh -mt-5">
        <Hero />
      </div>

      {/* <motion.div
        onViewportEnter={() => setBodyIsVisible(true)}
        onViewportLeave={() => setBodyIsVisible(false)}
        id="body"
      >
        <div className="mb-15">
          <NumberGrid />
        </div>

        <div className="bg-background-secondary-2 px-10 max-[541px]:px-5 py-10">
          <div className="mb-7">
            <p className="text-3xl font-extrabold mb-2">Core Divisions</p>
            <p className="text-sm">
              The pillar of our industry presence across the continent
            </p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-[1.5fr_1fr] gap-x-10">
              <div className="bg-[url('/car-butt.jpg')] bg-cover bg-center h-80 rounded-lg flex items-end">
                <div className="h-[48%] w-full backdrop-blur-3xl backdrop-brightness-200 flex items-end px-10 pb-7 rounded-b-lg">
                  <div className="w-3/4 border-l-5 border-accent-primary pl-3 space-y-2 text-white">
                    <p className="text-xl font-bold">Automotive</p>

                    <p className="text-sm">
                      Precision engineering and luxury distribution, across
                      sub-Saharan market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[url('/cargo-truck.jpg')] relative overflow-clip bg-cover bg-center h-80 rounded-lg flex items-end">
                <div className="absolute inset-0 bg-black/40" />

                <div className="px-10 pb-7 space-y-2 text-white relative">
                  <p className="text-xl font-bold">Logistics</p>

                  <p className="text-sm">
                    Efficient distribution network bridging the gap between
                    production and consumer
                  </p>
                </div>
              </div>
            </div>

            <div className="grid h-100 grid-cols-3 gap-x-10">
              <div className="bg-red-500 rounded-lg w-full"></div>
              <div className="bg-green-500 rounded-lg w-full"></div>
              <div className="bg-blue-500 rounded-lg w-full"></div>
            </div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
