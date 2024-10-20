import React from "react";
import {
  FiHome,
  FiUser,
  FiFileText,
  FiBriefcase,
  FiPhone,
} from "react-icons/fi";

const MobileNav = ({ isOpen }) => {
  return (
    <ul
      className={`bg-white dark:bg-slate-900 w-full md:w-[80%] mx-auto mt-3 rounded-xl absolute left-0 right-0 z-50 transition-all duration-500 ease-in-out origin-top ${
        isOpen ? "scale-y-1" : "scale-y-0"
      }`}
    >
      <li className="text-slate-800 pl-3 py-2 dark:text-white">
        <a href="/" className="flex gap-1 text-sm px-2 py-2 rounded-lg">
          <span>
            <FiHome className="text-lg" />
          </span>
          Home
        </a>
        <a href="/about" className="flex gap-1 text-sm  px-2 py-2 rounded-lg">
          <span>
            <FiUser className="text-lg" />
          </span>
          About
        </a>
        <a href="/resume" className="flex gap-1 text-sm  px-2 py-2 rounded-lg">
          <span>
            <FiFileText className="text-lg" />
          </span>
          Resume
        </a>
        <a
          href="/portofolio"
          className="flex gap-1 text-sm  px-2 py-2 rounded-lg"
        >
          <span>
            <FiBriefcase className="text-lg" />
          </span>
          Portofolio
        </a>
        <a href="/contact" className="flex gap-1 text-sm  px-2 py-2 rounded-lg">
          <span>
            <FiPhone className="text-lg" />
          </span>
          Contact
        </a>
      </li>
    </ul>
  );
};

export default MobileNav;
