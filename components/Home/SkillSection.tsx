"use client";

import { useState } from "react";
import { motion } from "motion/react";
// skill card
import SkillCard from "../ui/SkillCard";
// Data
import { colors, skills } from "@/lib/data/skills";
import Dialog from "../ui/Dialog";

import { Skill } from "@/types/skill";

export default function SkillSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All Skills");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // filter skills based on type ( front-end / back-end / All Skills)
  const filteredSkills =
    activeFilter === "All Skills"
      ? skills
      : skills.filter((skill) => skill.type === activeFilter);

  const filterButtons = [
    { filter: "All Skills", name: "همه" },
    { filter: "Front-End", name: "فرانت-اند " },
    { filter: "Back-End", name: "بک-اند " },
    { filter: "Tools", name: "ابزار" },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skill-heading"
      className="bg-gray-50 dark:bg-gray-950 py-20 relative"
    >
      <div className="section-container">
        {/* skill header */}
        <div className="p-4 pt-0 mb-8 text-center border-b">
          <h2
            id="skills-heading"
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 text-center"
          >
            مهارت‌های فنی من
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-center">
            یک لیست از مهارت‌های فنی من در حوزه‌های مختلف توسعه وب
          </p>
        </div>

        {/* skill filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterButtons.map((item) => (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveFilter(item.filter)}
              aria-pressed={activeFilter === item.filter} // SEO: tells screen readers this is a toggle button
              key={item.filter}
              className={
                activeFilter === item.filter
                  ? "px-4 py-2 rounded-full text-sm bg-gradient-to-br from-sky-200 to-teal-50 dark:from-blue-950 dark:to-blue-500 text-sky-600 dark:text-white cursor-pointer hover:bg-sky-200 ring-2 ring-sky-400 dark:ring-blue-500"
                  : "px-4 py-2 rounded-full text-sm bg-gradient-to-br from-gray-200 to-gray-50 text-gray-600 dark:from-gray-900 dark:to-gray-700 dark:text-white cursor-pointer hover:from-gray-300 dark:hover:from-gray-700 ring-2 ring-gray-300 dark:ring-gray-600 transition-colors"
              }
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* render the filterd skills */}
        <div
          dir="ltr"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onDetailsClick={setSelectedSkill}
            />
          ))}
        </div>
      </div>

      <Dialog
        isOpen={selectedSkill !== null}
        onClose={() => setSelectedSkill(null)}
      >
        {selectedSkill && (
          <div dir="rtl" className="space-y-5">
            {/* header */}
            <div className="flex items-center gap-3">
              <div
                className="w-14 h-14 rounded-full
                  flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: colors[selectedSkill.color][50],
                  color: colors[selectedSkill.color][500],
                }}
              >
                {selectedSkill.icon}
              </div>

              <div>
                <p
                  className="font-semibold text-gray-800
                  dark:text-gray-200 text-xl"
                >
                  {selectedSkill.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {selectedSkill.type}
                </p>
              </div>
            </div>

            {/* Full Description */}
            <div
              className="text-sm leading-8 text-gray-600
                dark:text-gray-300 "
            >
              {selectedSkill.description}
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
