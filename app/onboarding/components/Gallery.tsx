"use client";
import React from "react";

export default function Gallery() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">🖼 Gallery</h2>
      <p className="text-gray-500 text-sm">
        Upload images, certificates, or portfolio snapshots.
      </p>
      <input
        type="file"
        multiple
        className="w-full p-3 border rounded-lg bg-gray-50 cursor-pointer"
      />
    </div>
  );
}
