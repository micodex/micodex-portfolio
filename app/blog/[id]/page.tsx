import Image from "next/image";
import Link from "next/link";
import connectDB from "@/lib/mongodb";
import Blog, { IBlog } from "@/models/blog";
import { ChevronRight } from "lucide-react";

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
      <div className="section-container h-screen my-30">
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
    <section className="bg-[#FCFAF6] dark:bg-gray-950">
      <article className="">
        <div className="bg-gray-100 dark:bg-gray-900 px-0 pt-30 pb-10">
          {/* post header */}
          <div className="max-w-[768px] mx-auto px-4 text-gray-600 dark:text-gray-400">
            <div className="mb-8 inline-flex gap-1 px-4 py-2 text-sm rounded-full bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-800 dark:bg-gray-950 transition-colors active:scale-90">
              <ChevronRight className="w-5 h-5" />
              <Link className="" href="/blog">
                بازگشت به وبلاگ
              </Link>
            </div>
            <h1 className="mb-8 text-xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {blog.title}
            </h1>
            <div className="px-0 relative aspect-16/9 border rounded-lg overflow-hidden">
              <Image
                src={blog.src}
                alt={blog.title}
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="mt-2 ms-2 flex gap-6 text-gray-600 dark:text-gray-400 text-xs">
              <span>نویسنده: {blog.author}</span>
              <span>تاریخ انتشار: {blog.date.split(",")[0]}</span>
            </div>
          </div>
        </div>
        {/* post content */}
        <div className="mt-10 max-w-[768px] mx-auto px-4 pb-20">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {blog.content}
          </p>
        </div>
      </article>
    </section>
  );
}
