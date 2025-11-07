"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Handle the form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");

      // Clear the form after a successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong.");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-8 px-4 sm:px-8 rounded-xl shadow-xl max-w-[520px] mx-auto border dark:border-gray-900">
      <h2 className="text-2xl text-gray-800 dark:text-gray-200 mb-6">
        یک پیام بفرستید
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-gray-700 dark:text-gray-400 font-medium mb-1 ml-1"
          >
            نام
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full rounded-md px-4 py-3 outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-sky-500"
            id="name"
            placeholder="میلاد"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 dark:text-gray-400 font-medium mb-1 ml-1"
          >
            ایمیل
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-full rounded-md px-4 py-3 outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-sky-500"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm text-gray-700 dark:text-gray-400 font-medium mb-1 ml-1"
          >
            موضوع
          </label>
          <input
            type="text"
            className="w-full rounded-md px-4 py-3 outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-sky-500"
            id="subject"
            placeholder="همکاری"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm text-gray-700 dark:text-gray-400 font-medium mb-1 ml-1"
          >
            پیام
          </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full outline-none rounded-md px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-sky-500"
            id="message"
            placeholder="پیام شما..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary py-4 w-full justify-center cursor-pointer"
        >
          {status === "loading" ? "در حال ارسال..." : "ارسال پیام"}
        </button>
      </form>
      {status === "success" && (
        <p
          className="mt-4 text-center text-green-600 font-semibold"
          aria-live="polite"
        >
          ممنون! پیام شما با موفقیت ارسال شد
        </p>
      )}
      {status === "error" && (
        <p
          className="mt-4 text-center text-red-600 font-semibold"
          aria-live="polite"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
