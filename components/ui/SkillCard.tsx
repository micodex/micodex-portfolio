import type { Skill } from "@/types/skill";
import { colors } from "@/lib/data/skills";

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  return (
    <div
      data-aos="fade-in"
      className="
        p-6 rounded-lg bg-white dark:bg-gradient-to-br dark:bg-gray-900 ring
       ring-gray-200 dark:ring-gray-800 transition-shadow shadow-2xl
        shadow-slate-200/50 dark:shadow-none hover:shadow-sm duration-100 animate-fadeIn
      "
    >
      <div className="flex items-center mb-4 ">
        <div
          className={`w-12 h-12 text-2xl bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mr-4`}
          style={{
            backgroundColor: colors[skill.color][50],
            color: colors[skill.color][500],
          }}
          aria-label={`${skill.title} icon`} // SEO: gives screen readers a meaningful description.
          role="img" // SEO: treated as an image.
        >
          {skill.icon}
        </div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {skill.title}
        </h4>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {skill.description}
      </p>
      <div
        className="w-full bg-gray-200 rounded-full overflow-hidden"
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
          {parseInt(skill.level) > 80 ? "Expert" : "Intermediate"}
        </span>
        <span>{skill.level}</span>
      </div>
    </div>
  );
}
