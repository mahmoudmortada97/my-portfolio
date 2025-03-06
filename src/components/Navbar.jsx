import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-[25] duration-[350ms] ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
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
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Mahmoud Mortada
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-5">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/*<li>*/}
          {/*  <a*/}
          {/*    href="https://github.com/ahmadmamdouh-10/my-portfolio"*/}
          {/*    className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"*/}
          {/*    target="_blank"*/}
          {/*  >*/}
          {/*    Source Code*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 right-0 bg-black  mx-10 min-w-[140px] rounded-lg`}
          >
            <ul className="flex flex-col justify-start items-start gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } `}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              
              {/*<li>*/}
              {/*  <a*/}
              {/*    href="https://github.com/elmotasembelah/my-portfolio"*/}
              {/*    className="text-secondary"*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    Source Code*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
