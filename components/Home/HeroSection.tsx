import "@/styles/custom.css";
import { FaGithub } from "react-icons/fa";
import * as motion from "motion/react-client";

// components
import HeroSocial from "../ui/HeroSocial";
import HeroTerminal from "../ui/HeroTerminal";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-sky-50 dark:bg-gray-900"
    >
      {/* grid background */}

      <div className="section-container">
        {/* <div
          className="absolute z-0 inset-0 h-full w-full 
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
        bg-[size:50px_50px] opacity-40"
        /> */}
        <div
          className="absolute inset-0 h-full w-full opacity-70
            bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
            bg-[size:30px_30px]"
        ></div>

        <div className="lg:flex gap-10 pb-20 pt-40">
          <div className="flex flex-col">
            <div className="z-1 px-6 py-6 rounded-xl bg-sky-100/30 dark:bg-gray-800/20 ring-2 dark:ring-gray-800 ring-sky-200">
              <motion.h1
                initial={{ x: -20 }}
                animate={{ x: 0, transition: { duration: 3, type: "spring" } }}
                className="text-4xl font-bold text-gray-800 dark:text-gray-200 "
              >
                سلام <span aria-hidden="true">👋</span> من میلاد هستم
              </motion.h1>
              <motion.h2
                initial={{ x: -20 }}
                animate={{ x: 0, transition: { duration: 4, type: "spring" } }}
                className="mt-2 text-2xl font-normal bg-gradient-to-r from-sky-600 to-indigo-400 bg-clip-text text-transparent"
              >
                یک توسعه دهنده وب
              </motion.h2>
              <p className="mt-6 text-md text-gray-700 dark:text-gray-400 max-w-150">
                تمرکز من روی طراحی تمیز و تجربه کاربری هوشمنده و با استفاده از
                تکنولوژی‌های مدرن اپلیکیشن‌هایی می‌سازم که هم زیبا باشن و هم
                سریع. من به جزئیات توجه زیادی دارم، چون معتقدم هر پیکسل و هر خط
                کد می‌تونه تجربه کاربر رو تغییر بده. هدفم ساخت محصولاتی‌ست که
                نه‌تنها درست کار کنن، بلکه حس خوبی به کاربر بدن.
              </p>

              {/* CTA button */}
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
            <div className="z-1 lg:mt-20 lg:mx-0 mt-8 mx-auto">
              <HeroSocial />
            </div>
          </div>
          <div className="flex-grow hidden lg:block">
            {/* <HeroCode /> */}
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
