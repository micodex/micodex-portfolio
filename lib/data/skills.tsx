// Skill Section
import type { Colors } from "@/types/skill";
import type { Skill } from "@/types/skill";

import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export const colors: Colors = {
  blue: {
    50: "#eff6ff", // blue-50
    500: "#3b82f6", // blue-500
  },
  green: {
    50: "#f0fdf4", // green-50
    500: "#22c55e", // green-500
  },
  orange: {
    50: "#fff7ed", // orange-50
    500: "#f97316", // orange-500
  },
  pink: {
    50: "#fdf2f8", // pink-50
    500: "#ec4899", // pink-500
  },

  slate: {
    50: "#f8fafc", // slate-50
    500: "#64748b", // slate-500
  },
};

export const skills: Skill[] = [
  {
    id: 1,
    type: "Front-End",
    icon: <SiJavascript />,
    color: "orange",
    title: "JavaScript",
    description:
      "Modern ES6+ features, async programming, and functional patterns.",
    level: "92%",
  },
  {
    id: 2,
    type: "Front-End",
    icon: <FaReact />,
    color: "blue",
    title: "React.js",
    description:
      "Skilled in building dynamic UIs with hooks, state management...",
    level: "70%",
  },
  {
    id: 3,
    type: "Back-End",
    icon: <FaNodeJs />,
    color: "green",
    title: "Node.js",
    description:
      "Experienced in server-side dev, RESTful APIs, and event-driven architecture.",
    level: "60%",
  },
  {
    id: 4,
    type: "Front-End",
    icon: <RiTailwindCssFill />,
    color: "pink",
    title: "Tailwind CSS",
    description:
      " Adept at crafting responsive designs using utility-first CSS framework.",
    level: "98%",
  },
  {
    id: 5,
    type: "Back-End",
    icon: <SiMongodb />,
    color: "green",
    title: "MongoDB",
    description:
      "Capable of designing scalable NoSQL schemas and handling complex queries.",
    level: "40%",
  },
  {
    id: 6,
    type: "Back-End",
    icon: <SiNextdotjs />,
    color: "slate",
    title: "Next.js",
    description:
      " Familiar with SSR, API routes, and optimized full-stack React applications.",
    level: "60%",
  },
];
