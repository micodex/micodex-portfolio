import { IProject } from "@/models/project";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <article
      data-aos="fade-in" // hydration fail?!
      className="p-4 bg-white dark:bg-gray-900 shadow-2xl shadow-slate-200/50 dark:shadow-none hover:shadow-sm transition-shadow duration-100 ring-2 ring-gray-100  dark:ring-gray-800 rounded-md overflow-hidden"
    >
      {/* card image */}
      <div className="relative w-full aspect-4/3 rounded-sm overflow-hidden dark:opacity-84">
        <Image
          className="object-cover w-full"
          src={project.src}
          alt={`Screenshot of ${project.title} project`}
          fill={true}
        ></Image>
      </div>
      {/* card content */}
      <div className="pt-4">
        <h3 className="font-bold text-l text-gray-800 dark:text-gray-200">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md text-xs font-light bg-gray-50 dark:bg-gray-600 ring-2 ring-inset ring-gray-200 dark:ring-gray-500 text-gray-600 dark:text-gray-200 "
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer" // for security
            href={project.githubUrl}
            className="btn-link rounded-full flex items-center space-x-2 shadow-[0_0_50px_0px] shadow-sky-200 dark:shadow-none"
          >
            <FaGithub aria-hidden="true" />
            <span className="text-sm">Source</span>
          </a>
          <a
            className="text-sm text-sky-500 hover:underline decoration-2"
            target="_blank"
            aria-label={`View live demo of ${project.title}`}
            href={project.projectUrl}
          >
            view project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
