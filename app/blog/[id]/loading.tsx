export default function Loading() {
  return (
    <div className="h-dvh bg-gray-50 dark:bg-gray-950">
      <div className="bg-gray-100 dark:bg-gray-900 px-0 pt-30 pb-10">
        <div className="max-w-[768px] mx-auto px-4">
          <div className="">
            <div className="mb-8 w-32 h-8 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          </div>
          <h1 className="mb-2 w-4/5 h-8 bg-gray-200 dark:bg-gray-800 animate-pulse"></h1>
          <h1 className="mb-10 w-3/5 h-8 bg-gray-200 dark:bg-gray-800 animate-pulse"></h1>
          <div className="px-0 mb-6 bg-gray-200 dark:bg-gray-800 relative w-full aspect-16/9 border rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* post content */}
      <div className="mt-10 max-w-[768px] mx-auto px-4 pb-20">
        {/* tailwind typography:prose class */}
      </div>
    </div>
  );
}
