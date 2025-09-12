"use client";

import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sara Khan",
    role: "Freelance Designer",
    photo: "https://i.pravatar.cc/150?img=32",
    quote: "Using DevDesigner’s platform completely transformed my portfolio. It’s sleek, customizable, and easy to manage!",
  },
  {
    name: "Ali Raza",
    role: "Startup Founder",
    photo: "https://i.pravatar.cc/150?img=15",
    quote: "The Ultra plan is worth every penny. The e-commerce integration and analytics gave us the edge we needed.",
  },
  {
    name: "Fatima Noor",
    role: "Software Engineer",
    photo: "https://i.pravatar.cc/150?img=8",
    quote: "I started with the Free plan and upgraded to Pro within days. The themes and customization options are amazing.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const duration = 6000;

  // Auto-change testimonial using setTimeout inside useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [index]);

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section id="testimonials" className="py-24 bg-background text-foreground">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          What Our Users Say
        </h2>

        <div className="w-full mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center text-center p-8 bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg w-full"
            >
              <Image
                src={testimonials[index].photo}
                alt={testimonials[index].name}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <p className="text-foreground/80 mb-4 text-lg">
                &quot;{testimonials[index].quote}&quot;
              </p>
              <h3 className="font-semibold text-xl text-primary/80">{testimonials[index].name}</h3>
              <p className="text-sm text-foreground/80">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
