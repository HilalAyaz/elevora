"use client";
import React from "react";

export default function Links() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🔗 Links</h2>
      <p className="text-gray-500 text-sm">
        Add your social or professional profiles.
      </p>
      <input
        type="text"
        placeholder="Website / GitHub / LinkedIn"
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </div>
  );
}
