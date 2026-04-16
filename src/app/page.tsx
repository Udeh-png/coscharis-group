"use client";

import Hero from "@/sections/home/hero";
import { Marquee } from "@/sections/home/marquee";
import { NumberGrid } from "@/sections/home/social-proof";
import { OurBusinesses } from "@/sections/home/our-businesses";
import { NewsFeeds } from "@/sections/home/news-feed";
import { BodyVisibilityContext } from "@/contexts/BodyVisibility";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ContactUs } from "@/sections/home/contact-us";

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
          <ContactUs />
        </motion.div>
      </div>
    </div>
  );
}
