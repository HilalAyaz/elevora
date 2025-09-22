import { prisma } from "@/lib/db";

// Define the type of params as a Promise
type Params = Promise<{ username: string }>;

export default async function PortfolioPage({
  params,
}: {
  params: Params;
}) {
  // ✅ Await the promise
  const { username } = await params;

  const user = await prisma.user.findUnique({
    where: { username },
    select: { hasPortfolio: true },
  });

  if (!user) return <div>404 - User not found</div>;
  if (!user.hasPortfolio) return <div>Redirecting to onboarding...</div>;

  return <div>Portfolio of {username}</div>;
}
