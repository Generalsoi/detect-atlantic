import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Dlogo from "../assets/images/Dlogo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

type navLink = {
  index: number;
  name: string;
  link: string;
};

export const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navLinks: navLink[] = [
    { index: 1, name: "Home", link: "/" },
    { index: 2, name: "Solutions", link: "/solutions" },
    { index: 3, name: "Learn", link: "/learn" },
    { index: 4, name: "Team", link: "/team" },
    { index: 5, name: "Contact", link: "/contact" },
  ];

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <div className="text-[#fff] md:flex items-start justify-between px-4 md:px-20 py-4 fixed top-0 bg-[#000000] w-full z-20">
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

      <span className={`flex flex-col  ${open ? "block" : "hidden md:flex"}`}>
        {navLinks.map((navlink) => (
          <NavLink
            key={navlink.index}
            to={navlink.link}
            className={({ isActive }) =>
              isActive
                ? "font-ibmPlexMono mt-0 border border-x-0 border-t-0 border-b-2 md:w-40 md:-translate-x-16 transition duration-500 ease-in-out"
                : "font-ibmPlexMono mt-0 border border-x-0 border-t-0 border-b-2 border-white md:w-24"
            }
          >
            {navlink.name}
          </NavLink>
        ))}
      </span>
    </div>
  );
};
