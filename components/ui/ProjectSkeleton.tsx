// This component is for a single skeleton card
const CardSkeleton = () => (
  <div className="lg:block flex flex-col gap-4 bg-gray-50 dark:bg-gray-900 ring-2 ring-gray-100 dark:ring-gray-800 px-4 py-4 rounded-md">
    {/* Image Placeholder */}
    <div className="relative w-full aspect-4/3 bg-gray-300 dark:bg-gray-700 rounded-sm animate-pulse"></div>
    <div className="w-full">
      {/* Title Placeholder */}
      <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mt-4 animate-pulse"></div>
      {/* Description Placeholder */}
      <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded mt-2 animate-pulse"></div>
      <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded mt-1 animate-pulse"></div>
      {/* Tags Placeholder */}
      <div className="flex gap-2 mt-4">
        <div className="h-5 w-16 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </div>
      {/* Buttons Placeholder */}
      <div className="flex justify-between items-center mt-6">
        <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-4 w-28 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);

// This is the main export, which includes the header and multiple cards
export default function ProjectSkeleton() {
  return (
    <section className="dark:bg-gray-950">
      <div className="section-container py-20">
        <div className="p-4 pt-0 mb-8 flex justify-between border-b">
          <div className="">
            <h2 className="text-2xl font-bold mb-2">Projects 📂</h2>
            <h3 className="text-sm text-gray-600">
              A showcase of my best projects
            </h3>
          </div>
          <div>
            <a className="hover:text-sky-400" href="#">
              All Projects →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render 3 skeleton cards for the placeholder */}
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </section>
  );
}
