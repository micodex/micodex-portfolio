"use client";

import { useEffect, useState } from "react";
import { IBlog } from "@/models/blog";
import PostCard from "@/components/ui/PostCard";

interface BlogListProps {
  initialPosts: IBlog[];
  total: number;
  tag?: string;
  search?: string;
}

export default function BlogList({
  initialPosts,
  total,
  tag,
  search,
}: BlogListProps) {
  const [posts, setPosts] = useState<IBlog[]>(initialPosts);
  const [page, setPage] = useState(2); // start from next page
  const [hasMore, setHasMore] = useState(initialPosts.length < total);
  const [loading, setLoading] = useState(false);

  // reset state when the filters (tag or search) change
  useEffect(() => {
    setPosts(initialPosts);
    setPage(2);
    setHasMore(initialPosts.length < total);
  }, [initialPosts, total]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const loadMore = async () => {
    setLoading(true);

    try {
      // append query tags
      const url = new URL(`${apiUrl}/api/blog`);
      if (tag && tag !== "all") url.searchParams.append("tag", tag);
      if (search) url.searchParams.append("search", search);
      url.searchParams.append("page", page.toString());
      url.searchParams.append("limit", "6");

      // fetch posts
      const res = await fetch(url.toString(), { cache: "no-store" });
      if (!res.ok) throw new Error("faild to fetch more posts");
      const { data: newPosts } = await res.json();

      // update states
      setPosts([...posts, ...newPosts]);
      setPage(page + 1);
      setHasMore(posts.length + newPosts.length < total);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-labelledby="blog-grid-heading" className="py-10">
      <h2 id="blog-grid-heading" className="sr-only">
        Blog Posts
      </h2>

      {/* posts grid */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {posts.map((blog) => (
          <PostCard key={String(blog._id)} blog={blog} />
        ))}
      </div>

      {/* loadmore button */}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            disabled={loading}
            className="btn-primary rounded-full transition-colors disabled:opacity-70"
          >
            {loading ? "بارگذاری..." : "بارگذاری بیشتر"}
          </button>
        </div>
      )}
    </section>
  );
}
