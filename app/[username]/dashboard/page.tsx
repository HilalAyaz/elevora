import { prisma } from "@/lib/db";

interface Props {
  params: { username: string };
}

export default async function DashboardPage({ params }: Props) {
  const { username } = params;

  const user = await prisma.user.findUnique({
    where: { username },
    select: { role: true },
  });

  if (!user) return <div>404 - User not found</div>;

  // TODO: Verify JWT and username matches logged-in user
  // Otherwise, redirect to their own dashboard

  return <div>{username}&apos;s Dashboard</div>;
}
