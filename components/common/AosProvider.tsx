// components/AosProvider.tsx
"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AosProviderProps {
  children: React.ReactNode;
  config?: AOS.AosOptions; // Optional prop to override default config
}

const AosProvider: React.FC<AosProviderProps> = ({ children, config }) => {
  const [isAosInitialized, setIsAosInitialized] = useState(false);

  // Initialize AOS only once when the component mounts
  useEffect(() => {
    AOS.init({
      // Default configuration
      duration: 1200,
      easing: "ease-out",
      once: false,
      ...config, // Override with any passed-in config
    });
    setIsAosInitialized(true);
  }, [config]);

  // Use a second useEffect to handle dynamic content
  // This will run on every re-render of its children
  useEffect(() => {
    if (isAosInitialized) {
      AOS.refreshHard();
    }
  });

  return <>{children}</>;
};

export default AosProvider;
