"use client";

import Container from "./Container";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Button from "@/components/ui/Button";

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "2-page portfolio (Showcase + Links page)",
      "2 free themes",
      "Basic customization (colors & fonts)",
      "Affiliate link integration",
      "No product page / e-commerce",
      "Community support",
    ],
    bg: "bg-white/90 backdrop-blur-xl",
    textColor: "text-foreground",
    checkColor: "text-green-600",
    border: "border-gray-200",
  },
  {
    title: "Pro",
    price: "$35/mo",
    features: [
      "2-page portfolio (Showcase + Links page)",
      "5 premium themes",
      "Advanced customization (branding, layouts)",
      "Affiliate link integration",
      "Analytics dashboard",
      "1 Product Page (for selling services/products)",
      "E-commerce integration",
      "10% commission on sales",
      "Email support",
    ],
    bg: "bg-gradient-to-tr from-primary/80 to-secondary/70",
    textColor: "text-white",
    checkColor: "text-white",
    border: "border-none",
    badge: "Most Popular",
  },
  {
    title: "Ultra",
    price: "$75/mo",
    features: [
      "2-page portfolio (Showcase + Links page)",
      "Unlimited themes",
      "Full customization",
      "Affiliate link integration",
      "Analytics dashboard",
      "Unlimited Product Pages",
      "E-commerce integration",
      "5% commission on sales",
      "AI-powered tools (logos, content, resume, etc.)",
      "Priority support",
    ],
    bg: "bg-gradient-to-tr from-secondary to-primary/80",
    textColor: "text-white",
    checkColor: "text-white",
    border: "border-none",
    glow: "shadow-2xl scale-105 border-white/20",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background text-foreground">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary/70 font-medium uppercase tracking-wide mb-2">
            Pricing Plans
          </p>
          <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold">
            Choose Your Plan
          </h2>
          <p className="text-foreground/80 mt-4 max-w-2xl mx-auto">
            Whether you’re just starting out or scaling your brand, pick a plan that fits your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative flex flex-col rounded-3xl p-8 border ${plan.bg} ${plan.textColor} ${plan.border} ${plan.glow}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-4xl font-bold">{plan.price}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheck className={`${plan.checkColor} mt-1`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.title === "Pro" || plan.title === "Ultra" ? "secondary" : "primary"}
                className="mt-6 w-full"
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
