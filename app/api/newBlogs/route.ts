import { NextResponse } from "next/server";
import Blog from "@/models/blog";
import connectDB from "@/lib/mongodb";

export async function GET() {
  await connectDB();

  try {
    // get the first 4 blogs and sort them by created date.
    const newBlogs = await Blog.find().sort({ createdAt: -1 }).limit(4);
    return NextResponse.json({ success: true, data: newBlogs });
  } catch (err) {
    console.error("server Error!");
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
