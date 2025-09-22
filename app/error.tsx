// app/error.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 px-4">
      <h1 className="text-7xl font-extrabold mb-4">Oops!</h1>
      <p className="text-2xl mb-6 text-center">
        Something went wrong. Please try again later.
      </p>
      <button
        onClick={goHome}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go to Home
      </button>
      <button
        onClick={() => reset()}
        className="mt-4 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
      >
        Try Again
      </button>
    </div>
  );
}
