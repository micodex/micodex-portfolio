import { RiGeminiLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-20 border-t-2 border-t-gray-800">
      <div className="section-container">
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4 px-4">
            <div className="flex items-center space-x-2 text-xl">
              <RiGeminiLine className="text-sky-400" />
              <h3 className="font-bold bg-gradient-to-r from-sky-600 to-violet-400 bg-clip-text text-transparent poppins-font">
                micodex
              </h3>
            </div>
            <p className="text-gray-400">
              یک توسعه‌دهنده‌ی پرشور که تجربیات دیجیتالی زیبا، کاربردی و
              کاربرپسند خلق می‌کنه
            </p>
            <div className="flex space-x-4 text-xl *:hover:text-sky-500">
              <a target="_blank" href="https://github.com/micodex">
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/milad-gharibi-9ba94835a/"
              >
                <FaLinkedin />
              </a>
              <a target="_blank" href="https://codepen.io/mi_codex">
                <FaCodepen />
              </a>
              <a target="_blank" href="https://www.instagram.com/web.script/">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="space-y-4 px-4">
            <h3 className="text-xl font-bold text-gray-100">صفحه‌ها 📄</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  پروژه‌ها
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  بلاگ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  تماس
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 px-4">
            <h3 className="text-xl font-bold text-white">خدمات ⭐</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  توسعه وب
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  طراحی رابط کاربری
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  وب اپلیکیشن
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-gray-400 hover:text-sky-400"
                >
                  مشاوره
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 px-4">
            <h3 className="text-xl font-bold text-white"> تماس 🤝</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <IoMailOutline className="text-xl text-gray-200" />
                <span className="text-sm text-gray-400">
                  hello@devportfolio.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CiLocationOn className="text-xl text-gray-200" />
                <span className="text-gray-400">ایران، اصفهان</span>
              </div>
            </div>
          </div>
        </div>

        <div
          dir="ltr"
          className="px-4 border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between poppins-font"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <span className="block">
              &copy; 2025 micodex. All rights reserved.
            </span>
            <span className="block mt-2">Pixels & Logic by Milad</span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-sky-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-sky-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-sky-400 text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
