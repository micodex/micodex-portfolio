"use client";

import { useSearchParams, useRouter } from "next/navigation";
// Component to handle tag and search form (client-side for interactivity)
export default function FilterControls({ allTags }: { allTags: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") || "all";
  const currentSearch = searchParams.get("search") || "";

  // handle tag click
  const handleTagClick = (tag: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (tag === "all") newParams.delete("tag");
    else newParams.set("tag", tag);
    router.push(`?${newParams.toString()}`);
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const newParams = new URLSearchParams(searchParams);
    if (search) newParams.set("search", search);
    else newParams.delete("search");
    router.push(`?${newParams.toString()}`);
  };

  return (
    <nav
      aria-label="Blog Post Filters"
      className="lg:flex justify-between px-4 py-4 border rounded-xl"
    >
      <div className="content-center space-x-4 mb-4 lg:mb-0">
        {allTags.map((tag, index) => (
          <button
            key={index}
            aria-pressed={currentTag === tag}
            onClick={() => handleTagClick(tag)}
            className={`px-2 py-1 rounded-md text-xs font-light bg-white dark:bg-gray-800
              dark:text-gray-300 text-gray-600 ring-2 ring-gray-500/10 cursor-pointer
              hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
            style={{
              background: currentTag === tag ? "#0EA5E9" : "",
              color: currentTag === tag ? "white" : "",
            }}
          >
            #{tag}
          </button>
        ))}
      </div>
      <form onSubmit={handleSearch}>
        <input
          className="px-4 py-2 w-full lg:w-md outline-none bg-gray-100 border-2 border-gray-200 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-400 dark:bg-gray-800 rounded-xl"
          type="search"
          name="search"
          aria-label="search blog posts"
          id="search"
          placeholder="search..."
          defaultValue={currentSearch}
        />
      </form>
    </nav>
  );
}
