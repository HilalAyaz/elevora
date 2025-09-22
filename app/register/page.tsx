"use client";

import React, { useState } from "react";
import AuthHeader from "./components/AuthHeader";
import AuthToggle from "./components/AuthToggle";
import AuthSocialButtons from "./components/AuthSocialButtons";
import AuthForm from "./components/AuthForm";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-background text-foreground">
      <div className="max-w-screen-xl w-full m-4 bg-white shadow-xl rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <AuthHeader isLogin={isLogin} />
          <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
          <AuthSocialButtons isLogin={isLogin} />
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-400 text-sm font-medium">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <AuthForm isLogin={isLogin} />
        </div>

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
