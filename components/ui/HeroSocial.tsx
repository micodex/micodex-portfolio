// icons
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import * as motion from "motion/react-client";

const socialLinks = [
  {
    id: 0,
    icon: <FaGithub />,
    href: "https://github.com/micodex",
    aria_label: "GitHub profile",
  },
  {
    id: 1,
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/milad-gharibi-9ba94835a/",
    aria_label: "linkedin profile",
  },
  {
    id: 2,
    icon: <FaCodepen />,
    href: "https://codepen.io/mi_codex",
    aria_label: "codepen profile",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    href: "https://instagram.com/web.script",
    aria_label: "instagram profile",
  },
];

const HeroSocial = () => {
  return (
    <motion.ul
      initial={{ scale: 0.9, skewX: 10 }}
      animate={{
        scale: 1,
        skewX: 0,
        transition: { duration: 2, ease: ["easeInOut"] },
      }}
      className="inline-flex space-x-4 p-1 rounded-full bg-gradient-to-r text-sky-900 ring-4 ring-sky-200 dark:ring-gray-800"
    >
      {socialLinks.map((link) => (
        <li
          key={link.id}
          className="flex text-3xl justify-center transition items-center w-14 h-14 rounded-full dark:hover:bg-gray-700 hover:bg-sky-100 cursor-pointer hover:text-sky-600 dark:text-gray-300"
        >
          <motion.a
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            href={link.href}
            target="_blank" // open in new tab
            rel="noopener noreferrer" // for security and privacy
            aria-label={link.aria_label}
          >
            {link.icon}
          </motion.a>
        </li>
      ))}
    </motion.ul>
  );
};

export default HeroSocial;
