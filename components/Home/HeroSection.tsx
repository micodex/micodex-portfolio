import "@/styles/custom.css";

import { FaGithub } from "react-icons/fa";
import { Download } from "lucide-react";

import * as motion from "motion/react-client";

// components
import HeroSocial from "../ui/HeroSocial";
import HeroTerminal from "../ui/HeroTerminal";
import ResumeButton from "../ui/ResumeButton";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-sky-50 dark:bg-gray-900"
    >
      <div className="section-container">
        {/* dot background */}
        <div
          className="absolute inset-0 h-full w-full opacity-70
            bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
            bg-[size:30px_30px]"
        ></div>

        <div className="lg:flex gap-10 pb-20 pt-40">
          <div className="flex flex-col">
            {/* ABOUT ME card */}
            <div className="z-1 px-6 py-6 rounded-xl bg-sky-100/30 dark:bg-gray-800/20 ring-2 dark:ring-gray-800 ring-sky-200">
              <motion.h1
                initial={{ x: -20 }}
                animate={{ x: 0, transition: { duration: 3, type: "spring" } }}
                className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 "
              >
                سلام <span aria-hidden="true">👋</span> میلاد هستم
              </motion.h1>
              <motion.h2
                initial={{ x: -20 }}
                animate={{ x: 0, transition: { duration: 4, type: "spring" } }}
                className="mt-2 text-xl sm:text-2xl font-normal bg-gradient-to-r from-sky-600 to-indigo-400 bg-clip-text text-transparent"
              >
                یک توسعه دهنده وب
              </motion.h2>
              <p className="mt-6 text-md text-gray-700 dark:text-gray-400 max-w-150">
                برنامه‌نویس فرانت‌اند با تمرکز بر React ، Next.js علاقه‌مند به
                ساخت رابط‌های کاربری مدرن، سریع و مقیاس‌پذیر و داشبورد‌های
                تعاملی. طراحی UI/UX و اتصال فرانت‌اند به APIها. علاقه‌مند به
                ساخت پروژه‌های واقعی و نوشتن کد تمیز و قابل نگهداری.
              </p>

              {/* -- CTA button */}
              <div className="flex gap-4 mt-6">
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  dir="ltr"
                  href="https://github.com/micodex"
                  target="_blank"
                  rel="noopener noreferrer" // for security
                  className="
                  flex justify-center items-center py-3 px-5 bg-gradient-to-br rounded-xl
                from-sky-600 to-sky-300 hover:to-sky-400 text-white border-4
                dark:from-gray-900 dark:to-gray-700 dark:hover:to-gray-600
                  cursor-pointer border-sky-300 dark:border-gray-700
                  "
                >
                  <FaGithub size={24} className="mr-2" aria-label="GitHub" />
                  <span>مشاهده گیت‌هاب ↗</span>
                </motion.a>
              </div>
            </div>

            {/* social links and resume donwnload button */}
            <div className="z-1 flex flex-col sm:flex-row gap-8 items-center lg:mt-20 lg:mx-0 mt-8 mx-auto">
              <HeroSocial />

              {/* - download button */}
              <ResumeButton />
            </div>
          </div>

          {/* hero terminal component */}
          <div className="flex-grow hidden lg:block">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
