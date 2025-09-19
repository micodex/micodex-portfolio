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
      const response = await fetch("http://localhost:3000/api/contact", {
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
    } catch (error) {
      setStatus("error");
      setErrorMessage(String(error));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl max-w-[520px] mx-auto border dark:border-gray-900">
      <h2 className="text-2xl text-gray-800 dark:text-gray-200 mb-6">
        Send me a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-gray-700 dark:text-gray-400 font-medium mb-1 ml-1"
          >
            Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full rounded-md px-4 py-3 outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-sky-500"
            id="name"
            placeholder="e.g. John"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 dark:text-gray-400 font-medium mb-1 ml-1"
          >
            Email
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
            Subject
          </label>
          <input
            type="text"
            className="w-full rounded-md px-4 py-3 outline-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-sky-500"
            id="subject"
            placeholder="e.g. collaboration"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm text-gray-700 dark:text-gray-400 font-medium mb-1 ml-1"
          >
            Message
          </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full outline-none rounded-md px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-800 focus:ring-2 focus:ring-sky-500"
            id="message"
            placeholder="your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-3 w-full text-white rounded-md bg-gradient-to-br from-sky-500 dark:from-indigo-500 dark:to-sky-800 to-indigo-500 hover:to-indigo-400 dark:hover:to-sky-600 transition-colors cursor-pointer"
        >
          {status === "loading" ? "Sending Message..." : "Send Message"}
        </button>
      </form>
      {status === "success" && (
        <p
          className="mt-4 text-center text-green-600 font-semibold"
          aria-live="polite"
        >
          Thank you! Your message has been sent.
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
