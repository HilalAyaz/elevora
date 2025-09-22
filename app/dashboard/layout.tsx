// app/dashboard/owner/layout.tsx
'use client';
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import LogoutButton from "@/components/ui/LogoutButton";

interface OwnerLayoutProps {
  children: ReactNode;
}



export default function OwnerLayout({ children }: OwnerLayoutProps) {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 text-2xl font-bold border-b">Elevora Owner</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard/owner"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Dashboard Home
          </Link>
          <Link
            href="/dashboard/owner/users"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Manage Users
          </Link>
          <Link
            href="/dashboard/owner/settings"
            className="block p-2 rounded hover:bg-gray-200"
          >
            Settings
          </Link>
                {hasToken && <LogoutButton />}

        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="w-full bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Owner Dashboard</h2>
          <div>
            <LogoutButton />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
