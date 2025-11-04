import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 - Page not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-950 text-center overflow-hidden">
      <div className="relative w-full sm:max-w-sm max-w-xs aspect-square">
        <Image
          className="block object-cover"
          src="/tv-404.png"
          fill={true}
          alt="404 image"
        />
        <span className="absolute top-[50%] left-[30%] text-5xl font-bold text-gray-700 animate-bounce">
          404
        </span>
      </div>
      <div className="relative">
        <div className="z-0 absolute top-[2%] left-[5%] blur-3xl scale-150 opacity-40 w-84 h-33 rotate-40 rounded-full bg-cyan-400 dark:bg-cyan-800"></div>
        <h1 className="relative z-1 text-3xl font-bold mt-4 text-gray-800 dark:text-gray-200">
          صفحه پیدا نشد!
        </h1>
        <p className="relative z-1 text-lg mt-2 text-gray-600 dark:text-gray-400">
          صفحه مورد نظر وجود نداره یا جابه‌جا شده
        </p>
        <Link
          href="/"
          className="relative z-1 inline-block mt-10 px-6 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition focus:ring-4 focus:ring-sky-300"
        >
          برو به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
