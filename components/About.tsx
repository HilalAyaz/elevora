"use client";

import Container from "./Container";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Elevora
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Elevora is designed to help creators, professionals, and
              entrepreneurs showcase their work with style. Our platform
              provides customizable portfolios that are fast, responsive,
              and tailored to your personal brand.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              With modern design tools and seamless integrations, Elevora
              empowers you to stand out online and grow your digital
              presence effortlessly.
            </p>
          </motion.div>

          {/* Right Side - Illustration/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center text-white font-semibold text-xl"
          >
            🚀 Elevate Yourself
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
