import React, { FC, useState } from "react";
import { Link, Outlet, useMatch } from "react-router-dom";
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
  index?: number;
  name: string;
  link: string;
  sublinks: sublink[];
};

export const NavLink: FC<navLink> = ({ name, link, sublinks }) => {
  const [dropdown, setDropDown] = useState<boolean>(false);
  const isActive = useMatch(link + "/*");
  const handleDropDown = (): void => {
    // setDropDown(!dropdown);
    if (sublinks.length) {
      setDropDown(!dropdown);
    }
  };

  return (
    <Link
      to={sublinks.length ? "#" : link}
      className={
        isActive
          ? "font-ibmPlexMono mt-16 md:mt-0 border border-x-0 border-t-0 border-neutral-500 w-full md:w-44 md:-translate-x-16 transition duration-500 ease-in-out text-md md:text-xs"
          : "font-ibmPlexMono mt-16 md:mt-0 border border-x-0 border-t-0 border-neutral-500 w-full md:w-28 text-md md:text-xs"
      }
      style={{ borderBottomWidth: "0.1px" }}
    >
      <span
        onClick={handleDropDown}
        className="flex items-center gap-1 relative"
      >
        {name}{" "}
        {!!sublinks.length && <IoMdArrowDropdown className="text-[#FF6108]" />}
      </span>
      {sublinks.length && dropdown ? (
        <motion.div
          className="flex flex-col ml-10"
          initial={{ height: "100%", opacity: 0 }}
          animate={
            dropdown
              ? {
                  height: "100%",
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 20 },
                }
              : {
                  opacity: 0,
                  y: "100px",
                  transition: { type: "spring", stiffness: 20 },
                }
          }
          exit={{ height: "100%" }}
        >
          {sublinks.map((sublink, index) => (
            <Link key={index} to={sublink.sublink} className="mt-4 md:mt-1">
              {sublink.name}
            </Link>
          ))}
        </motion.div>
      ) : null}
    </Link>
  );
};

export const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [activeSolutions, setActiveSolutions] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  const navLinks: navLink[] = [
    { index: 1, name: "Home", link: "/", sublinks: [] },
    { index: 2, name: "About", link: "/about", sublinks: [] },
    {
      index: 3,
      name: "Our Services",
      link: "/solutions",
      sublinks: [
        { name: "Power", sublink: "/solutions/powerlineinspectionservices" },
        {
          name: "Energy",
          sublink: "/solutions/solarandwindinspectionservices",
        },
        { name: "Platform", sublink: "/solutions/aisoftware" },
        { name: "On Demand", sublink: "/solutions/ondemand" },
      ],
    },
    { index: 4, name: "Contact", link: "/contact", sublinks: [] },
  ];

  // const subLinks: sublink[] = [
  //   { name: "Power", sublink: "/solutions" },
  //   { name: "Energy", sublink: "solutions/energy" },
  //   { name: "Platform", sublink: "solutions/platform" },
  //   { name: "On Demand", sublink: "solutions/ondemand" },
  // ];

  return (
    <div className="text-[#fff] md:flex items-start justify-between px-4 md:px-20 py-4 fixed top-0 bg-[#000000] w-full z-20 transition-all ease-in-out duration-300">
      <Link to="/">
        <img src={Dlogo} alt="d-logo" />
      </Link>

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
        {navLinks.map(({ name, index, link, sublinks }) => (
          <NavLink key={index} name={name} link={link} sublinks={sublinks} />
        ))}
      </span>
      <Outlet />
    </div>
  );
};
