import { IProject } from "@/models/project";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <article
      data-aos="fade-in" // hydration fail?!
      className="lg:block flex gap-4 bg-white dark:bg-gray-900 shadow-2xl shadow-slate-200/50 dark:shadow-none hover:shadow-sm transition-shadow duration-100 ring-2 ring-gray-100  dark:ring-gray-800 px-4 py-4 rounded-md overflow-hidden"
    >
      <div className=" relative w-full aspect-4/3 border rounded-sm overflow-hidden dark:opacity-84">
        <Image
          className="object-cover w-full"
          src={project.src}
          alt={`Screenshot of ${project.title} project`}
          fill={true}
        ></Image>
      </div>
      <div className="lg:block flex flex-col">
        <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg lg:mt-4 mt-0">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          {project.description}
        </p>
        <div className="mt-4 space-x-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-600 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-200 ring-1 ring-gray-500/10 ring-inset"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center lg:mt-6 mt-auto ">
          <a
            target="_blank"
            rel="noopener noreferrer" // for security
            href={project.githubUrl}
            className="btn-link flex items-center space-x-2 shadow-[0_0_50px_0px] shadow-sky-200 dark:shadow-none"
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
