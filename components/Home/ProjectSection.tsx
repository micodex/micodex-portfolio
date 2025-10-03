import { IProject } from "@/models/project";
import ProjectCard from "../ui/ProjectCard";

// Helper function to fetch projects
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

export default async function ProjectSection() {
  // fake delay for tesing
  // await new Promise((resolve) => setTimeout(resolve, 8000));

  const projects = await getProjects();

  return (
    <section
      aria-labelledby="project-section-heading"
      className="bg-gray-50 dark:bg-gray-950"
    >
      <div className="section-container py-20">
        <header className="p-4 pt-0 mb-8 flex justify-between border-b">
          <div className="">
            <h2
              id="project-section-heading"
              className="text-2xl text-gray-800 dark:text-gray-200 font-bold mb-2"
            >
              پروژه‌ها <span aria-hidden="true">📂</span>
            </h2>
            <h3 className="text-sm text-gray-600 dark:text-gray-400">
              یک لیست از بهترین پروژه‌های من
            </h3>
          </div>
          <div>
            <a
              className="hover:text-sky-400"
              href="./projects"
              aria-label="View all projects"
            >
              همه پروژه‌ها ←
            </a>
          </div>
        </header>

        {projects.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-8">
            No projects available at the moment.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project cards */}
            {projects.map((project) => (
              <li key={String(project._id)}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
