"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowTrendUp,
  FaGlobe,
  FaPeopleGroup,
  FaShieldHalved,
} from "react-icons/fa6";

const stats = [
  {
    value: 60,
    prefix: "$",
    suffix: "M",
    label: "Yearly Market Capital",
    description:
      "A business footprint backed by measurable commercial momentum.",
    Icon: FaArrowTrendUp,
  },
  {
    value: 40,
    suffix: "+",
    label: "Years Of Experience",
    description:
      "Decades of operating depth across industries, partnerships, and markets.",
    Icon: FaShieldHalved,
  },
  {
    value: 30,
    suffix: "%",
    label: "Growth",
    description:
      "A regional presence built to move ideas, products, and relationships farther.",
    Icon: FaGlobe,
  },
  {
    value: 150,
    suffix: "k+",
    label: "Employees",
    description:
      "People, systems, and execution capacity working at meaningful scale.",
    Icon: FaPeopleGroup,
  },
];

export const NumberGrid = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimatedRef = useRef(false);

  const startCounting = () => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    stats.forEach((stat, index) => {
      let currentValue = 0;
      const steps = 40;
      const increment = stat.value / steps;
      const interval = setInterval(
        () => {
          currentValue += increment;

          setCounts((prev) => {
            const next = [...prev];
            next[index] =
              currentValue >= stat.value
                ? stat.value
                : Math.round(currentValue);
            return next;
          });

          if (currentValue >= stat.value) {
            window.clearInterval(interval);
          }
        },
        32 + index * 8,
      );
    });
  };

  return (
    <section className="px-10 max-[541px]:px-5">
      <motion.div
        onViewportEnter={startCounting}
        viewport={{ once: true, amount: 0.35 }}
        className="relative overflow-hidden text-black"
      >
        <div className="relative space-y-20 max-[541px]:space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">
                Social Proof
              </p>
              <h2 className="mt-4 max-w-2xl text-5xl font-black leading-none max-[541px]:text-4xl">
                Scale you can feel, not just numbers dropped into a grid.
              </h2>
            </div>

            <div className="">
              <p className="text-base leading-relaxed text-black/74 max-[541px]:text-sm">
                The business has earned the right to speak with confidence. This
                section turns core figures into a stronger visual signal,
                helping the page feel more established, more modern, and more
                credible at a glance.
              </p>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-4 max-[541px]:grid-cols-1">
            {stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className=""
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/42">
                      Performance
                    </p>
                    <p className="mt-5 text-5xl font-black leading-none max-[541px]:text-4xl">
                      {stat.prefix}
                      {counts[index]}
                      {stat.suffix}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg font-bold leading-tight">
                  {stat.label}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/66">
                  {stat.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
