"use client";

import { Italiana, Island_Moments } from "next/font/google";
import Container from "./Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./ui/Button";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });
const islandMoments = Island_Moments({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  const bars = [
    { height: 25, delay: 0 },
    { height: 50, delay: 0.5 },
    { height: 75, delay: 1 },
  ];

  const tagline = "Elevate Your Online Presence!";
  const [displayedText, setDisplayedText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);

  // Smooth typing effect
  useEffect(() => {
    const brandDelay = 1000; 
    let currentIndex = 0;

    const startTyping = () => {
      const interval = setInterval(() => {
        if (currentIndex < tagline.length) {
          setDisplayedText(tagline.slice(0, currentIndex + 1)); 
          currentIndex++;
        } else {
          clearInterval(interval);
          setTypingFinished(true);
        }
      }, 80);
    };

    const timer = setTimeout(startTyping, brandDelay);

    return () => clearTimeout(timer);
  }, [tagline]);

  return (
    <section className="text-center py-20 overflow-hidden">
      <Container>
        <motion.h1
  className={`${italiana.className} text-6xl md:text-7xl lg:text-8xl font-semibold text-primary tracking-widest`}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
>
  ELEVORA
</motion.h1>


        <p
          className={`${islandMoments.className} text-3xl md:text-5xl lg:text-6xl text-secondary mt-2 relative inline-block`}
        >
          {displayedText}
        </p>

        {/* Underline animation */}
        {typingFinished && (
          <motion.div
            className="h-1 mt-2 rounded-full bg-gradient-to-r from-[#26B1A3] via-[#00E0AA] to-[#008F73] mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
        )}

        <div className="relative mt-12 flex justify-center items-end">
          {/* Background Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut", delay: 2 }}
            className="absolute left-0 right-0 bottom-0 w-full h-60 sm:h-72 lg:h-80 bg-primary/60 rounded-xl -z-10"
          />

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
            className="relative w-[80%] max-w-[1200px] h-72 sm:h-80 lg:h-[500px] rounded-3xl flex items-end justify-around z-10 overflow-hidden
                       bg-gradient-to-br from-[#3ED1C0] via-[#7CE0D5] to-[#00E0AA]
                       shadow-2xl shadow-black/25"
          >
            {/* Inner Stroke */}
            <div className="absolute inset-0 rounded-3xl border-8 sm:border-12 lg:border-16 border-[var(--primary)] pointer-events-none z-10"></div>

            {/* Bars with balloons */}
            {bars.map((bar, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-end h-full"
              >
                {/* Balloon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: bar.delay + 3,
                    duration: 0.4,
                    type: "spring",
                  }}
                  className="w-12 h-12 rounded-full mb-2"
                  style={{
                    background:
                      "linear-gradient(145deg, #26B1A3, #008F73, #00C1AA)",
                    boxShadow:
                      "inset 0 -2px 6px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Growing Bar */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.height}%` }}
                  transition={{
                    delay: bar.delay + 2.5,
                    duration: 0.8,
                    type: "spring",
                  }}
                  className="w-10 sm:w-12 lg:w-16 rounded-t-full"
                  style={{
                    background:
                      "linear-gradient(145deg, #26B1A3, #008F73, #00C1AA)",
                    boxShadow:
                      "inset 0 -4px 8px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Hero CTA Subsection */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row items-center justify-between backdrop-blur-md bg-white/20 rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.7,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
        >
          {/* Text Left */}
          <div className="flex-1 mb-4 md:mb-0 text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Build your professional portfolio in minutes
            </h2>
            <p className="text-foreground/80 text-base md:text-lg mt-2 max-w-lg">
              Join thousands of creators using Elevora to showcase their work
              and grow their brand.
            </p>
          </div>

          <div className="flex-1 flex justify-start md:justify-end">
            <Button
              icon={FaArrowRight}
              size="lg"
              onClick={() => console.log("Hero CTA Get Started clicked")}
              className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
