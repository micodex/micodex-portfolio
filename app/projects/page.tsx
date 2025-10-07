import ProjectCard from "@/components/ui/ProjectCard";
import Tag from "@/components/ui/Tag";
import { IProject } from "@/models/project";

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "micodex | projects",
  description:
    "Explore my portfolio: full-stack apps built with modern tech stacks. Clean code, great UX, and scalable architecture.",
};

async function getProjects(): Promise<IProject[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${apiUrl}/api/projects`, {
      next: { revalidate: 60 },
    }); // cach the results and refresh data every 60 seconds (ISR)

    if (!res.ok) throw new Error("Failed to fetch projects");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function projectsPage() {
  const projects = await getProjects();
  const allTags = ["Next.js", "React", "TypeScript", "Front-End", "Full-Stack"];

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

        {/* dotted background */}
        {/* <div
          className="absolute inset-0 h-full w-full opacity-80
          bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
          bg-[size:5px_5px]"
        ></div> */}
      </header>

      <nav className="section-container" aria-label="Blog Post Filters">
        <label className="block ms-4 mb-2 text-gray-600 dark:text-gray-400">
          فیلتر پروژه‌ها
        </label>
        <div className="lg:flex justify-between px-4 py-4 border rounded-xl">
          <div className="content-center flex flex-wrap gap-3 mb-4 lg:mb-0">
            {allTags.map((tag) => (
              <button key={tag}>
                <Tag tag={tag} />
              </button>
            ))}
          </div>

          {/* for screen readers only */}
          <label htmlFor="search" className="sr-only">
            جستجوی پروژه‌ها
          </label>
          <input
            className="input-style lg:w-md"
            id="search"
            type="search"
            name="search"
            aria-label="Search projects"
            placeholder="جستجوی پروژه‌ها..."
          />
        </div>
      </nav>

      <section ria-labelledby="projects-heading">
        <div className="section-container py-20">
          {/* <header className="px-4 mb-8">
            <h2
              id="projects-heading"
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2"
            >
              My Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Not my actual projects. work in progress.
            </p>
          </header> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project cards */}
            {projects.map((project) => (
              <ProjectCard key={String(project._id)} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
