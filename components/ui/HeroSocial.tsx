import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeroSocial = () => {
  return (
    <ul className="inline-flex space-x-4 p-1 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100  dark:from-gray-900 dark:to-gray-800 ring-4 ring-indigo-100 dark:ring-gray-800">
      <li className="flex text-3xl justify-center items-center w-14 h-14 rounded-full transition duration-100 dark:hover:bg-gray-700 cursor-pointer hover:text-sky-400 dark:text-gray-300">
        <a
          href="https://github.com/micodex"
          target="_blank"
          rel="noopener noreferrer" // for security and privacy
          aria-label="GitHub profile"
        >
          <FaGithub />
        </a>
      </li>
      <li className="flex text-3xl justify-center items-center w-14 h-14 rounded-full transition duration-150 dark:hover:bg-gray-700 cursor-pointer hover:text-sky-400 dark:text-gray-300">
        <a
          href="https://www.linkedin.com/in/milad-gharibi-9ba94835a/"
          target="_blank"
          rel="noopener noreferrer" // for security and privacy
          aria-label="linkedin profile"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="flex text-3xl justify-center items-center w-14 h-14 rounded-full transition duration-150 dark:hover:bg-gray-700 cursor-pointer hover:text-sky-400 dark:text-gray-300">
        <a
          href="https://codepen.io/mi_codex"
          target="_blank"
          rel="noopener noreferrer" // for security and privacy
          aria-label="codepen profile"
        >
          <FaCodepen />
        </a>
      </li>
      <li className="flex text-3xl justify-center items-center w-14 h-14 rounded-full transition duration-150 dark:hover:bg-gray-700 cursor-pointer hover:text-sky-400 dark:text-gray-300">
        <a
          href="https://www.instagram.com/web.script/"
          target="_blank"
          rel="noopener noreferrer" // for security and privacy
          aria-label="instagram profile"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default HeroSocial;
