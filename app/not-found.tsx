// app/not-found.tsx
"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 px-4">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={goHome}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
}
