"use client";

import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

interface AuthHeaderProps {
  isLogin: boolean;
}

export default function AuthHeader({ isLogin }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className={`${italiana.className} text-5xl font-extrabold text-primary`}>
        ELEVORA
      </h1>
      <p className="text-gray-500 mt-2 text-lg">
        {isLogin ? "Login to your account" : "Create your account"}
      </p>
    </div>
  );
}
