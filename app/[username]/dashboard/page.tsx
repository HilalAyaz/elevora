import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { Role } from "@/lib/generated/prisma";

// ✅ Params is async now
type Params = Promise<{ username: string }>;

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export default async function DashboardPage({ params }: { params: Params }) {
  const { username } = await params;

  // ✅ 1) Check if user exists
  const user = await prisma.user.findUnique({
    where: { username },
    select: { role: true },
  });

  if (!user) return <div>404 - User not found</div>;

  // ✅ 2) Verify JWT
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const verifiedToken = token ? await verifyJWT(token) : null;

  if (!verifiedToken) {
    return <div>Unauthorized – please log in</div>;
  }

  const loggedInUser = verifiedToken.username as string;
  const role = verifiedToken.role as Role;

  // ✅ 3) Prevent USER role from accessing another user’s dashboard
  if (role === Role.USER && loggedInUser !== username) {
    return <div>Access denied – redirecting to your dashboard...</div>;
    // Or even better: redirect(`/​${loggedInUser}/dashboard`);
  }

  // ✅ Authorized
  return <div>{username}&apos;s Dashboard</div>;
}
