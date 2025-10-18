"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Lock } from "lucide-react";
import { User } from "lucide-react";
import { Sparkle } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // handle form submition
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("کلمه عبور معتبر نیست");
        const data = await res.json();
        console.error(data.error);
      }
    } catch (error) {
      console.error("Login error: ", error);
      setError("لطفا دوباره امتحان کنید");
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-neutral-950 min-h-screen">
      <div className="section-container py-40 flex justify-center items-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="p-6 w-md max-w-md rounded-xl bg-whitedark:bg-neutral-900 shadow-xl shadow-slate-200 border-2 border-gray-200 dark:border-stone-900 dark:shadow-none"
        >
          {/* logo */}
          <Sparkle className="text-sky-500 text-center animate-pulse" />
          <h1 className="text-2xl text-center font-bold">ورود به پنل </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm text-center">
            لطفا نام کاربری و کلمه عبور را وارد کنید
          </p>
          <div className="relative mt-16">
            <label
              className="absolute -top-6 right-3 text-sm text-neutral-600 dark:text-gray-400"
              htmlFor="username"
            >
              نام کاربری
            </label>
            <input
              id="username"
              type="text"
              placeholder="Admin"
              className="input-style pr-8 dark:bg-neutral-800  dark:border-neutral-700"
            />
            {/* icon */}
            <User className="absolute w-4 h-4 top-3.5 right-3 text-gray-500" />
          </div>
          <div className="relative mt-12">
            <label
              className="absolute -top-6 right-3 text-sm text-neutral-600 dark:text-gray-400"
              htmlFor="password"
            >
              کلمه عبور
            </label>
            <input
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input-style pr-8 dark:bg-neutral-800 dark:border-neutral-700"
              type="password"
              placeholder="******"
            />
            {error && (
              <span className="absolute -bottom-6 right-2 text-sm text-red-500">
                {error}
              </span>
            )}
            {/* icon */}
            <Lock className="absolute w-4 h-4 top-3.5 right-3 text-gray-500" />
          </div>
          <div className="mt-12">
            <button type="submit" className="btn-primary rounded-xl w-full">
              ورود
            </button>
          </div>
          <span className="block mt-16 text-sm text-center opacity-40">
            ورود فقط برای ادمین
          </span>
        </form>
      </div>
    </div>
  );
}
