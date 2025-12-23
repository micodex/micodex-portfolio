import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Allow public admin endpoints
  if (
    path.startsWith("/admin/login") ||
    path.startsWith("/api/admin/login") ||
    path.startsWith("/api/admin/logout")
  ) {
    return NextResponse.next();
  }

  // Protect all admin routes
  const authCookie = request.cookies.get("admin_auth")?.value;

  if (authCookie !== "true") {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

// Only run middleware on specific paths
export const config = {
  // matches /admin but NOT /admin/login ( to solve redirect error)
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
