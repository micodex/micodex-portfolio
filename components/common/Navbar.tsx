"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
// icons
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiGeminiLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  // function to close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const pathname = usePathname(); // get current pathname
  const links = [
    { label: "خانه", href: "/" },
    { label: "پروژه‌ها", href: "/projects" },
    { label: "وبلاگ", href: "/blog" },
    { label: "تماس", href: "/contact" },
  ];

  return (
    <nav dir="ltr" className="fixed z-2 top-4 left-0 right-0">
      <div className="section-container">
        <div
          className="
            relative py-5 px-6 flex justify-between rounded-full
            bg-gradient-to-r from-gray-100/9 via-white/15 to-gray-100/9 dark:bg-black/60
            ring-4 dark:ring-black/20 ring-white/50 backdrop-blur-lg
           "
        >
          {/* logo */}
          <Link
            className="group flex-1 flex items-center gap-2 poppins-font"
            href="/"
          >
            <RiGeminiLine
              className="text-sky-500 group-hover:text-violet-400 transition-colors"
              size={22}
            />
            <span className="text-md font-bold bg-gradient-to-r from-sky-600 to-violet-400 bg-clip-text text-transparent hover:to-sky-600 hover:from-violet-400 transition-colors">
              micodex
            </span>
          </Link>
          {/* navigation links */}
          <ul
            dir="rtl"
            className="flex-1 hidden md:flex justify-center space-x-8"
          >
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`hover:text-sky-500 transition-colors ${
                    pathname === href ? "text-sky-500 font-bold" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* navigation buttons */}
          <div className="flex-1 flex justify-end gap-3">
            <button
              onClick={toggleTheme}
              className="cursor-pointer hover:text-sky-500 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <MdOutlineDarkMode size={22} />
              ) : (
                <MdOutlineLightMode size={22} />
              )}
            </button>
            <button
              className="md:hidden cursor-pointer hover:text-sky-500 transition-colors"
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
              className={`mobile-menu-fadein text-center text-lg
                md:hidden absolute left-0 right-0 mt-14 px-6 py-12 space-y-8 rounded-xl
                dark:bg-black/90 bg-white/90 backdrop-blur-lg ring-2 ring-sky-100 dark:ring-gray-800
              `} // backdrop effect?
            >
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => closeMobileMenu()}
                    className={`p-2 hover:text-sky-500 transition-colors ${
                      pathname === href ? "text-sky-500 font-bold" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
