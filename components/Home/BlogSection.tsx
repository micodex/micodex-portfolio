import { IPost } from "@/models/post";
import PostCard from "../ui/PostCard";
import Link from "next/link";
import { CloudAlert } from "lucide-react";

async function getNewBlogs(): Promise<IPost[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${apiUrl}/api/posts?limit=4`, {
      next: { revalidate: 60 },
    }); // cach the results and refresh data every 60 seconds (ISR)

    if (!res.ok) throw new Error("Faild to fetch project");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function BlogSection() {
  // fake delay for tesing
  // await new Promise((resolve) => setTimeout(resolve, 8000));

  const newBlogs = await getNewBlogs();

  return (
    <section
      aria-labelledby="blog-section-heading"
      className="bg-gray-50 dark:bg-gray-950"
    >
      <div className="section-container py-20">
        <header className="p-4 pt-0 mb-8 flex justify-between border-b">
          <div>
            <h2 id="blog-section-heading" className="text-2xl font-bold mb-2">
              وبلاگ
            </h2>
            <h3 className="text-sm text-gray-600">
              خبر‌های جالب رو اینجا دنبال کنید
            </h3>
          </div>
          <div>
            <Link
              className="hover:text-sky-400"
              href="/blog"
              aria-label="read all blog posts"
            >
              بیشتر بخونید <span aria-hidden="true">←</span>
            </Link>
          </div>
        </header>

        {newBlogs.length === 0 ? (
          <div className="py-10 text-gray-500 dark:text-gray-400">
            <div className="flex flex-col gap-2 items-center">
              <CloudAlert />
              <p>هیچ بلاگی پیدا نشد!</p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {newBlogs.map((blog) => (
              <PostCard key={String(blog._id)} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
