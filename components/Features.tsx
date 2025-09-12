"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lexend_Giga, Lexend_Deca } from "next/font/google";
import Container from "./Container";

const lexendGiga = Lexend_Giga({ subsets: ["latin"], weight: ["400", "600", "700"] });
const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["300", "400", "500"] });

const features = [
  {
    title: "Customizable Portfolios",
    desc: "Create a personal portfolio with fully customizable themes, layouts, and branding.",
    img: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "Multiple Pages & Links",
    desc: "Add pages for projects, products, or resources and organize them seamlessly.",
    img: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "E-Commerce Ready",
    desc: "Sell your products directly through your portfolio with simple transaction management.",
    img: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Analytics Dashboard",
    desc: "Track visitor activity and engagement to optimize your portfolio performance.",
    img: "https://picsum.photos/600/400?random=4",
  },
  {
    title: "SEO-Friendly Pages",
    desc: "Ensure your portfolio ranks better on search engines with built-in SEO optimization.",
    img: "https://picsum.photos/600/400?random=5",
  },
  {
    title: "AI Tool Integrations",
    desc: "Integrate with AI-based services for logos, content creation, or resume building effortlessly.",
    img: "https://picsum.photos/600/400?random=6",
  },
];

export default function Features() {
  return (
    <Container>
      <motion.section
        className="py-20 bg-background text-foreground"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", }}
        id="features"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className={`${lexendDeca.className} text-lg font-semibold text-primary mb-2`}>
            We Have Cracked the Code
          </h3>
          <h2 className={`${lexendGiga.className} text-2xl md:text-3xl font-bold mb-12 text-secondary/80`}>
            Features That Make Your Portfolio Stand Out
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="relative group p-6 rounded-xl bg-primary/10 border border-primary/20 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Background image (hidden until hover) */}
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* Content on top */}
                <div className="relative z-10 group-hover:opacity-50 transition smooth">
                  <h4 className={`${lexendGiga.className} text-lg font-semibold text-primary mb-2`}>
                    {f.title}
                  </h4>
                  <p className={`${lexendDeca.className} text-sm text-foreground/80`}>
                    {f.desc}
                  </p>
                </div>

                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Container>
  );
}
