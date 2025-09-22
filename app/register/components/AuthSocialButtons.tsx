"use client";

import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

interface AuthSocialButtonsProps {
  isLogin: boolean;
}

export default function AuthSocialButtons({ isLogin }: AuthSocialButtonsProps) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <button className="flex items-center justify-center gap-3 py-3 rounded-2xl bg-gradient-to-r from-red-400 to-red-300 text-white font-semibold shadow-md hover:shadow-lg transition-all">
        <FaGoogle className="w-5 h-5" />
        Sign {isLogin ? "in" : "up"} with Google
      </button>
      <button className="flex items-center justify-center gap-3 py-3 rounded-2xl bg-gradient-to-r from-gray-500 to-gray-400 text-white font-semibold shadow-md hover:shadow-lg transition-all">
        <FaGithub className="w-5 h-5" />
        Sign {isLogin ? "in" : "up"} with GitHub
      </button>
    </div>
  );
}
