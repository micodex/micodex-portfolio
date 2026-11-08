import { FaGithub } from "react-icons/fa";

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
            <div className="relative z-1 px-6 py-8 rounded-xl bg-sky-100/30 dark:bg-gray-800/20 border-4 dark:border-gray-800 border-sky-200">
              <motion.h1
                initial={{ x: -40 }}
                animate={{ x: 0, transition: { duration: 3, type: "spring" } }}
                className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-200"
              >
                سلام{" "}
                <motion.span
                  role="img"
                  aria-label="Hello and welcome"
                  style={{
                    display: "inline-block",
                    fontSize: "3rem",
                    cursor: "pointer",
                    // Anchors the pivot point to the bottom-right/wrist area
                    transformOrigin: "70% 70%",
                  }}
                  animate={{
                    rotate: [0, 20, -10, 20, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: 0,
                    delay: 1,
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                >
                  👋
                </motion.span>{" "}
                میلاد هستم
              </motion.h1>
              <motion.h2
                initial={{ x: -20 }}
                animate={{ x: 0, transition: { duration: 4, type: "spring" } }}
                className="mt-2 inline-block text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-400"
              >
                توسعه دهنده وب
              </motion.h2>
              <p className="mt-6 text-md text-gray-700 dark:text-gray-400 max-w-150">
                من یک توسعه‌دهنده وب خودآموز هستم که به ساخت اپلیکیشن‌های وب
                مدرن، واکنش‌گرا و کاربرپسند علاقه دارم. تمرکز اصلی من بر
                TypeScript، React و Next.js است و در کنار آن، مهارت‌هایم را در
                زمینه توسعه فول‌استک و فناوری‌های بک‌اند و اوتوماسیون هوش‌مصنوعی
                برای کسب و کار ها، گسترش می‌دهم.
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
