import Image from "next/image";
import Link from "next/link";
import connectDB from "@/lib/mongodb";
import Blog, { IBlog } from "@/models/blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  await connectDB();

  const blog = await Blog.findById(id).lean<IBlog>();

  if (!blog) {
    return (
      <div className="section-container h-screen my-40">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="font-bold text-4xl text-center text-red-500">
            بلاگ پست پیدا نشد
          </h1>
          <Link
            className="font-medium  hover:text-sky-500 underline-offset-7 hover:underline"
            href="/blog"
          >
            بازگشت به وبلاگ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className=" bg-gray-50 dark:bg-gray-950">
      <article className="max-w-[768px] mx-auto px-4 py-40">
        <div className="relative aspect-16/9 border rounded-lg overflow-hidden">
          <Image
            src={blog.src}
            alt={blog.title}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="mt-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            {blog.title}
          </h1>
          <p className="text-lg mt-5 text-gray-600 dark:text-gray-400">
            {blog.content}
          </p>
        </div>
      </article>
    </section>
  );
}
