import Link from "next/link";
import * as motion from "motion/react-client";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="py-10 bg-gray-50 dark:bg-gray-950"
    >
      <div className="section-container">
        <div className="animated-background py-20 px-4 rounded-lg bg-linear-to-r/oklab from-indigo-300 to-teal-300">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ amount: 0.5 }}
            >
              <span className="block text-4xl">🎉</span>
              <h2
                id="contact-heading"
                className="mt-4 font-bold text-2xl sm:text-3xl text-sky-950"
              >
                آماده همکاری هستم
              </h2>

              <p className="mt-1 text-gray-800">
                اگه پروژه‌ای داری که نیاز به توسعه داره، بیا در موردش صحبت کنیم.
              </p>
              <div className="mt-6 block">
                <Link className="btn-primary" href="./contact">
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
