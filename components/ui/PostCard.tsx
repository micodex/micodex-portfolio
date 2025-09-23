import Image from "next/image";
import { IBlog } from "@/models/blog";
import Tag from "@/components/ui/Tag";

export default function PostCard({ blog }: { blog: IBlog }) {
  return (
    <article
      data-aos="fade-in"
      className="p-4 flex gap-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-sm shadow-gray-100 dark:shadow-none transition-shadow duration-100"
    >
      {/* post imaage*/}
      <div className="relative flex-none w-20 sm:w-44 sm:h-44 rounded-md overflow-hidden ">
        <Image
          src={blog.src}
          fill={true}
          alt={`Cover image for blog post: ${blog.title}`}
          className="object-cover"
        />
      </div>
      {/* post content */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold text-md  text-gray-800 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 hover:cursor-pointer transition-colors">
          <a href={`/blog/${blog.id}`}>{blog.title}</a>
        </h3>
        <p className=" text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          {blog.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {blog.tags.map((tag) => (
            <Tag key={tag} tag={tag} color="sky" />
          ))}
        </div>
        <span className="text-xs mt-auto text-gray-500">
          {blog.author} | {blog.date}
        </span>
      </div>
    </article>
  );
}
