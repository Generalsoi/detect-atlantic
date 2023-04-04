import React, { FC } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { AboutUs } from "../layouts/about/aboutus";
import { Partnerships } from "../layouts/about/partnerships";
import { Team } from "../layouts/about/team";
import { Perspective } from "../layouts/about/perspective";
import { Footer } from "./../components/Footer";

export const About: FC = () => {
  return (
    <motion.div
      className="font-ibmPlexMono scroll-smooth text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Navbar />

      <motion.div
        className="text-left flex flex-col items-center justify-center text-white px-4 py-16 md:py-32 mt-16 md:mt-20"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <span>
          <p className="uppercase md:text-3xl">our mission</p>
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold mt-1">
            Digitize the world's critical
          </h1>
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold">
            physical infrastructure to
          </h1>
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold">
            action faults before they
          </h1>
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold">occur</h1>
        </span>
      </motion.div>

      <AboutUs />
      <Partnerships />
      <Team />
      <Perspective />
      <Footer />
    </motion.div>
  );
};
