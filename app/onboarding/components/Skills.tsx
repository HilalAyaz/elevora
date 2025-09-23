"use client";
import React from "react";

export default function Skills() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🛠 Your Skills</h2>
      <p className="text-gray-500 text-sm">
        List your skills. You can add multiple ones later.
      </p>
      <input
        type="text"
        placeholder="Add a skill (e.g. React, Node.js, MongoDB)"
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </div>
  );
}
