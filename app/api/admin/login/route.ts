import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  // hashed password stored in .env.local
  const hashedPassword = process.env.ADMIN_PASSWORD;

  if (!hashedPassword) {
    console.error("ADMIN_PASSWORD not set in environment");
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }
  // compare input password to hashed password
  const isValid = await bcrypt.compare(password, hashedPassword);

  if (isValid) {
    // set a secure, HTTP-only cookie
    (await cookies()).set({
      name: "admin_auth",
      value: "true",
      httpOnly: true, // Cookie cannot be accessed via JavaScript
      secure: process.env.NODE_ENV === "production", //Cookie is only sent over HTTPS in production
      maxAge: 60 * 60 * 24, //  Cookie expires in 24 hours (in seconds)
      path: "/", // Cookie is valid for all paths on the site
    });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
