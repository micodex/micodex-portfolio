"use client";

import { CheckCircle, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const ResumeButton = () => {
  const [downloaded, setDownloaded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (downloaded) return;

    setDownloaded(true);
    // reset state
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  // cleanup function
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // animations
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: { scale: 1.2, rotate: 360 },
    reset: { scale: 1, rotate: 0 },
  };

  return (
    <motion.a
      download
      href="/milad-gharibi-resume.pdf"
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="flex justify-center items-center gap-4 text-sky-900 dark:text-gray-100
        py-5 px-4 rounded-full ring-4 ring-sky-200 dark:ring-gray-800 hover:bg-sky-100 
        dark:hover:bg-gray-800 transition-colors active:scale-96 cursor-pointer group"
    >
      <span>دانلود رزومه</span>
      <motion.div
        variants={iconVariants}
        animate={downloaded ? "animate" : "reset"}
        transition={{ type: "spring", duration: 0.6 }}
      >
        {downloaded ? (
          <CheckCircle className="text-teal-400" />
        ) : (
          <Download className="group-hover:text-sky-500 transition-colors" />
        )}
      </motion.div>
    </motion.a>
  );
};

export default ResumeButton;
