import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import MediaOne from "../assets/images/media1.png";
import UpArrow from "../assets/images/uparrow.png";
import DownArrow from "../assets/images/downarrow.png";
import { Infrastructurescroll } from "../layouts/homepage/infrastructurescroll";
import { WhatWeDo } from "../layouts/homepage/whatWeDo";
import MediaTwo from "../assets/images/media2.png";
import { servicesList } from "../helpers/servicesList";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import ArrowRight from "../assets/images/arrow-right.png";
import { ColletAnnotateScroll } from "../layouts/homepage/colletAnnotate";
import { motion } from "framer-motion";
import { Platformsection } from "../layouts/homepage/platformsection";
import { Footer } from "../components/Footer";
import HomePageVid from "../assets/videos/detecthomepagevid.mp4";

export const Homepage = () => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(1);

  const handleOpenAccordion = (id: number): void => {
    setCurrentId(id);
    setOpenAccordion(!openAccordion);
  };

  return (
    <div className="font-ibmPlexMono scroll-smooth">
      <Navbar />
      <div className="text-left md:flex flex-col md:h-screen items-center justify-center text-white px-4 py-10 mt-16 md:mt-20">
        <span>
          <motion.h1
            className="text-5xl md:text-8xl uppercase font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            We see it
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-8xl uppercase font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            before it
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-8xl uppercase font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            happens
          </motion.h1>
        </span>
      </div>

      <motion.div
        className=" pr-4 w-full md:w-[80%] md:h-screen pl-0 relative overflow-hidden"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <video autoPlay loop controls>
          <source src={HomePageVid} type="video/mp4" />
        </video>
      </motion.div>

      <div className="text-white mt-10 py-10  text-center">
        <motion.p
          className=" md:px-40 px-4 "
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          Detect can provide you with insightful actions to improve your <br />{" "}
          assets’ integrity at a lower cost. We are flexible in our support
          <br /> by offering your selection of data collection, annotation, and
          <br /> analysis.
        </motion.p>

        <span className="flex flex-col md:flex-row items-center gap-8 justify-center my-20 px-4 md:px-48">
          <button className="mt-4 md:mt-0 w-56 md:w-fit px-3 md:px-8 py-6 md:py-5 border border-white rounded-lg uppercase flex items-center justify-center gap-5 hover:translate-y-3 transition-all duration-300">
            learn more{" "}
            <img src={DownArrow} alt="down-arrow" className="animate-bounce" />
          </button>
          <button className="mt-4 md:mt-0 w-56 md:w-fit px-3 md:px-10 py-6 md:py-5 border-none bg-[#FF6108] rounded-lg uppercase flex items-center justify-center gap-5 hover:translate-y-3 transition-all duration-300">
            try our platform <img src={UpArrow} alt="up-arrow" />
          </button>
        </span>
      </div>
      <Infrastructurescroll />

      <WhatWeDo />

      <div className="md:flex px-6 md:pl-20 md:pr-0 pb-8 mt-32 md:mb-40 ">
        <div className="md:w-[50%]">
          {servicesList.map((service) => (
            <div
              key={service.index}
              className="py-8 border border-t-[0.5px] border-b-[0.5px] border-x-0 border-red cursor-pointer transition ease-linear duration-500 text-white"
              onClick={() => handleOpenAccordion(service.index)}
            >
              <h4 className="flex items-center gap-2 uppercase text-2xl">
                {service.name}
                {currentId === service.index ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </h4>
              {currentId === service.index && (
                <span>
                  <p className="my-8 text-sm">{service.description}</p>
                  <a
                    href={service.link}
                    className="text-[#FF6108] uppercase flex items-center gap-3"
                  >
                    Learn More <img src={ArrowRight} alt="arrow-right" />
                  </a>
                </span>
              )}
            </div>
          ))}
        </div>
        <img
          className="hidden md:block w-[50%] h-[34rem]"
          src={MediaTwo}
          alt="mediatwo"
        />
      </div>

      <ColletAnnotateScroll />
      <Platformsection />
      <Footer />
    </div>
  );
};
