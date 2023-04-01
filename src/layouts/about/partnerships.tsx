import React, { FC } from "react";
import DalLogo from "../../assets/images/dallogo.png";
import IdeaHub from "../../assets/images/ideahub.png";
import { motion } from "framer-motion";
import CausLogo from "../../assets/images/causlogo.png";
import PilotWaveHoldingsLogo from "../../assets/images/pilotwaveholdings.png";

export const Partnerships: FC = () => {
  return (
    <motion.div
      className="px-4 md:px-20 mt-20 mb-10 md:my-24"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 20 }}
    >
      <div className="px-4 lg:px-60 py-10 ">
        <h4 className="text-3xl md:text-5xl font-bold">Partnerships</h4>

        <span className="hidden md:flex items-center justify-center flex-wrap md:flex-nowrap gap-16 md:gap-20 mt-20">
          <a href="https://dalideahub.ca/" target="_blank" rel="noreferrer">
            <img
              src={IdeaHub}
              alt="idea-hub logo"
              className="w-[50%] md:w-fit"
            />
          </a>
          <a href="https://www.dal.ca/" target="_blank" rel="noreferrer">
            <img
              src={DalLogo}
              alt="dal university logo"
              className="w-[50%] md:w-fit"
            />
          </a>
          <a href="https://www.causltd.com/" target="_blank" rel="noreferrer">
            <img src={CausLogo} alt="causlogo" />
          </a>
          <a
            href="https://www.pilotwaveholdings.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={PilotWaveHoldingsLogo}
              alt="pilotwaveholdingslogo"
              className="w-[50%] md:w-fit"
            />
          </a>
        </span>
        <span className="flex flex-col md:hidden items-center justify-center gap-16 mt-20">
          <span className="flex items-center justify-between w-full">
            <a href="https://dalideahub.ca/" target="_blank" rel="noreferrer">
              <img src={IdeaHub} alt="idea-hub logo" className="w-[80%]" />
            </a>
            <a href="https://www.dal.ca/" target="_blank" rel="noreferrer">
              <img src={DalLogo} alt="dal university logo" className="" />
            </a>
          </span>
          <span className="flex items-center justify-between w-full">
            <a href="https://www.causltd.com/" target="_blank" rel="noreferrer">
              <img src={CausLogo} alt="causlogo" className="" />
            </a>
            <a
              href="https://www.pilotwaveholdings.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PilotWaveHoldingsLogo}
                alt="pilotwaveholdingslogo"
                className=""
              />
            </a>
          </span>
        </span>
      </div>
    </motion.div>
  );
};
