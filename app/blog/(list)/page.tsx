import FilterControls from "@/app/blog/(list)/FilterControls";
import BlogList from "./blogList";

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "وبلاگ | micodex",
  description:
    "Latest articles on web development, programming tips, and tech insights. Stay updated with my tutorials and thoughts.",
};

async function getBlog(tag?: string, search?: string) {
  try {
    // api API URL with optional tag and search filters
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const url = new URL(`${apiUrl}/api/blog`);
    if (tag && tag !== "all") url.searchParams.append("tag", tag);
    if (search) url.searchParams.append("search", search);
    url.searchParams.append("page", "1");
    url.searchParams.append("limit", "6");
    const res = await fetch(url.toString(), {
      cache: "no-store",
    }); // TODO: use ISR for caching posts  next: { revalidate: 60 },

    if (!res.ok) throw new Error("Failed to fetch blog posts");
    const { data, total } = await res.json();

    return { posts: data, total };
  } catch (error) {
    console.log(error);
    return { posts: [], total: 0 };
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

  const { posts: initialPosts, total } = await getBlog(
    params?.tag,
    params?.search
  );

  const allTags = [
    "all",
    "news",
    "programming",
    "ai",
    "tech",
    "entertainment",
    "science",
  ];

  return (
    // <div className="bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
    //   <header className="mb-10">
    //     <div className="relative section-container pt-40 pb-20 ">
    //       {/* blur background */}
    //       <div
    //         aria-hidden="true"
    //         className="absolute top-0 left-50 w-90 h-80 bg-pink-400 rounded-full blur-3xl opacity-20"
    //       ></div>
    //       <div
    //         aria-hidden="true"
    //         className="absolute bottom-0 right-70 w-52 h-52 bg-blue-400 rounded-full blur-3xl opacity-20"
    //       ></div>

    //       <div className=" text-center space-y-3">
    //         <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
    //           جدید‌ترین پست‌ها
    //         </h1>
    //         <p className="opacity-60">
    //           جدید‌ترین مقالات در مورد دنیای هوش‌مصنوعی و برنامه‌نویسی
    //         </p>
    //       </div>
    //     </div>
    //   </header>

    //   <div className="section-container">
    //     <label className="block ms-4 mb-2 text-gray-600 dark:text-gray-400">
    //       فیلتر پست‌ها
    //     </label>
    //     {/* tag filter buttons */}
    //     <FilterControls allTags={allTags} />

    //     {/* blogs section*/}
    //     <BlogList
    //       initialPosts={initialPosts}
    //       total={total}
    //       tag={params?.tag}
    //       search={params?.search}
    //     />
    //   </div>
    // </div>
    <div className="h-dvh bg-gray-50 dark:bg-gray-950">
      <div className="bg-gray-100 dark:bg-gray-900 px-0 pt-30 pb-10">
        <div className="max-w-[768px] mx-auto px-4">
          <div className="">
            <div className="mb-8 w-32 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          </div>
          <h1 className="mb-2 w-4/5 h-8 bg-gray-200 dark:bg-gray-700 animate-pulse"></h1>
          <h1 className="mb-10 w-3/5 h-8 bg-gray-200 dark:bg-gray-700 animate-pulse"></h1>
          <div className="px-0 mb-6 bg-gray-200 dark:bg-gray-700 relative w-full aspect-16/9 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* post content */}
      <div className="mt-10 max-w-[768px] mx-auto px-4 pb-20">
        {/* tailwind typography:prose class */}
      </div>
    </div>
  );
}
