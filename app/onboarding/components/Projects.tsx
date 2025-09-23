"use client";
import React from "react";

export default function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🚀 Projects</h2>
      <p className="text-gray-500 text-sm">
        Showcase your best work and highlight achievements.
      </p>
      <input
        type="text"
        placeholder="Project Title"
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
      />
      <textarea
        placeholder="Project Description"
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
        rows={4}
      />
    </div>
  );
}
