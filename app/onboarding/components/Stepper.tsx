"use client";

import React from "react";

export default function Stepper({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 m-10">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`h-3 w-3 rounded-full transition ${
            i === currentStep ? "bg-primary" : "bg-secondary/40"
          }`}
        />
      ))}
    </div>
  );
}
