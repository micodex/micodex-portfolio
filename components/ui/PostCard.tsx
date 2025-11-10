import Image from "next/image";
import { User } from "lucide-react";
import { IBlog } from "@/models/blog";
import Tag from "@/components/ui/Tag";
import { CalendarDays } from "lucide-react";
import * as motion from "motion/react-client";

export default function PostCard({ blog }: { blog: IBlog }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ margin: "-120px" }}
    >
      <article className="p-4 flex gap-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-sm shadow-gray-100 dark:shadow-none transition-shadow duration-100">
        {/* post image*/}
        <div className="relative flex-none w-20 sm:w-44 sm:h-44 rounded-md overflow-hidden">
          <Image
            src={blog.src}
            fill={true}
            alt={`تصویر کاور برای پست: ${blog.title}`}
            className="object-cover"
          />
        </div>
        {/* post content */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-bold text-md  text-gray-800 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 hover:cursor-pointer transition-colors">
            <a href={`/blog/${blog._id}`}>{blog.title}</a>
          </h3>
          <p className="line-clamp-3 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            {blog.description}
          </p>
          <div className="flex gap-2 flex-wrap poppins-font">
            {blog.tags.map((tag) => (
              <Tag key={tag} tag={tag} color="sky" />
            ))}
          </div>
          <span className="text-xs mt-auto text-gray-500">
            <div className="flex gap-4">
              <span>
                <User className="inline me-1 h-4 w-4" />
                {blog.author}
              </span>
              <span>
                <CalendarDays className="inline me-1 h-4 w-4" />
                {blog.date.split(",")[0]}
              </span>
            </div>
          </span>
        </div>
      </article>
    </motion.div>
  );
}
