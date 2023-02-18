import React, { FC } from "react";
import DLogo from "../assets/images/Dlogo.png";
import InLogo from "../assets/images/inlogo.png";

export const Footer: FC = () => {
  return (
    <div className="px-4 md:px-20 py-16 text-white md:mt-48">
      <div className="md:flex items-center justify-between">
        <span className="flex items-center mt-10 md:mt-0 md:gap-20  gap-36">
          <img src={DLogo} alt="d-logo" />
          <p className="w-[40%] md:w-fit">
            1345 Norma Eddy Ln, Halifax, NS B3J 1B6
          </p>
        </span>
        <span className="flex items-center mt-10 md:mt-0 md:gap-20  gap-36">
          <img src={InLogo} alt="d-logo" />
          <p className="w-[40%] md:w-fit">(555) 555-5555 contact@detect.ca</p>
        </span>
      </div>

      <hr className="mt-20 md:mt-16 mb-8" />

      <p className="text-center">&copy; 2023 Detect Atlantic</p>
    </div>
  );
};
