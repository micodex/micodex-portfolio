import type { Skill } from "@/types/skill";
import { colors } from "@/lib/data/skills";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  return (
    <div
      dir="rtl"
      data-aos="fade-in"
      className="relative
        p-6 rounded-lg bg-white dark:bg-gradient-to-br dark:bg-gray-900 ring
       ring-gray-200 dark:ring-gray-800 transition-colors shadow-2xl
        shadow-slate-200/50 dark:shadow-none hover:ring-4
      "
    >
      <div className="flex items-center mb-4 ">
        <div
          className={
            "w-12 h-12 text-2xl bg-orange-50 text-orange-500 rounded-full flex items-center justify-center me-3"
          }
          style={{
            backgroundColor: colors[skill.color][50],
            color: colors[skill.color][500],
          }}
          aria-label={`${skill.title} icon`} // SEO: gives screen readers a meaningful description.
          role="img" // SEO: treated as an image.
        >
          {skill.icon}
        </div>
        <h4 className="poppins-font text-lg font-semibold text-gray-800 dark:text-gray-200">
          {skill.title}
        </h4>
      </div>
      <p className="line-clamp-3 text-gray-600 dark:text-gray-400 text-sm mb-6">
        {skill.description}
      </p>
      {/* --- progress bar */}
      <div
        className="w-full bg-gray-200 dark:bg-gray-800 border-1 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={parseInt(skill.level)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.title} proficiency`}
      >
        <div
          className={`h-2`}
          style={{
            backgroundColor: colors[skill.color][500],
            width: `${skill.level}`,
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span
          aria-label={`${skill.title}: ${
            parseInt(skill.level) > 80 ? "Expert" : "Intermediate"
          }`} // SEO:
        >
          {parseInt(skill.level) > 80
            ? "پیشرفته"
            : parseInt(skill.level) > 50
            ? "متوسط"
            : "مقدماتی"}
        </span>
        <span>{skill.level}</span>
      </div>

      {/* dot background */}
      <div
        className="absolute inset-0 h-full w-full opacity-30 
      bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
      bg-[size:12px_12px] -z-4"
      ></div>
    </div>
  );
}
