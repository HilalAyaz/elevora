import { prisma } from "@/lib/db";

interface Props {
  params: { username: string };
}

export default async function PortfolioPage(props: Props) {
  // Await params if needed
  const { username } = await props.params;

  const user = await prisma.user.findUnique({
    where: { username },
    select: { hasPortfolio: true },
  });

  if (!user) return <div>404 - User not found</div>;
  if (!user.hasPortfolio) return <div>Redirecting to onboarding...</div>;

  return <div>Portfolio of {username}</div>;
}
