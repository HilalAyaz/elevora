"use client";

import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import clsx from "clsx";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });

export default function Authpage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-background text-foreground">
      <div className="max-w-screen-xl w-full m-4 bg-white shadow-xl rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Form */}
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className={`${italiana.className} text-5xl font-extrabold text-primary`}>
              ELEVORA
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              {isLogin ? "Login to your account" : "Create your account"}
            </p>
          </div>

          {/* Toggle Buttons */}
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

          {/* Social Buttons */}
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

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-400 text-sm font-medium">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Email Form */}
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            )}
            <button
              type="submit"
              className="mt-3 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-md hover:shadow-lg transition-all"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="text-primary hover:underline cursor-pointer font-medium"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div
          className="lg:w-1/2 hidden lg:flex items-center justify-center bg-primary/10"
          style={{
            backgroundImage:
              "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
