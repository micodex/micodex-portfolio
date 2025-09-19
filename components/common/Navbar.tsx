"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RiGeminiLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed z-2 top-4 left-0 right-0 ">
      <div className="section-container">
        <div
          className="
            relative py-5 px-6 flex justify-between rounded-full dark:shadow-none
            bg-gradient-to-r from-gray-100/10 via-white/20 to-gray-100/10 dark:bg-black/60
           dark:ring-black/20 ring-gray-100 ring-2 backdrop-blur-lg
           "
        >
          {/* logo */}
          <Link className=" flex-1 flex items-center space-x-2" href="/">
            <RiGeminiLine className="text-sky-500" size={22} />
            <span className="font-semibold bg-gradient-to-r from-sky-600 to-violet-400 bg-clip-text text-transparent">
              micodex
            </span>
          </Link>
          {/* navigation links */}
          <ul className="flex-1 hidden md:flex justify-center space-x-6 *:hover:text-sky-500 *:transition *:duration-150">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* navigation buttons */}
          <div className=" flex-1 flex justify-end space-x-4">
            <button
              onClick={toggleTheme}
              className="cursor-pointer hover:text-sky-500 transition duration-150"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MdOutlineDarkMode size={22} />
              ) : (
                <MdOutlineLightMode size={22} />
              )}
            </button>
            <button
              className="md:hidden cursor-pointer hover:text-sky-500 transition duration-150"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <RxCross2 size={22} />
              ) : (
                <RxHamburgerMenu size={22} />
              )}
            </button>
          </div>
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <ul
              className={`
            md:hidden absolute left-0 right-0 mt-14 px-6 py-4 rounded-xl space-y-4 dark:bg-black/90 bg-white/90 backdrop-blur-lg ring-2 ring-sky-100 dark:ring-gray-800 *:hover:text-sky-500 *:transition *:duration-150 transition-all duration-300
            ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100 py-4"
                : "max-h-0 opacity-0 py-0"
            }
          `}
            >
              <li>
                <Link href="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
