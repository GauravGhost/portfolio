import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants/navLinks";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop < 100) {
          setActive("");
        }
      };

      const navbarHighlighter = () => {
        const sections = document.querySelectorAll("section[id]");

        sections.forEach((current) => {
          const sectionId = current.getAttribute("id");
          const sectionHeight = current.offsetHeight;
          const sectionTop =
            current.getBoundingClientRect().top - sectionHeight * 0.2;

          if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
            setActive(sectionId);
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", navbarHighlighter);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("scroll", navbarHighlighter);
      };
    } else {
      setActive("");
    }
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-30 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => location.pathname !== "/" && handleNavigation(`/#${nav.id}`)}
            >
              {location.pathname === "/" ? (
                <a href={`#${nav.id}`}>{nav.title}</a>
              ) : (
                <span>{nav.title}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            style={{ transition: "0.5s" }}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black border-gray-500 border-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                    if (location.pathname !== "/") {
                      handleNavigation(`/#${nav.id}`);
                    }
                  }}
                >
                  {location.pathname === "/" ? (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  ) : (
                    <span>{nav.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;