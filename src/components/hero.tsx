"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="absolute inset-0 min-h-dvh overflow-clip">
      <div className="absolute inset-0 bg-black/20" />
      <video autoPlay loop muted className="size-full object-cover">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute left-10 max-[541px]:left-3 bottom-20 max-[541px]:bottom-15 text-white max-w-lg">
        <motion.div
          className="h-1 bg-accent-primary w-25 mb-7 max-[541px]:mb-4"
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
            transformOrigin: "left",
          }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
        />
        <motion.p
          className="text-5xl max-[541px]:text-3xl font-bold capitalize"
          initial={{
            translateX: -50,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Building <span className="text-accent-primary">tomorrow&apos;s</span>{" "}
          Heritage, today.
        </motion.p>
        <motion.p
          className="mt-5 max-[541px]:mt-2 max-[541px]:text-sm"
          initial={{
            translateX: -50,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Leading the transformation of the african continent through
          sustainable industrialization and visionary infrastructure
        </motion.p>

        <motion.div
          className="mt-8 max-[541px]:mt-4 flex max-[541px]:flex-col gap-5 max-[541px]:gap-2 uppercase text-xs"
          initial={{
            translateY: 50,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
        >
          <div>
            <Link
              href="/divisions"
              className="block px-7 w-fit py-3 rounded-md tracking-widest font-medium bg-linear-to-r from-accent-primary-dark to-accent-primary-light"
            >
              Explore our divisions
            </Link>
          </div>

          <div>
            <Link
              href="/"
              className="block px-7 w-fit py-3 bg-background-secondary rounded-md tracking-widest font-medium text-accent-secondary"
            >
              Out Impact
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-1 left-1/2 -translate-x-full size-10 rounded-full bg-linear-to-r from-accent-primary-dark to-accent-primary-light text-white animate-float">
        <Link
          href={"#body"}
          className="size-full flex items-center justify-center"
        >
          <FaArrowDown className="" />
        </Link>
      </motion.div>

      <div className="" />
    </div>
  );
}
