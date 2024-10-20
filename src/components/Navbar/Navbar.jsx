import { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiFileText,
  FiBriefcase,
  FiPhone,
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
} from "react-icons/fi";
import MobileNav from "./MobileNav";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleMode = () => {
    const element = document.documentElement;

    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      element.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      element.classList.add("light");
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [activeMenu, setActiveMenu] = useState("/");

  const handleClick = (path) => {
    setActiveMenu(path);
  };

  const menu = [
    {
      to: "/",
      icon: <FiHome />,
      nama: "Home",
    },
    {
      to: "/about",
      icon: <FiUser />,
      nama: "About",
    },
    {
      to: "/resume",
      icon: <FiFileText />,
      nama: "Resume",
    },
    {
      to: "/portofolio",
      icon: <FiBriefcase />,
      nama: "Portofolio",
    },
    {
      to: "/contact",
      icon: <FiPhone />,
      nama: "Contact",
    },
  ];

  const logoImg = theme == "dark" ? "logo2.png" : "logo1.png";

  return (
    <>
      <nav className="w-full px-5 md:px-0 md:w-[80%] mx-auto flex">
        <div className="logo">
          <img src={`./img/${logoImg}`} width={100} alt="logo" />
        </div>
        <ul className="ml-auto">
          <li className="hidden lg:flex gap-2 text-white ">
            {menu.map((item, key) => {
              return (
                <NavLink
                  key={key}
                  to={item.to}
                  onClick={() => handleClick(item.to)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex gap-1 text-sm bg-gradient-to-r from-blue-700 to-blue-500 px-2 py-2 rounded-lg"
                      : "flex gap-1 text-sm bg-white text-black dark:bg-slate-800 dark:text-white px-2 py-2 rounded-lg"
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.nama}
                </NavLink>
              );
            })}
          </li>
        </ul>

        <ul className="ml-auto lg:m-0">
          <li className="flex gap-2 text-white ml-2">
            <button
              type="button"
              onClick={toggleMode}
              className="flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-500 rounded-full p-2"
            >
              <span className="text-xl">
                {theme == "dark" ? <FiSun /> : <FiMoon />}
              </span>
            </button>
            <a
              href="#"
              className="flex lg:hidden items-center justify-center bg-gradient-to-r from-blue-700 to-blue-500 rounded-full p-2"
              onClick={toggleNavbar}
            >
              <span className="text-xl">{isOpen ? <FiX /> : <FiMenu />}</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <MobileNav isOpen={isOpen} />
    </>
  );
};

export default Navbar;
