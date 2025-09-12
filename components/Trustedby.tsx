"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import { Lexend_Deca, Lexend_Giga } from "next/font/google";

const giga = Lexend_Giga({ subsets: ["latin"], weight: "400" });
const deca = Lexend_Deca({ subsets: ["latin"], weight: "400" });

const people = [
  {
    src: "https://i.pravatar.cc/150?img=1",
    name: "Sara",
    role: "Content Creator",
  },
  {
    src: "https://i.pravatar.cc/150?img=2",
    name: "Ekaterina",
    role: "Actress",
  },
  { src: "https://i.pravatar.cc/150?img=3", name: "Liam", role: "Designer" },
  {
    src: "https://i.pravatar.cc/150?img=4",
    name: "Aiden",
    role: "Photographer",
  },
  { src: "https://i.pravatar.cc/150?img=5", name: "Noah", role: "Marketer" },
  { src: "https://i.pravatar.cc/150?img=6", name: "Emma", role: "Developer" },
  { src: "https://i.pravatar.cc/150?img=7", name: "Olivia", role: "Writer" },
  { src: "https://i.pravatar.cc/150?img=8", name: "Sophia", role: "Producer" },
];

export default function TrustedBy() {
  return (
    <Container>
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut"}}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <p
            className={`${giga.className} text-primary uppercase tracking-widest text-lg font-semibold mb-12`}
          >
            Trusted By Creators Worldwide
          </p>

          {/* Infinite marquee container */}
          <div className="relative overflow-hidden">
            {/* Transparent fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 [mask-image:linear-gradient(to_right,transparent,black)] z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 [mask-image:linear-gradient(to_left,transparent,black)] z-10" />

            <div className="flex">
              {/* Track 1 */}
              <motion.div
                className="flex gap-10"
                animate={{ x: "-100%" }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {people.map(({ src, name, role }, i) => (
                  <div
                    key={`track1-${i}`}
                    className="flex flex-col items-center min-w-[120px]"
                  >
                    <Image
                      src={src}
                      alt={name}
                      width={80}
                      height={80}
                      className="rounded-full border border-border shadow-sm"
                    />
                    <h4
                      className={`${giga.className} mt-3 text-primary font-semibold`}
                    >
                      {name}
                    </h4>
                    <p className={`${deca.className} text-sm text-secondary`}>
                      {role}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Track 2 */}
              <motion.div
                className="flex gap-10"
                animate={{ x: "-100%" }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {people.map(({ src, name, role }, i) => (
                  <div
                    key={`track2-${i}`}
                    className="flex flex-col items-center min-w-[120px]"
                  >
                    <Image
                      src={src}
                      alt={name}
                      width={80}
                      height={80}
                      className="rounded-full border border-border shadow-sm"
                    />
                    <h4
                      className={`${giga.className} mt-3 text-primary font-semibold`}
                    >
                      {name}
                    </h4>
                    <p className={`${deca.className} text-sm text-secondary`}>
                      {role}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}
