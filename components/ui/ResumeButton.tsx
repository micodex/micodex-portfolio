"use client";

import { CheckCircle, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const ResumeButton = () => {
  const [downloaded, setDownloaded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 2500);
  };

  // cleanup function
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.a
      href="/milad-gharibi-resume.pdf"
      target="_blank"
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="flex justify-center items-center gap-4 text-sky-900 dark:text-gray-100
        py-5 px-4 rounded-full ring-4 ring-sky-200 dark:ring-gray-800 hover:bg-sky-100 
        dark:hover:bg-gray-800 transition-colors active:scale-96 cursor-pointer group"
    >
      <span>دانلود رزومه</span>
      {downloaded ? (
        <CheckCircle className="text-teal-400" />
      ) : (
        <Download className="group-hover:text-sky-500 transition-colors" />
      )}
    </motion.a>
  );
};

export default ResumeButton;
