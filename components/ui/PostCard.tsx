import Image from "next/image";
import { IBlog } from "@/models/blog";

export default function PostCard({ blog }: { blog: IBlog }) {
  return (
    <article
      data-aos="fade-in"
      className="p-4 flex gap-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-sm shadow-gray-100 dark:shadow-none transition-shadow duration-100"
    >
      <div className="flex-none relative w-44 h-44 rounded-md overflow-hidden ">
        <Image
          src={blog.src}
          fill={true}
          alt={`Cover image for blog post: ${blog.title}`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold text-md text-gray-800 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 hover:cursor-pointer transition-colors">
          <a href={`/blog/${blog.id}`}>{blog.title}</a>
        </h3>
        <p className=" text-gray-600 dark:text-gray-400 text-sm ">
          {blog.description}
        </p>
        <div className="inline-flex space-x-2">
          {blog.tags.map((tag) => (
            <span
              className="flex items-center rounded-md bg-sky-50 dark:bg-gray-500 px-2 py-1 text-xs font-light text-sky-600 dark:text-gray-200 ring-2 ring-sky-500/10 ring-inset"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs mt-auto text-gray-500">
          {blog.author} | {blog.date}
        </span>
      </div>
    </article>
  );
}
