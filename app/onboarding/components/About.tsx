"use client";
import React from "react";

export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">📖 About You</h2>
      <p className="text-gray-500 text-sm">
        Write a short bio to introduce yourself.
      </p>
      <textarea
        placeholder="Tell the world about yourself..."
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
        rows={6}
      />
    </div>
  );
}
