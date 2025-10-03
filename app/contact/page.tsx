import ContactForm from "./ContactForm";

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "micodex | contact",
  description:
    "Have a project in mind? Let's collaborate! Send me a message and I'll get back to you soon.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <header className="relative overflow-hidden">
        {/* <div
          className="absolute inset-0 h-full w-full opacity-50
        bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
        bg-[size:10px_10px]"
        ></div> */}
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
        </div>
      </header>

      <section className="section-container py-20">
        {/* contact form */}
        <ContactForm />
      </section>
    </div>
  );
}
