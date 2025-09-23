"use client";

import React from "react";
import { useOnboarding } from "./OnboardingContext";
import steps from "../utils/OnboardingData";

export default function Navigation() {
  const { currentStep, setCurrentStep } = useOnboarding();

  return (
    <div className="flex justify-between mt-6">
      <button
        disabled={currentStep === 0}
        onClick={() => setCurrentStep(currentStep - 1)}
        className="px-4 py-2 rounded-xl bg-secondary text-white disabled:opacity-50"
      >
        Back
      </button>
      <button
        onClick={() =>
          setCurrentStep(
            currentStep < steps.length - 1 ? currentStep + 1 : currentStep
          )
        }
        className="px-6 py-2 rounded-xl bg-primary text-white hover:bg-secondary"
      >
        {currentStep === steps.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}
