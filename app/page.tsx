'use client';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Trustedby from "@/components/Trustedby";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Whychosen from "@/components/Whychosen";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/ui/LogoutButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }, []);

  return (
    <>
      <Navbar />
            {hasToken && <LogoutButton />}

      <Hero />
      <Trustedby />
      <About />
      <Features />
      <Showcase />
      <Whychosen />
      <Testimonials />
      <Pricing />
      <FAQ/>
      <CTA />
      <Footer />
    </>
  );
}
