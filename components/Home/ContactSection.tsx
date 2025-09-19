import Button from "../ui/Button";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="py-10 bg-gray-50 dark:bg-gray-950"
    >
      <div className="section-container">
        <div
          data-aos="fade-in"
          className="py-20 px-10 rounded-lg bg-linear-to-r/oklab from-indigo-300 to-teal-300"
        >
          <div className="text-center space-y-3">
            <h2
              id="contact-heading"
              className="
              font-bold text-3xl text-gray-900"
            >
              I am ready to collaborate 🎉
            </h2>
            <p className="text-gray-800">
              If you have a project that needs development, let&apos;s talk
              about it.
            </p>
            <div className="flex justify-center mt-2">
              <Button href="./contact">Contact me</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
