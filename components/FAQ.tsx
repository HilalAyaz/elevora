"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Is there a free plan?",
    answer:
      "Yes! You can start with our free tier which gives you a 2-page portfolio and essential customization features.",
  },
  {
    question: "Can I sell products through my portfolio?",
    answer:
      "Absolutely. Our e-commerce integration lets you create a custom product page and start selling right away.",
  },
  {
    question: "Do I need coding skills?",
    answer:
      "Not at all. Everything is drag-and-drop and easily customizable without touching a single line of code.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Yes, you’re free to switch between plans whenever you want. No hidden fees, no lock-ins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Close accordion when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <section className="relative py-20 text-foreground rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/40 to-primary/20 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),transparent_70%)] -z-10"></div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Got questions? We&apos;ve got answers. Everything you need to know before getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" ref={faqRef}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md bg-background/70 backdrop-blur-lg border border-primary/30"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-foreground/80">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-secondary"
                      : "rotate-0 text-foreground/60"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 text-foreground/80">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
