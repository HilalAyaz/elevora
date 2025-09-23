"use client";

import React from "react";

import steps from "./utils/OnboardingData";
import Navigation from "./components/Navigation";
import Stepper from "./components/Stepper";
import {
  OnboardingProvider,
  useOnboarding,
} from "./components/OnboardingContext";

function OnboardingSteps() {
  const { currentStep } = useOnboarding();
  const StepComponent = steps[currentStep].component;

  return (
    <div>
      <StepComponent />
      <Stepper currentStep={currentStep} totalSteps={steps.length} />

      <Navigation />
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <OnboardingProvider>
      <OnboardingSteps />
    </OnboardingProvider>
  );
}
