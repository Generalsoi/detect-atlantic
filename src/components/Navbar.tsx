import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Dlogo from "../assets/images/Dlogo.png";

type navLink = {
  index: number;
  name: string;
  link: string;
};

export const Navbar: FC = () => {
  const navLinks: navLink[] = [
    { index: 1, name: "Home", link: "/" },
    { index: 2, name: "Solutions", link: "/solutions" },
    { index: 3, name: "Learn", link: "/learn" },
    { index: 4, name: "Team", link: "/team" },
    { index: 5, name: "Contact", link: "/contact" },
  ];

  return (
    <div className="text-[#fff] md:flex items-start justify-between md:px-20 py-4">
      <img src={Dlogo} alt="d-logo" />

      <span className="flex flex-col">
        {navLinks.map((navlink) => (
          <NavLink
            key={navlink.index}
            to={navlink.link}
            className={({ isActive }) =>
              isActive
                ? "font-ibmPlexMono mt-0 border border-x-0 border-t-0 border-b-2 w-40 -translate-x-16 transition ease-in-out duration-500"
                : "font-ibmPlexMono mt-0 border border-x-0 border-t-0 border-b-2 border-white w-24"
            }
          >
            {navlink.name}
          </NavLink>
        ))}
      </span>
    </div>
  );
};
