import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static files, API routes, favicon
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  const pathParts = pathname.split("/").filter(Boolean);

  if (pathParts.length === 0) return NextResponse.next();

  const username = pathParts[0];

  // 1️⃣ Verify username exists & portfolio exists via API route
  const res = await fetch(`${req.nextUrl.origin}/api/auth/check-user?username=${username}`);
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

  // 2️⃣ Protect restricted pages: dashboard & settings
  const restrictedPages = ["dashboard", "settings"];
  if (pathParts.length >= 2) {
    const subpage = pathParts[1];
    if (restrictedPages.includes(subpage)) {
      const token = req.cookies.get("token")?.value;
      if (!token) {
        // Not logged in → redirect to register
        return NextResponse.redirect(new URL("/register", req.url));
      }

      // Optional: JWT verification can be added here
      // Example:
      // const payload = verifyJWT(token);
      // if (payload.username !== username) redirect to own dashboard
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
