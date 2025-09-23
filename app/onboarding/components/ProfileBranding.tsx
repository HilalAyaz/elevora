"use client";
import React from "react";

export default function ProfileBranding() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">✨ Profile Branding</h2>
      <p className="text-gray-500 text-sm">
        Tell us who you are and make your profile stand out.
      </p>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <input
          type="text"
          placeholder="Tagline (e.g. MERN Stack Developer)"
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <input
          type="file"
          className="w-full p-3 border rounded-lg bg-gray-50 cursor-pointer"
        />
      </div>
    </div>
  );
}
