import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data/blogs";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="section-container h-screen my-40">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="font-bold text-4xl text-center text-rose-500">
            Blog post not found
          </h1>
          <Link
            className="font-medium  hover:text-violet-500 decoration-wavy underline-offset-6 hover:underline"
            href="/blog"
          >
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className=" bg-gray-50 dark:bg-gray-950">
      <article className="w-[768px] mx-auto py-40">
        <div className="relative  aspect-16/9 border rounded-lg overflow-hidden">
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
