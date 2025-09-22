import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { username },
    select: { hasPortfolio: true },
  });

  if (!user) {
    return NextResponse.json({ exists: false }, { status: 404 });
  }

  return NextResponse.json({ exists: true, hasPortfolio: user.hasPortfolio });
}
