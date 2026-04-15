"use client";

import Hero from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { NumberGrid } from "@/components/number-grid";
import { OurBusinesses } from "@/components/our-businesses";
import { NewsFeeds } from "@/components/news-feed";
import { BodyVisibilityContext } from "@/contexts/BodyVisibility";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Home() {
  const [, setBodyIsVisible] = useContext(BodyVisibilityContext);
  return (
    <div>
      <div className="h-dvh -mt-5">
        <Hero />
      </div>

      <div id="body" className="">
        <motion.div
          onViewportEnter={() => setBodyIsVisible(true)}
          onViewportLeave={() => setBodyIsVisible(false)}
        >
          <Marquee />
          <NumberGrid />
          <OurBusinesses />
          <NewsFeeds />
        </motion.div>
      </div>
    </div>
  );
}
