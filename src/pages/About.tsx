import React, { FC } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { AboutUs } from "../layouts/about/aboutus";
import { Partnerships } from "../layouts/about/partnerships";
import { Team } from "../layouts/about/team";
import { Perspective } from "../layouts/about/perspective";

export const About: FC = () => {
  return (
    <div className="font-ibmPlexMono scroll-smooth text-white">
      <Navbar />

      <motion.div
        className="text-left flex flex-col items-center justify-center text-white px-4 py-10 mt-16 md:mt-32"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <span>
          <p className="uppercase md:text-3xl">our mission</p>
          <h1 className="text-5xl md:text-8xl">To enable</h1>
          <h1 className="text-5xl md:text-8xl">informed</h1>
          <h1 className="text-5xl md:text-8xl">decisions.</h1>
        </span>
      </motion.div>

      <AboutUs />
      <Partnerships />
      <Team />
      <Perspective />
    </div>
  );
};
