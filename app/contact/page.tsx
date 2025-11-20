import ContactForm from "./ContactForm";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import * as motion from "motion/react-client";

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "تماس | micodex",
  description:
    "Have a project in mind? Let's collaborate! Send me a message and I'll get back to you soon.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
      <header className="relative">
        <div className="pb-20 pt-40 relative section-container">
          {/* blur background */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-50 w-90 h-80 bg-pink-400 rounded-full blur-3xl opacity-20"
          ></div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-70 w-52 h-52 bg-blue-400 rounded-full blur-3xl opacity-20"
          ></div>

          <div className="text-center space-y-3">
            <h1 className="font-bold text-4xl text-gray-800 dark:text-gray-100">
              تماس با من
            </h1>
            <p className="max-w-2xl opacity-60 mx-auto">
              اگه پروژه‌ای در ذهن دارید یا می‌خواهید همکاری کنید، می‌تونید با من
              تماس بگیرید
            </p>
          </div>

          {/* telegram and whatsapp contact chat links */}
          <ul className="mt-6 flex gap-6 justify-center items-center text-4xl text-gray-700 dark:text-gray-300 cursor-pointer">
            <motion.li
              className="hover:text-green-500 transition-colors duration-100"
              initial={{ scale: 0.1 }}
              animate={{
                scale: 1,
                transition: { type: "spring", bounce: 0.4 },
              }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </motion.li>
            <motion.li
              className="hover:text-sky-500 transition-colors duration-100"
              initial={{ scale: 0.1 }}
              animate={{
                scale: 1,
                transition: { type: "spring", bounce: 0.4 },
              }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.8 }}
            >
              <a
                href="https://t.me/heyitsmg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </motion.li>
          </ul>
        </div>
      </header>

      <section className="section-container pt-10 pb-20">
        {/* contact form */}
        <ContactForm />
      </section>
    </div>
  );
}
