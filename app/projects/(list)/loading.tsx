const ProjectSkeleton = () => {
  return (
    <div
      className="p-4 bg-white dark:bg-gray-900 shadow-2xl shadow-slate-200/50 dark:shadow-none ring-2
      ring-gray-100 dark:ring-gray-800 rounded-md overflow-hidden"
    >
      {/* card image */}
      <div className="bg-gray-200 dark:bg-gray-700 animate-pulse relative w-full aspect-4/3 rounded-sm"></div>
      {/* card content */}
      <div className="pt-4">
        {/* title */}
        <div className="font-bold h-4 w-24 bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
        {/* description */}
        <p className="mt-3 bg-gray-200 dark:bg-gray-700 animate-pulse h-3 "></p>
        <p className="mt-1 bg-gray-200 dark:bg-gray-700 animate-pulse h-3 w-1/2"></p>
        {/* tags */}
        <div className="mt-4 flex gap-3 flex-wrap">
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-6 w-16 rounded-md"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-6 w-20 rounded-md"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-6 w-13 rounded-md"></div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          {/* github button */}
          <div className="bg-gray-300 dark:bg-gray-600 animate-pulse rounded-full w-22 h-9"></div>
          {/* preview link */}
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-4 w-22 rounded"></div>
        </div>
      </div>
    </div>
  );
};
const LoadingProjects = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
      <header className="mb-10">
        <div className="relative section-container pt-40 pb-20">
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
              همه پروژه‌ها
            </h1>
            <p className="opacity-60">
              یه لیست از همه پروژه‌هایی که انجام دادم
            </p>
          </div>
        </div>
      </header>

      <div className="section-container" aria-label="Blog Post Filter loading">
        <label className="block ms-4 mb-2 text-gray-600 dark:text-gray-400">
          فیلتر پروژه‌ها (در حال توسعه...)
        </label>
        <div className="h-20 bg-gray-200 dark:bg-gray-700 animate-pulse px-4 py-4 rounded-xl"></div>
      </div>

      <div>
        <div className="section-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project cards */}
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProjects;
