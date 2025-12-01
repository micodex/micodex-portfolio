// icons
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import * as motion from "motion/react-client";

const socialLinks = [
  {
    id: 0,
    icon: FaGithub,
    href: "https://github.com/micodex",
    aria_label: "GitHub profile",
  },
  {
    id: 1,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/milad-gharibi-9ba94835a/",
    aria_label: "linkedin profile",
  },
  {
    id: 2,
    icon: FaCodepen,
    href: "https://codepen.io/mi_codex",
    aria_label: "codepen profile",
  },
  {
    id: 3,
    icon: FaInstagram,
    href: "https://instagram.com/web.script",
    aria_label: "instagram profile",
  },
];

const HeroSocial = () => {
  return (
    <motion.ul
      initial={{ scale: 0.8, skewX: 10 }}
      animate={{
        scale: 1,
        skewX: 0,
        transition: { duration: 2, ease: ["easeInOut"] },
      }}
      className="inline-flex gap-6 p-2 rounded-full bg-gradient-to-r text-sky-900 ring-4 ring-sky-200 dark:ring-gray-800"
    >
      {socialLinks.map(({ id, href, aria_label, icon: Icon }) => (
        <motion.li
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.95 }}
          key={id}
          className="flex text-3xl justify-center items-center w-12 h-12 rounded-full dark:hover:bg-gray-700 hover:bg-sky-100 cursor-pointer dark:text-gray-300"
        >
          <motion.a
            href={href}
            target="_blank" // open in new tab
            rel="noopener noreferrer" // for security and privacy
            aria-label={aria_label}
          >
            <Icon />
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default HeroSocial;
