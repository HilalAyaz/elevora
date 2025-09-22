import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/jwt";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) redirect("/register");

  let user;
  try {
    user = verifyToken(token);
  } catch {
    redirect("/register");
  }

  if (user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Admin-only functionality lives here.</p>
    </main>
  );
}
