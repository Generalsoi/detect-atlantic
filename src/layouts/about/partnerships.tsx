import React, { FC } from "react";
import DalLogo from "../../assets/images/dallogo.png";
import IdeaHub from "../../assets/images/ideahub.png";
import { motion } from "framer-motion";

export const Partnerships: FC = () => {
  return (
    <motion.div
      className="px-4 md:px-20 mt-20"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 20 }}
    >
      <div className="px-4 md:px-60 py-10 ">
        <h4 className="text-3xl md:text-5xl font-bold">Partnerships</h4>
        <p className="my-10 md:my-20">
          We work with Dalhousie University through the Emera ideaHUB residency
          program to deploy leading-edge research and design to the real world.
        </p>
        <span className="flex items-center gap-16 md:gap-20">
          <img src={IdeaHub} alt="idea-hub logo" className="w-[30%] md:w-fit" />
          <img
            src={DalLogo}
            alt="dal university logo"
            className="w-[30%] md:w-fit"
          />
        </span>
      </div>
    </motion.div>
  );
};
