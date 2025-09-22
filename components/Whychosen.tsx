"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "./Container";
import Image from "next/image";

const reasons = [
  {
    title: "Unmatched Simplicity",
    description:
      "We make portfolio building effortless with our two-page system. No complicated tools, no cluttered interfaces—just a clean, intuitive experience that allows anyone to create a stunning portfolio in minutes, regardless of technical skills.",
    image: "https://picsum.photos/800/800?random=1",
  },
  {
    title: "Beautiful by Default",
    description:
      "Every design comes polished, modern, and professional out of the box. Your portfolio will look sleek and visually appealing without the need for endless customization, ensuring a strong first impression on potential clients and employers.",
    image: "https://picsum.photos/800/800?random=2",
  },
  {
    title: "Customization Power",
    description:
      "Take full control over branding with customizable colors, fonts, layouts, and sections. Tailor your portfolio to reflect your unique style and professional identity while maintaining a seamless, professional aesthetic.",
    image: "https://picsum.photos/800/800?random=3",
  },
  {
    title: "Built-in Monetization",
    description:
      "Sell your products or services directly from your portfolio with integrated e-commerce features. Track sales, manage inventory, and monetize your work effortlessly without relying on third-party platforms.",
    image: "https://picsum.photos/800/800?random=4",
  },
  {
    title: "AI-Powered Features",
    description:
      "Enhance your workflow with integrated AI tools, from automated content suggestions to smart image optimization. Let AI assist in creating compelling portfolios faster, smarter, and more efficiently than ever before.",
    image: "https://picsum.photos/800/800?random=5",
  },
  {
    title: "Scalable Growth",
    description:
      "From free users to ultra-premium plans, our platform grows with you. Easily upgrade as your needs expand, adding new features, pages, or integrations to match your evolving professional goals and audience reach.",
    image: "https://picsum.photos/800/800?random=6",
  },
];

export default function WhyChosen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasons.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 text-foreground">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-8"
        >
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Why We Are Chosen
          </h2>
          <p className="text-foreground/80 text-sm sm:text-base">
            Discover the features that make us stand out
          </p>
        </motion.div>

        {/* Carousel Card */}
        <div className="relative w-full overflow-hidden mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="w-full flex justify-center px-4 sm:px-0"
            >
              <div
                className="flex flex-col md:flex-row w-full max-w-6xl h-[32rem] sm:h-[36rem] md:h-[40rem] rounded-3xl overflow-hidden relative 
                              bg-gradient-to-tr from-primary/20 to-secondary/10 shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              >
                <div className="absolute inset-0 m-4 md:m-6 flex flex-col md:flex-row bg-primary/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-inner">
                  <motion.div
                    className="relative w-full md:w-1/2 h-64 sm:h-full md:h-full "
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Image
                      src={reasons[index].image}
                      alt={reasons[index].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  <motion.div
                    className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4">
                      {reasons[index].title}
                    </h3>
                    <p className="text-foreground/80 text-base sm:text-lg md:text-lg leading-relaxed">
                      {reasons[index].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
