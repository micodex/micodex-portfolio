// Skill Section
import type { Colors } from "@/types/skill";
import type { Skill } from "@/types/skill";

import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
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
    icon: <SiTypescript />,
    color: "orange",
    title: "TypeScript",
    description:
      "تسلط بالا بر TypeScript برای ساخت برنامه‌های مقیاس‌پذیر و قابل نگهداری با استفاده از تایپ ایستا و معماری تمیز. آشنا با ویژگی‌های مدرن ES6+، اینترفیس‌ها و Generics برای کاهش خطا و بهبود تجربه توسعه. توانایی نوشتن کدهای تمیز و قابل استفاده مجدد در پروژه‌های فرانت‌اند و بک‌اند.",
    level: "92%",
  },
  {
    id: 2,
    type: "Front-End",
    icon: <FaReact />,
    color: "blue",
    title: "React.js",
    description:
      "تجربه در ساخت رابط‌های کاربری پویا و بهینه با استفاده از هوک‌ها. مهارت در مدیریت state پیچیده با Context API و طراحی کامپوننت محور. تمرکز بر نوشتن کدهای ماژولار و بهینه‌سازی عملکرد رندرینگ برای تجربه کاربری سریع و روان.",
    level: "70%",
  },
  {
    id: 3,
    type: "Back-End",
    icon: <SiExpress />,
    color: "green",
    title: "Express",
    description:
      "تسلط بر توسعه APIهای RESTful و اپلیکیشن‌های سمت سرور با Express.js. آشنا با پیاده‌سازی middleware، routing و سیستم‌های احراز هویت برای ساخت بک‌اند مقیاس‌پذیر. تمرکز بر ایجاد منطق سرور امن، کارا و مستند.",
    level: "60%",
  },
  {
    id: 4,
    type: "Front-End",
    icon: <RiTailwindCssFill />,
    color: "pink",
    title: "Tailwind CSS",
    description:
      "مهارت بالا در طراحی رابط‌های واکنش‌گرا و مدرن با استفاده از Tailwind CSS و رویکرد utility-first. توانایی ساخت سیستم‌های طراحی منسجم و بهینه‌سازی عملکرد CSS. تمرکز بر ارائه رابط‌های زیبا، سبک و سازگار با موبایل.",
    level: "98%",
  },
  {
    id: 5,
    type: "Back-End",
    icon: <SiMongodb />,
    color: "green",
    title: "MongoDB",
    description:
      "توانایی طراحی ساختارهای NoSQL منعطف و بهینه برای عملکرد بالا در MongoDB. آشنا با کوئری‌های پیچیده، ایندکس‌گذاری و پایپ‌لاین‌های aggregation. تمرکز بر حفظ یکپارچگی داده‌ها و ساخت دیتابیس‌های کارآمد برای پروژه‌های واقعی.",
    level: "30%",
  },
  {
    id: 6,
    type: "Back-End",
    icon: <SiNextdotjs />,
    color: "slate",
    title: "Next.js",
    description:
      "تسلط بر توسعه اپلیکیشن‌های فول‌استک با Next.js با بهره‌گیری از قابلیت‌های SSR و SSG برای بهبود عملکرد و سئو. آشنا با پیاده‌سازی dynamic routing،  API Routes و بهینه‌سازی رندر سمت سرور. تمرکز بر ساخت ساختارهای تمیز، مقیاس‌پذیر و حرفه‌ای برای پروژه‌های مدرن وب.",
    level: "60%",
  },
];
