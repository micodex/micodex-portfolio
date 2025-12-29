// Skill Section
import type { Colors } from "@/types/skill";
import type { Skill } from "@/types/skill";

// icons
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

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
  teal: {
    50: "#f0fdfa", // teal-50
    500: "#10b981", // teal-500
  },
  violet: {
    50: "#f5f3ff", // violet-50
    500: "#8b5cf6", // violet-500
  },
};

export const skills: Skill[] = [
  {
    id: 1,
    type: "Front-End",
    icon: <SiTypescript />,
    color: "orange",
    title: "TypeScript & JS",
    description:
      "آشنایی با TypeScript برای ساخت برنامه‌های مقیاس‌پذیر و قابل نگهداری با استفاده از تایپ ایستا و معماری تمیز. آشنا با ویژگی‌های مدرن ES6+، اینترفیس‌ها و Generics برای کاهش خطا و بهبود تجربه توسعه. توانایی نوشتن کدهای تمیز و قابل استفاده مجدد در پروژه‌های فرانت‌اند و بک‌اند.",
    level: "70%",
  },
  {
    id: 2,
    type: "Front-End",
    icon: <FaReact />,
    color: "blue",
    title: "React.js",
    description:
      "تجربه در ساخت رابط‌های کاربری پویا و بهینه با استفاده از هوک‌ها. مهارت در مدیریت state پیچیده با Context API و طراحی کامپوننت محور. تمرکز بر نوشتن کدهای ماژولار و بهینه‌سازی عملکرد رندرینگ برای تجربه کاربری سریع و روان.",
    level: "60%",
  },
  {
    id: 3,
    type: "Back-End",
    icon: <SiExpress />,
    color: "teal",
    title: "Express",
    description:
      "توسعه API های RESTful و اپلیکیشن‌های سمت سرور با Express.js. آشنا با پیاده‌سازی middleware، routing و سیستم‌های احراز هویت برای ساخت بک‌اند مقیاس‌پذیر. تمرکز بر ایجاد منطق سرور امن، کارا و مستند.",
    level: "25%",
  },
  {
    id: 4,
    type: "Front-End",
    icon: <RiTailwindCssFill />,
    color: "pink",
    title: "Tailwind & CSS",
    description:
      "مهارت در طراحی رابط‌های واکنش‌گرا و مدرن با استفاده از Tailwind CSS و رویکرد utility-first. توانایی ساخت سیستم‌های طراحی منسجم و بهینه‌سازی عملکرد CSS. تمرکز بر ارائه رابط‌های زیبا، سبک و سازگار با موبایل.",
    level: "90%",
  },
  {
    id: 5,
    type: "Back-End",
    icon: <SiMongodb />,
    color: "green",
    title: "MongoDB",
    description:
      "توانایی طراحی ساختارهای NoSQL منعطف و بهینه در MongoDB. آشنا با کوئری‌ها ، ایندکس‌گذاری. تمرکز بر حفظ یکپارچگی داده‌ها و ساخت دیتابیس‌های کارآمد برای پروژه‌های واقعی.",
    level: "30%",
  },
  {
    id: 6,
    type: "Back-End",
    icon: <SiNextdotjs />,
    color: "slate",
    title: "Next.js",
    description:
      "تسلط بر توسعه اپلیکیشن‌های فول‌استک با Next.js با بهره‌گیری از قابلیت‌های SSR و SSG برای بهبود عملکرد و سئو. آشنا با پیاده‌سازی dynamic routing،  API Routes و بهینه‌سازی رندر سمت سرور. تمرکز بر ساخت ساختارهای تمیز، مقیاس‌پذیر برای پروژه‌های مدرن وب.",
    level: "55%",
  },
  {
    id: 7,
    type: "Tools",
    icon: <FaGithub />,
    color: "violet",
    title: "Git & github",
    description:
      "توانایی کار با GitHub برای اشتراک‌گذاری پروژه‌ها و همکاری تیمی. تجربه در ایجاد و استفاده از Branchها و Pull Requestها. استفاده از امکانات پایه GitHub مثل Issues برای پیگیری وظایف.",
    level: "50%",
  },
];
