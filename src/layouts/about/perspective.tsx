import React, { FC } from "react";
import PerspectiveOne from "../../assets/images/perspectiveimg1.png";
import PerspectiveTwo from "../../assets/images/perspectiveimg2.png";
import Uparrow from "../../assets/images/uparrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Perspective: FC = () => {
  return (
    <div className="md:flex my-32 md:px-10 lg:px-40 items-center justify-center text-white">
      <motion.div
        className="w-full h-[30rem] text-center flex flex-col items-center justify-center relative"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <div className="flex flex-col items-center justify-center">
          <span>
            <h2 className="text-3xl lg:text-6xl font-bold">Perspective is</h2>
            <h2 className="text-3xl lg:text-6xl font-bold">everything</h2>
          </span>
        </div>
        <Link to="/solutions/powerlineinspectionservices">
          <button className="bg-[#FF6108] px-10 py-4 mt-10 border-none rounded-xl uppercase flex items-center justify-center gap-4 hover:scale-105 transition-all ease-in-out duration-300">
            services
            <img src={Uparrow} alt="uparrow" className="animate-bounce" />
          </button>
        </Link>
      </motion.div>
    </div>
  );
};
