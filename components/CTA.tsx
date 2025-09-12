"use client";

import Container from "@/components/Container";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 text-foreground">
      <Container>
        <div className="w-full mx-auto text-center space-y-6 bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl p-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary">
            Boost your productivity.
          </h2>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary">
            Start using our app today.
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Create your professional portfolio in minutes, showcase your work
            with style, and unlock tools designed to grow your personal brand or
            business. No hassle, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              icon={FaArrowRight}
              onClick={() => console.log("Get Started clicked")}
              className="bg-primary hover:bg-secondary text-white"
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              icon={FaUser}
              onClick={() => console.log("Already a user clicked")}
              className="bg-secondary hover:bg-primary text-white"
            >
              Already a User?
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
