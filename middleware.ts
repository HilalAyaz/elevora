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

  // Skip Next.js internals + API routes + favicon
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  const verifiedToken = token ? await verifyJWT(token) : null;

  const pathParts = pathname.split("/").filter(Boolean);

  // --- 1️⃣ Public routes ---
  const publicRoutes = ["/", "/register", "/projects", "/shop"];
  if (publicRoutes.includes(pathname)) {
    // Redirect logged-in users away from register
    if (verifiedToken && pathname === "/register") {
      const username = verifiedToken.username as string;
      return NextResponse.redirect(new URL(`/${username}/dashboard`, req.url));
    }
    return NextResponse.next();
  }

  // --- 2️⃣ Username routes (portfolio pages) ---
  // Only single-part paths like /hilal
  if (pathParts.length === 1) {
    const username = pathParts[0];

    // Skip username check if path is actually a public route (redundant)
    if (!publicRoutes.includes(pathname)) {
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

  // --- 3️⃣ Protected subpages: dashboard & settings ---
  const restrictedPages = ["dashboard", "settings"];
  if (pathParts.length >= 2) {
    const requestedUser = pathParts[0];
    const subpage = pathParts[1];

    if (restrictedPages.includes(subpage)) {
      // Not logged in → redirect to register
      if (!verifiedToken)
        return NextResponse.redirect(new URL("/register", req.url));

      const loggedInUser = verifiedToken.username as string;
      const role = verifiedToken.role as Role;

      // Users can only access their own restricted pages
      if (role === Role.USER && requestedUser !== loggedInUser) {
        return NextResponse.redirect(
          new URL(`/${loggedInUser}/dashboard`, req.url)
        );
      }

      // ADMIN / OWNER can access any restricted page
      return NextResponse.next();
    }
  }

  // --- 4️⃣ All other routes ---
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
