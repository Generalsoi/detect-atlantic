import React, { FC } from "react";
import DLogo from "../assets/images/Dlogo.png";
import InLogo from "../assets/images/inlogo.png";
import MediumLogo from "../assets/images/mediumlogo.png";

export const Footer: FC = () => {
  return (
    <div className="px-4 md:px-20 py-16 text-white md:mt-[10rem]">
      <div className="md:flex items-center justify-between">
        <span className="md:flex items-center mt-10 md:mt-0 md:gap-20  gap-36">
          <p className="w-[90%] md:w-fit">
            1345 Norma Eddy Ln, Halifax, NS B3J 1B6
          </p>
          <img src={InLogo} alt="d-logo" className="mt-6 md:mt-0" />
        </span>
        <span className="md:flex items-center mt-10 md:mt-0 md:gap-20  gap-36">
          <img src={MediumLogo} alt="mediumlogo" className="mt-6 md:mt-0" />
          <p className="w-[40%] md:w-fit mt-6 md:mt-0">
            contact@detectinspections.com
          </p>
        </span>
      </div>

      <hr
        className="mt-20 md:mt-16 mb-8 bg-neutral-400"
        style={{ height: "0.1px" }}
      />

      <div className="flex items-center justify-between">
        <p className="text-center">&copy; 2023 Detect</p>
        <img src={DLogo} alt="d-logo" />
      </div>
    </div>
  );
};
