import Link from "next/link";
import * as motion from "motion/react-client";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="py-10 bg-gray-50 dark:bg-gray-950"
    >
      <div className="section-container">
        <div className="animated-background py-20 px-4 rounded-4xl bg-linear-to-b/oklch from-gray-50 to-indigo-200 dark:from-sky-800 dark:to-gray-950">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0.2, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.5, once: true }}
            >
              <span role="img" className="block text-4xl">
                🎉
              </span>
              <h2
                id="contact-heading"
                className="mt-3 font-bold text-2xl sm:text-4xl text-sky-950 dark:text-gray-200"
              >
                آماده همکاری هستم
              </h2>

              <p className="mt-4 text-gray-800 dark:text-gray-300">
                اگه پروژه‌ای داری که نیاز به توسعه داره، بیا در موردش صحبت کنیم.
              </p>
              <div className="mt-6 block">
                <Link className="btn-primary rounded-full" href="./contact">
                  تماس با من
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
