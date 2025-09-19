import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/models/project";

export async function GET() {
  // 1. Connect to the database
  await connectDB();

  try {
    // 2. Fetch all documents from the 'projects' collection
    // The .sort({ createdAt: -1 }) will sort the projects from newest to oldest
    const projects = await Project.find({}).sort({ createdAt: -1 });
    // 3. Send a successful response
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error(error);
    // 4. Handle any errors that occur
    // 500 status code for server errors
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
