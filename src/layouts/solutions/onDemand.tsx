import React, { FC } from "react";
import { Navbar } from "../../components/Navbar";
import UpArrow from "../../assets/images/uparrow.png";
import { Footer } from "./../../components/Footer";
import { motion } from "framer-motion";
import { ConstructionMonitoringScroll } from "./constructionMonitoringScroll";
import OnDemandVid from "../../assets/videos/ondemand.mp4";
import { Link } from "react-router-dom";

export const OnDemand: FC = () => {
  return (
    <motion.div
      className="font-ibmPlexMono scroll-smooth text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Navbar />

      <div className="mt-20 md:mt-20 md:px-20 lg:px-[15%] py-10 md:py-20 flex flex-col">
        <div className="mb-10 md:mb-20 text-left px-4">
          <motion.h1
            className="text-4xl md:text-6xl text-center font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            We can inspect
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl text-center font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            more than you think
          </motion.h1>
        </div>
        <motion.div
          className="mb-20  text-center px-4 md:px-20 py-10"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <h2 className="text-xl ">Do you have an idea on how leveraging</h2>
          <h2 className="text-xl ">data with Detect could help your</h2>
          <h2 className="text-xl ">business?</h2>
        </motion.div>
      </div>

      <ConstructionMonitoringScroll />

      <motion.div
        className="flex items-center justify-center lg:pb-20 mt-32"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <Link to="/contact">
          <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-sm border-none rounded-lg px-6 py-4">
            Let's chat{" "}
            <img src={UpArrow} alt="up arrow" className="animate-bounce" />
          </button>
        </Link>
      </motion.div>

      {/* <motion.div
        className="flex flex-col items-center justify-center mt-16 md:mt-20 py-10 h-screen"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <div className="flex items-center w-full md:w-[90%]">
          <img
            src={OnDemandImg}
            alt="mediafour"
            className="h-60 md:h-[23rem] w-[25%]"
          />
          <img
            src={OnDemandImg2}
            alt="mediafour"
            className="h-60 md:h-[23rem] w-[25%]"
          />
          <img
            src={OnDemandImg3}
            alt="mediafour"
            className="h-60 md:h-[23rem] w-[25%]"
          />
          <img
            src={OnDemandImg4}
            alt="mediafour"
            className="h-60 md:h-[23rem] w-[25%]"
          />
        </div>

        <div className="mt-20 md:px-20 px-4 flex items-center justify-center text-center">
          <p className="text-lg md:text-2xl">Curious to learn more?</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center lg:pb-20"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <Link to="/contact">
          <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-sm border-none rounded-lg px-6 py-4">
            Learn More
            <img src={UpArrow} alt="up arrow" className="animate-bounce" />
          </button>
        </Link>
      </motion.div> */}

      <Footer />
    </motion.div>
  );
};
