"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the shape of the form data collected during onboarding
export type OnboardingFormData = {
  name?: string;
  tagline?: string;
  profileImage?: string;
  skills?: string[];
  links?: { label: string; url: string }[];
  about?: string;
  projects?: { title: string; description: string; link?: string }[];
  gallery?: string[];
};

// Define what the context provides
type OnboardingContextType = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  formData: OnboardingFormData;
  setFormData: Dispatch<SetStateAction<OnboardingFormData>>;
};

// Create context with strict type
const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>({});

  return (
    <OnboardingContext.Provider
      value={{ currentStep, setCurrentStep, formData, setFormData }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return context;
}
