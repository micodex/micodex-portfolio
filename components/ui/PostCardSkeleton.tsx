import Link from "next/link";

function PostSkeleton() {
  return (
    <div
      data-testid="postcard-skeleton"
      className="p-4 flex gap-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg shadow-gray-100 dark:shadow-none"
    >
      {/* Image Skeleton */}
      <div className="flex-none w-44 h-44 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

      {/* Content Skeleton */}
      <div className="flex flex-col space-y-2 flex-grow">
        {/* Title Skeleton */}
        <div className="h-10 w-4/5 mb-4 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-3 w-5/8 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>

        {/* Tags Skeleton */}
        <div className="inline-flex space-x-2">
          <div className="h-6 w-14 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>

        {/* Author/Date Skeleton (at the bottom) */}
        <div className="mt-auto h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>
    </div>
  );
}

export default function BlogSkeleton() {
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

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      </div>
    </section>
  );
}
