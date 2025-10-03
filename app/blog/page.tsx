import { IBlog } from "@/models/blog";
import { Suspense } from "react";
import PostCard from "@/components/ui/PostCard";
import FilterControls from "@/app/blog/FilterControls";

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "micodex | blog",
  description:
    "Latest articles on web development, programming tips, and tech insights. Stay updated with my tutorials and thoughts.",
};

async function getBlog(tag?: string, search?: string): Promise<IBlog[]> {
  try {
    // api API URL with optional tag and search filters
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const url = new URL(`${apiUrl}/api/blog`);
    if (tag && tag !== "all") url.searchParams.append("tag", tag);
    if (search) url.searchParams.append("search", search);

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
    }); // use ISR for caching posts

    if (!res.ok) throw new Error("Failed to fetch blog posts");
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
interface BlogPageProps {
  searchParams: Promise<{
    tag?: string;
    search?: string;
  }>;
}
export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;

  const blogPosts = await getBlog(params?.tag, params?.search);

  const allTags = ["all", "news", "programming", "ai", "tech"];

  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <header className="mb-10 overflow-hidden">
        <div className="relative section-container pt-40 pb-20 ">
          {/* blur background */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-50 w-90 h-80 bg-pink-400 rounded-full blur-3xl opacity-20"
          ></div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-70 w-52 h-52 bg-blue-400 rounded-full blur-3xl opacity-20"
          ></div>

          <div className=" text-center space-y-3">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              جدید‌ترین پست‌ها
            </h1>
            <p className="opacity-60">
              جدید‌ترین مقالات در مورد دنیای هوش‌مصنوعی و برنامه‌نویسی
            </p>
          </div>
          {/* dotted background */}
          {/* <div
              className="absolute inset-0 h-full w-full opacity-16
                bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
                bg-[size:10px_10px]"
            ></div> */}
        </div>
      </header>

      <div className="section-container">
        <label className="block ms-4 mb-2 text-gray-600 dark:text-gray-400">
          فیلتر پست‌ها
        </label>
        {/* tag filter buttons */}
        <Suspense fallback={<div>Loading filters...</div>}>
          <FilterControls allTags={allTags} />
        </Suspense>
        {/* blogs section*/}
        <section
          aria-labelledby="blog-grid-heading"
          className="dark:bg-gray-950  py-20"
        >
          <h2 id="blog-grid-heading" className="sr-only">
            Blog Posts
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {blogPosts.map((blog) => (
              <PostCard key={String(blog._id)} blog={blog} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
