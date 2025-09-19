"use client";

import { useState } from "react";
// import AosProvider from "../common/AosProvider";

// skill card
import SkillCard from "../ui/SkillCard";

// Data
import { skills } from "@/lib/data/skills";

export default function SkillSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All Skills");

  // filter skills based on type ( front-end / back-end / All Skills)
  const filteredSkills =
    activeFilter === "All Skills"
      ? skills
      : skills.filter((skill) => skill.type === activeFilter);

  const filterButtons = ["All Skills", "Front-End", "Back-End"];

  return (
    <section
      id="skills"
      aria-labelledby="skill-heading"
      className="bg-gray-50 dark:bg-gray-950 py-20"
    >
      <div className="section-container">
        {/* skill header */}
        <div className="p-4 pt-0 mb-8 text-center border-b">
          <h2
            id="skills-heading"
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 text-center"
          >
            My Technical Skills
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-center">
            Here&apos;s a showcase of my technical expertise across different
            domains of software development.
          </p>
        </div>

        {/* skill filter buttons */}
        <div className="flex justify-center space-x-3 mb-8">
          {filterButtons.map((item) => (
            <button
              onClick={() => setActiveFilter(item)}
              aria-pressed={activeFilter === item} // SEO: tells screen readers this is a toggle button
              key={item}
              className={
                activeFilter === item
                  ? "px-4 py-2 rounded-full bg-gradient-to-br from-sky-200 to-teal-50 text-sky-600 cursor-pointer hover:bg-sky-200 ring-2 ring-sky-400"
                  : "px-4 py-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-50 text-gray-600 dark:from-gray-900 dark:to-gray-700 dark:text-white cursor-pointer hover:from-gray-300 dark:hover:from-gray-700 ring-2 ring-gray-300 dark:ring-gray-600 transition-colors"
              }
            >
              {item}
            </button>
          ))}
        </div>

        {/* render the filterd skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>

      {/* Component-scoped style */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </section>
  );
}
