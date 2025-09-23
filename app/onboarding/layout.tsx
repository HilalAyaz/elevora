"use client";

import LogoutButton from "@/components/ui/LogoutButton";
import React from "react";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl text-primary font-bold">Onboarding</h1>
          <LogoutButton />
        </div>

        {children}
      </div>
    </div>
  );
}
