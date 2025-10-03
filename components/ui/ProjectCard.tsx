import Image from "next/image";
import { IProject } from "@/models/project";
import { FaGithub } from "react-icons/fa";
import Tag from "@/components/ui/Tag";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <article
      data-aos="fade-in" // hydration fail?!
      className="p-4 bg-white dark:bg-gray-900 shadow-2xl shadow-slate-200/50 dark:shadow-none hover:shadow-sm transition-shadow duration-100 ring-2 ring-gray-100  dark:ring-gray-800 rounded-md overflow-hidden"
    >
      {/* card image */}
      <div className="relative w-full aspect-4/3 rounded-sm overflow-hidden dark:opacity-90">
        <Image
          className="object-cover w-full"
          src={project.src}
          alt={`اسکرین‌شات پروژه ${project.title}`}
          fill={true}
        ></Image>
      </div>
      {/* card content */}
      <div className="pt-4">
        <h3 className="font-bold text-l text-gray-800 dark:text-gray-200">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mt-4 flex gap-3 flex-wrap poppins-font">
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer" // for security
            href={project.githubUrl}
            className="btn-card"
          >
            <FaGithub aria-hidden="true" />
            <span className="text-sm">سورس</span>
          </a>
          <a
            className="text-sm text-sky-500 hover:underline decoration-2"
            target="_blank"
            aria-label={`View live demo of ${project.title}`}
            href={project.projectUrl}
          >
            مشاهده پروژه <span aria-hidden="true">↖</span>
          </a>
        </div>
      </div>
    </article>
  );
}
