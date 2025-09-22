"use client";

import LogoutButton from "@/components/ui/LogoutButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl font-bold">Elevora</h1>
      <LogoutButton />
    </nav>
  );
}
