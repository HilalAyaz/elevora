"use client";

import { useState } from "react";
import Link from "next/link";
import { Kolker_Brush, Poppins } from "next/font/google";
import Container from "./Container";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button from "./ui/Button";

const kolkerBrush = Kolker_Brush({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Showcase", href: "#showcase" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "/blog" }, 
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.nav
      className="w-full sticky top-0 z-50 bg-white/20 backdrop-blur-md"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <p className="text-center text-xl text-bold uppercase">
        site in progress
      </p>

      <Container>
        <div className="flex items-center justify-between py-4 relative">
          <div className="md:hidden">
            <Link
              href="/"
              className={`${kolkerBrush.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#008F73] font-bold`}
            >
              EV
            </Link>
          </div>

          <div className="md:hidden">
            <Hamburger
              toggled={mobileOpen}
              toggle={setMobileOpen}
              size={24}
              color="#008F73"
            />
          </div>

          <div className="hidden md:block">
            <Link
              href="/"
              className={`${kolkerBrush.className} text-3xl md:text-5xl text-[#008F73] font-bold`}
            >
              EV
            </Link>
          </div>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm transition-all duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${poppins.className} relative uppercase text-primary hover:text-[#26B1A3] transition-colors duration-300
        after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#26B1A3]
        hover:after:w-full hover:after:left-0 after:transition-all after:duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/register">
              <Button icon={FaArrowRight} size="md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobileMenu"
              className="md:hidden mt-4 bg-white/20 rounded-xl p-6 flex flex-col items-center gap-4 shadow-lg"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${poppins.className} text-primary font-medium hover:text-[#26B1A3] transition-colors duration-300 uppercase w-full text-center`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Button
                icon={FaArrowRight}
                size="md"
                onClick={() => console.log("Get Started clicked on nav")}
              >
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
}
