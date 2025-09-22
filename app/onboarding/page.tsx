'use client';

import React, { useState, useEffect } from "react";

const CircularLoader: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 6) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
    >
      <svg
        width={64}
        height={64}
        viewBox="0 0 64 64"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="#4F46E5"
          strokeWidth="6"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M32 4
                        a28 28 0 0 1 0 56"
          stroke="#4F46E5"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const OnboardingPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#F3F4F6",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        Welcome to Elevora
      </h1>
      <p style={{ color: "#6B7280", marginBottom: "2rem" }}>
        Get started with your onboarding journey!
      </p>
      <CircularLoader />
      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          background: "#4F46E5",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(79,70,229,0.15)",
        }}
        onClick={() => {
          // handle get started click
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default OnboardingPage;
