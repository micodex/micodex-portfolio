import connectDB from "@/lib/mongodb";
import Project, { IProject } from "@/models/project";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

// generate dynamic metadata for project page
interface Params {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  await connectDB();
  const { id } = await params;
  const project = await Project.findById(id).lean<IProject>();

  if (!project) {
    return {
      title: "not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  await connectDB();
  // The lean method in Mongoose is used to tell Mongoose to skip instantiating a full Mongoose document and instead return a plain JavaScript object.
  const project = await Project.findById(id).lean<IProject>();

  if (!project)
    return (
      <div className=" min-h-dvh pt-40 max-w-[768px] m-auto px-4 pb-20">
        توضیحات پروژه پیدا نشد!
      </div>
    );

  return (
    <div className="bg-gray-50 dark:bg-stone-950">
      <article className=" min-h-dvh pt-40 max-w-[768px] m-auto px-4 pb-20">
        <div className="prose prose-sm sm:prose-md md:prose-lg dark:prose-invert">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
        {project.title}
      </article>
    </div>
  );
}
