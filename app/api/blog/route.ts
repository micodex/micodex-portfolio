// app/api/blog/route.ts
import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 0);

    console.log("Query Parameters -> ", { tag, search, limit, page });

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
    console.log("MongoDB Query -> ", query);

    // get total count for pagination
    const total = await Blog.countDocuments(query);
    console.log("total Documents -> ", total);

    // Fetch filtered blog posts, sorted by newest first
    // TODO: fix sort
    const blogPosts = await Blog.find(query)
      .sort({ _id: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json({ success: true, data: blogPosts, total });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "server error" },
      { status: 500 }
    );
  }
}
