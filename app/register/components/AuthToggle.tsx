"use client";

import React from "react";
import clsx from "clsx";

interface AuthToggleProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthToggle({ isLogin, setIsLogin }: AuthToggleProps) {
  return (
    <div className="flex justify-center mb-6 gap-4">
      <button
        className={clsx(
          "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md",
          isLogin
            ? "bg-primary text-white hover:bg-secondary hover:shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm"
        )}
        onClick={() => setIsLogin(true)}
      >
        Login
      </button>
      <button
        className={clsx(
          "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md",
          !isLogin
            ? "bg-primary text-white hover:bg-secondary hover:shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm"
        )}
        onClick={() => setIsLogin(false)}
      >
        Register
      </button>
    </div>
  );
}
