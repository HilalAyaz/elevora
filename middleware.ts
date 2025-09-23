import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify, JWTPayload } from "jose";
import { Role } from "@/lib/generated/prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

async function verifyJWT(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const pathParts = pathname.split("/").filter(Boolean);

  // --- 0️⃣ Skip Next.js internals & static ---
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // --- 1️⃣ Public routes ---
  const publicRoutes = ["/", "/register", "/projects", "/shop", "/onboarding"];
  if (publicRoutes.includes(pathname)) {
    const token = req.cookies.get("token")?.value;
    const verifiedToken = token ? await verifyJWT(token) : null;

    // Logged-in users visiting /register → redirect to their dashboard
    if (verifiedToken && pathname === "/register") {
      const username = verifiedToken.username as string;
      return NextResponse.redirect(new URL(`/${username}/dashboard`, req.url));
    }

    return NextResponse.next(); // 🚨 exit early, don’t process as username
  }

  // --- 2️⃣ Username portfolio routes ---
  if (pathParts.length === 1) {
    const username = pathParts[0];

    // Reserved keywords: don't check them as usernames
    const reserved = [
      "register",
      "projects",
      "shop",
      "dashboard",
      "settings",
      "blog",
    ];
    if (!reserved.includes(username)) {
      const res = await fetch(
        `${req.nextUrl.origin}/api/auth/check-user?username=${username}`
      );

      if (!res.ok) {
        const url = req.nextUrl.clone();
        url.pathname = "/404";
        return NextResponse.rewrite(url);
      }

      const data = await res.json();
      if (!data.hasPortfolio) {
        const url = req.nextUrl.clone();
        url.pathname = "/onboarding";
        return NextResponse.rewrite(url);
      }
    }

    return NextResponse.next();
  }

  // --- 3️⃣ Restricted subpages (dashboard/settings) ---
  if (pathParts.length >= 2) {
    const requestedUser = pathParts[0];
    const subpage = pathParts[1];
    const restrictedPages = ["dashboard", "settings"];

    if (restrictedPages.includes(subpage)) {
      const token = req.cookies.get("token")?.value;
      const verifiedToken = token ? await verifyJWT(token) : null;

      if (!verifiedToken) {
        return NextResponse.redirect(new URL("/register", req.url));
      }

      const loggedInUser = verifiedToken.username as string;
      const role = verifiedToken.role as Role;

      // Regular users can only access their own dashboard/settings
      if (role === Role.USER && requestedUser !== loggedInUser) {
        return NextResponse.redirect(
          new URL(`/${loggedInUser}/dashboard`, req.url)
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
