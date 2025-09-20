// import { blogs } from "@/lib/data/blogs";
import { IBlog } from "@/models/blog";
import PostCard from "../ui/PostCard";
import Link from "next/link";

async function getNewBlogs(): Promise<IBlog[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${apiUrl}/api/newBlogs`, { cache: "no-store" });
    if (!res.ok) throw new Error("Faild to fetch project");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function BlogSection() {
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
              Blogs <span aria-hidden="true">📝</span>
            </h2>
            <h3 className="text-sm text-gray-600">Latest news in technology</h3>
          </div>
          <div>
            <Link
              className="hover:text-sky-400"
              href="/blog"
              aria-label="read all blog posts"
            >
              Read more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        {newBlogs.length === 0 ? (
          <p className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
            No blog posts available yet.
          </p>
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
