import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only protect /admin and /api/admin routes
  if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
    const authCookie = request.cookies.get("admin_auth")?.value;

    if (authCookie !== "true") {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

// Only run middleware on specific paths
export const config = {
  // matches /admin but NOT /admin/login ( to solve redirect error)
  matcher: ["/admin((?!/login).*)", "/api/admin/:path*"],
};
