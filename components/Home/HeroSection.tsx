import "@/styles/custom.css";
import { FaGithub } from "react-icons/fa";

// components
import HeroCode from "@/components/ui/HeroCode";
import HeroSocial from "../ui/HeroSocial";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-950 dark:to-gray-800"
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
            <div className="z-1 p-6 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-gray-950 dark:to-gray-900 ring-2 dark:ring-gray-900 ring-sky-200">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 ">
                Hello <span aria-hidden="true">👋</span> my name is Milad
              </h1>
              <h2 className="mt-1 text-2xl font-normal bg-gradient-to-r from-sky-600 to-rose-400 bg-clip-text text-transparent">
                I am a Full-stack Developer
              </h2>
              <p className="mt-4 text-md text-gray-700 dark:text-gray-400 max-w-150 ">
                I&apos;m a full-stack developer who thrives on bringing ideas to
                life, from the initial spark to a polished, user-friendly
                experience. With a keen eye for both elegant design and robust
                functionality, I build seamless web applications that deliver
                real value.
              </p>
              <div className="flex gap-4 mt-6">
                <a
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
                  <span>View Github ↗</span>
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
