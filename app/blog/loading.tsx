// loading conponent for blog page

function PostSkeleton() {
  return (
    <div
      data-testid="postcard-skeleton"
      className="p-4 flex gap-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg shadow-gray-100 dark:shadow-none"
    >
      {/* Image Skeleton */}
      <div className="flex-none w-20 sm:w-44 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

      {/* Content Skeleton */}
      <div className="flex flex-col space-y-4 flex-grow">
        {/* Title Skeleton */}
        <div className="h-10 w-4/5 mb-4 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

        {/* Description Skeleton */}
        <div className="space-y-1">
          <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-3 w-5/8 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2">
          <div className="h-4 w-10 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          <div className="h-4 w-10 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>

        {/* Author/Date Skeleton (at the bottom) */}
        <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>
    </div>
  );
}

export default function loadingBlog() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
      <header className="mb-10">
        <div className="relative section-container pt-40 pb-20 ">
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
        </div>
      </header>
      <div className="section-container">
        <label className="block ms-4 mb-2 text-gray-600 dark:text-gray-400">
          فیلتر پست‌ها
        </label>
        <div className="sm:h-20 h-28 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
        <section
          aria-labelledby="blog-grid-heading"
          className="dark:bg-gray-950  py-20"
        >
          <h2 id="blog-grid-heading" className="sr-only">
            Blog Posts
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </div>
        </section>
      </div>
    </div>
  );
}
