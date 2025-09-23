"use client";
import React from "react";

export default function ReviewSubmit() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">✅ Review & Submit</h2>
      <p className="text-gray-500 text-sm">
        Double-check your details before submitting.
      </p>
      <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition">
        Submit Portfolio
      </button>
    </div>
  );
}
