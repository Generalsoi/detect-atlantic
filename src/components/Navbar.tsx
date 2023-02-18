import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Dlogo from "../assets/images/Dlogo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

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

  const navLinks: navLink[] = [
    { index: 1, name: "Home", link: "/", sublinks: [] },
    { index: 2, name: "About", link: "/about", sublinks: [] },
    {
      index: 3,
      name: "Solutions",
      link: "/solutions",
      sublinks: [
        { name: "Power", sublink: "/power" },
        { name: "Energy", sublink: "/energy" },
        { name: "Platform", sublink: "/platform" },
        { name: "On Demand", sublink: "/ondemand" },
      ],
    },
    { index: 4, name: "Contact", link: "/contact", sublinks: [] },
  ];

  const handleClick = (): void => {
    setOpen(!open);
  };

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
        className={`flex flex-col  ${open ? "block h-96" : "hidden md:flex"}`}
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
            {navlink.name}
            {}
          </NavLink>
        ))}
      </span>
    </div>
  );
};
