// app/api/blog/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function GET(request: Request) {
  await connectDB();

  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");
    console.log("Query Parameters:", { tag, search });
    // Build MongoDB query
    const query: Record<string, unknown> = {};

    // Filter by tag (if provided and not 'all')
    if (tag && tag !== "all") {
      query.tags = { $in: [tag] }; // Use $in to match tags array // Matches documents where tags array contains the specified tag
    }

    // Filter by search term (if provided)
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } }, // Case-insensitive search on title
        { content: { $regex: search, $options: "i" } }, // Case-insensitive search on content
      ];
    }
    // Log the query for debugging
    console.log("MongoDB Query:", query);

    // Fetch filtered blog posts, sorted by createdAt (newest first)
    const blogPosts = await Blog.find(query);

    return NextResponse.json({ success: true, data: blogPosts });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "server error" },
      { status: 500 }
    );
  }
}
