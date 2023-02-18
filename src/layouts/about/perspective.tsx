import React, { FC } from "react";
import PerspectiveOne from "../../assets/images/perspectiveimg1.png";
import PerspectiveTwo from "../../assets/images/perspectiveimg2.png";
import Uparrow from "../../assets/images/uparrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Perspective: FC = () => {
  return (
    <div className="hidden md:flex my-32 px-40 items-center justify-center text-white">
      <motion.div
        className="w-[80%] h-[30rem] text-center flex flex-col items-center justify-center"
        style={{
          background: `url(${PerspectiveOne}) left top no-repeat, url(${PerspectiveTwo}) right bottom no-repeat`,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <span>
          <h2 className="text-5xl font-bold">Perspective is</h2>
          <h2 className="text-5xl font-bold">everything</h2>
        </span>
        <Link to="/solutions">
          <button className="bg-[#FF6108] px-10 py-4 mt-10 border-none rounded-xl uppercase flex items-center justify-center gap-4 hover:scale-105 transition-all ease-in-out duration-300">
            services
            <img src={Uparrow} alt="uparrow" className="animate-bounce" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};
