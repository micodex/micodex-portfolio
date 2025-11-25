"use client";

import Tag from "@/components/ui/Tag";
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
      className="lg:flex justify-between p-4 border rounded-xl"
    >
      <div className="content-center flex flex-wrap gap-3 mb-4 lg:mb-0">
        {allTags.map((tag) => (
          <button
            key={tag}
            aria-pressed={currentTag === tag}
            onClick={() => handleTagClick(tag)}
            className="cursor-pointer"
          >
            <Tag tag={tag} color={currentTag === tag ? "sky" : ""} />
          </button>
        ))}
      </div>
      {/* search input */}
      <form onSubmit={handleSearch}>
        <input
          className="input-style lg:w-md"
          type="search"
          name="search"
          aria-label="search blog posts"
          id="search"
          placeholder="جستجو..."
          defaultValue={currentSearch}
        />
      </form>
    </nav>
  );
}
