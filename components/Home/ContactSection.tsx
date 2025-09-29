import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="py-10 bg-gray-50 dark:bg-gray-950"
    >
      <div className="section-container">
        <div
          data-aos="fade-in"
          className="animated-background py-20 px-4 rounded-lg bg-linear-to-r/oklab from-indigo-300 to-teal-300"
        >
          <div className="text-center">
            <span className="block text-4xl">🎉</span>
            <h2
              id="contact-heading"
              className="mt-4 font-bold text-2xl sm:text-3xl text-gray-900"
            >
              I am ready to collaborate
            </h2>

            <p className="mt-1 text-gray-800">
              If you have a project that needs development, let&apos;s talk
              about it.
            </p>
            <div className="mt-6 block">
              <Link className="btn-primary" href="./contact">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
