"use client";

import Link from "next/link";
import { Italiana } from "next/font/google";

import { FaFacebookF, FaDiscord, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import Container from "@/components/Container";
import {motion} from "framer-motion"

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const links = {
    company: ["About", "Careers", "Brand Center", "Blog"],
    help: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    legal: ["Privacy Policy", "Licensing", "Terms & Conditions"],
    download: ["iOS", "Android", "Windows", "MacOS"],
  };

  return (
    <footer className="bg-background text-foreground">
      {/* Top Links - inside container */}
      <Container>
           <motion.div className="flex flex-col items-start">
    <motion.h1
      className={`${italiana.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-primary tracking-widest`}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      ELEVORA
    </motion.h1>

    <motion.div
      className="h-1 bg-primary w-full origin-left mt-2"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      viewport={{ once: true }}
    />
  </motion.div>
        <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
          {/* Company */}
          <div>
         
            <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
              Company
            </h2>
            <ul className="text-foreground/70 font-medium">
              {links.company.map((item) => (
                <li key={item} className="mb-4">
                  <Link href="#" className="hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
              Help Center
            </h2>
            <ul className="text-foreground/70 font-medium">
              {links.help.map((item) => (
                <li key={item} className="mb-4">
                  <Link href="#" className="hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
              Legal
            </h2>
            <ul className="text-foreground/70 font-medium">
              {links.legal.map((item) => (
                <li key={item} className="mb-4">
                  <Link href="#" className="hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-primary uppercase">
              Download
            </h2>
            <ul className="text-foreground/70 font-medium">
              {links.download.map((item) => (
                <li key={item} className="mb-4">
                  <Link href="#" className="hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar - full width background, content in container */}
      <div className="bg-primary/10 dark:bg-primary/20 py-6">
  <Container>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Desktop Left: Rights Reserved */}
      <span className="text-sm text-foreground/70 text-center md:text-left order-3 md:order-1">
        © 2025{" "}
        <Link href="#" className="text-primary hover:text-secondary transition-colors">
          DevDesigner™
        </Link>
        . All Rights Reserved.
      </span>

      {/* Center: ELEVORA */}
      <motion.h1
        className={`${italiana.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-primary tracking-widest order-1 md:order-2 text-center`}
      >
        ELEVORA
      </motion.h1>

      {/* Right: Social Links */}
      <div className="flex space-x-5 rtl:space-x-reverse justify-center md:justify-end order-2 md:order-3">
        <Link href="#" className="text-foreground/50 hover:text-primary transition-colors">
          <FaFacebookF className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-foreground/50 hover:text-primary transition-colors">
          <FaDiscord className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-foreground/50 hover:text-primary transition-colors">
          <FaTwitter className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-foreground/50 hover:text-primary transition-colors">
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-foreground/50 hover:text-primary transition-colors">
          <FaDribbble className="w-6 h-6" />
        </Link>
      </div>
    </div>
  </Container>
</div>
    </footer>
  );
}
