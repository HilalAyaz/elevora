"use client";

import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Image from "next/image";

const projects = [
  { id: 1, title: "Portfolio One", image: "https://picsum.photos/800/500?random=1" },
  { id: 2, title: "Portfolio Two", image: "https://picsum.photos/800/500?random=2" },
  { id: 3, title: "Portfolio Three", image: "https://picsum.photos/800/500?random=3" },
  { id: 4, title: "Portfolio Four", image: "https://picsum.photos/800/500?random=4" },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 5000; // autoplay 5s

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    setProgress(0);

    intervalRef.current = setInterval(() => {
      next();
    }, duration);

    const start = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      animationFrame = requestAnimationFrame(updateProgress);
    };
    updateProgress();

    return () => {
      clearInterval(intervalRef.current!);
      cancelAnimationFrame(animationFrame);
    };
  }, [index]);

  return (
    <section id="showcase" className="py-20">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Portfolios Showcase
        </h2>
        <div
          className="relative mt-12 w-full mx-auto"
          onMouseEnter={() => clearInterval(intervalRef.current!)}
          onMouseLeave={() =>
            (intervalRef.current = setInterval(() => next(), duration))
          }
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
            <Button
              onClick={prev}
              variant="secondary"
              size="sm"
              className="rounded-full !p-3"
            >
              <FaArrowLeft />
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
            <Button
              onClick={next}
              variant="primary"
              size="sm"
              className="rounded-full !p-3"
            >
              <FaArrowRight />
            </Button>
          </div>

          <div className="overflow-hidden relative rounded-2xl shadow-xl h-64 sm:h-80 lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[index].id}
                initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full relative flex items-center justify-center"
              >
                <Image
                  src={projects[index].image}
                  alt={projects[index].title}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-2xl backdrop-blur-sm bg-black/20 rounded-2xl">
                  {projects[index].title}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 rounded-full">
              <motion.div
                className="h-1 bg-secondary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
