import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/jwt";

export default async function OwnerDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) redirect("/register");

  let user;
  try {
    user = verifyToken(token);
  } catch {
    redirect("/register");
  }

  if (user.role !== "OWNER") {
    redirect("/");
  }
  

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Owner Dashboard</h1>
        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          New Item
        </button>
      </header>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-2 text-lg font-semibold">Users</h2>
          <p className="text-2xl font-bold">1,245</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-2 text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">$12,340</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-2 text-lg font-semibold">Active Sessions</h2>
          <p className="text-2xl font-bold">87</p>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Recent Activity
        </h2>
        <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow">
          <li className="p-4">User John Doe signed up</li>
          <li className="p-4">Payment received from Jane Smith</li>
          <li className="p-4">Session started by Alex Brown</li>
        </ul>
      </section>
    </main>
  );
}
