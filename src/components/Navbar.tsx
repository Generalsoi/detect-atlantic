import React, { FC, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Dlogo from "../assets/images/Dlogo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

type sublink = {
  name: string;
  sublink: string;
};

type navLink = {
  index: number;
  name: string;
  link: string;
  sublinks: sublink[];
};

export const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdown, setDropDown] = useState<boolean>(false);

  const navLinks: navLink[] = [
    { index: 1, name: "Home", link: "/", sublinks: [] },
    { index: 2, name: "About", link: "/about", sublinks: [] },
    {
      index: 3,
      name: "Solutions",
      link: "/solutions",
      sublinks: [
        { name: "Power", sublink: "/solutions" },
        { name: "Energy", sublink: "solutions/energy" },
        { name: "Platform", sublink: "solutions/platform" },
        { name: "On Demand", sublink: "solutions/ondemand" },
      ],
    },
    { index: 4, name: "Contact", link: "/contact", sublinks: [] },
  ];

  const handleClick = (): void => {
    setOpen(!open);
  };

  const handleDropDown = (id: number): void => {
    if (id === 3) {
      setDropDown(!dropdown);
    }
    return;
  };

  // const subMenuAnimate = {
  //   enter: {
  //     opacity: 1,
  //     rotateX: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 10,
  //     },
  //     display: "block",
  //   },
  //   exit: {
  //     opacity: 0,
  //     rotateX: -15,
  //     transition: {
  //       type: "spring",
  //       stiffness: 10,
  //       delay: 0.3,
  //     },
  //     transitionEnd: {
  //       display: "none",
  //     },
  //   },
  // };

  return (
    <div className="text-[#fff] md:flex items-start justify-between px-4 md:px-20 py-4 fixed top-0 bg-[#000000] w-full z-20 transition-all ease-in-out duration-300">
      <img src={Dlogo} alt="d-logo" />

      <span
        className={`md:hidden text-3xl font-extrabold absolute top-6 right-4 transition-all duration-300`}
        onClick={handleClick}
      >
        {open ? (
          <AiOutlineCloseCircle className="text-white" />
        ) : (
          <RxHamburgerMenu />
        )}
      </span>

      <span
        className={`flex flex-col  ${open ? "block h-fit" : "hidden md:flex"}`}
      >
        {navLinks.map((navlink) => (
          <NavLink
            key={navlink.index}
            to={navlink.link}
            className={({ isActive }) =>
              isActive
                ? "font-ibmPlexMono mt-16 md:mt-0 border border-x-0 border-t-0 border-b-1 md:w-40 md:-translate-x-16 transition duration-500 ease-in-out text-md md:text-xs"
                : "font-ibmPlexMono mt-16 md:mt-0 border border-x-0 border-t-0 border-b-1 border-white md:w-24 text-md md:text-xs"
            }
          >
            <span
              onClick={() => handleDropDown(navlink.index)}
              className="flex items-center gap-1"
            >
              {navlink.name}{" "}
              {navlink.index === 3 && (
                <IoMdArrowDropdown className="text-[#FF6108]" />
              )}
            </span>
            {navlink.index === 3 && dropdown && (
              <div className="flex flex-col ml-10">
                {navlink.sublinks.map((sublink) => (
                  <Link to={sublink.sublink} className="mt-4 md:mt-1">
                    {sublink.name}
                  </Link>
                ))}
              </div>
            )}
          </NavLink>
        ))}
      </span>
    </div>
  );
};
