import "@/styles/custom.css";
import { FaGithub } from "react-icons/fa";

// components
import HeroCode from "@/components/ui/HeroCode";
import HeroSocial from "../ui/HeroSocial";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-gradient-to-br from-sky-50 to-sky-50 dark:from-gray-950 dark:to-gray-900"
    >
      {/* grid background */}

      <div className="section-container">
        <div
          className="absolute z-0 inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
        bg-[size:50px_50px] opacity-40"
        />

        <div className="lg:flex gap-10 pb-20 pt-40">
          <div className="flex flex-col">
            <div className="z-1 px-6 py-12 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 ring-2 dark:ring-gray-800 ring-sky-200">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 ">
                سلام <span aria-hidden="true">👋</span> من میلاد هستم
              </h1>
              <h2 className="mt-2 text-2xl font-normal bg-gradient-to-r from-sky-600 to-violet-400 bg-clip-text text-transparent">
                یک توسعه دهنده فول-استک
              </h2>
              <p className="mt-4 text-md text-gray-700 dark:text-gray-400 max-w-150 ">
                من یک برنامه‌نویس فول استک هستم که عاشق تبدیل ایده‌ها به
                واقعیتم؛ از شروع کار تا ساختن یک تجربه کاربری بی‌نقص. چون هم
                برای طراحی زیبا و هم برای عملکرد قوی اهمیت قائلم و اپلیکیشن‌های
                وبی می‌سازم که واقعاً تأثیرگذارند.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  dir="ltr"
                  href="https://github.com/micodex"
                  target="_blank"
                  rel="noopener noreferrer" // for security
                  className="
                  flex justify-center items-center py-3 px-5 bg-gradient-to-br rounded-xl
                from-sky-600 to-sky-300 hover:to-sky-400 text-white ring-4
                dark:from-gray-900 dark:to-gray-700 dark:hover:to-gray-600 transition
                  cursor-pointer active:scale-96 duration-100 ring-sky-300 dark:ring-gray-700
                  "
                >
                  <FaGithub size={24} className="mr-2" aria-label="GitHub" />
                  <span>مشاهده گیت‌هاب ↗</span>
                </a>
              </div>
            </div>
            <div className="z-1 lg:mt-auto lg:mx-0 mt-8 mx-auto">
              <HeroSocial />
            </div>
          </div>
          <div className="flex-grow">
            <HeroCode />
          </div>
        </div>
      </div>
    </section>
  );
}
