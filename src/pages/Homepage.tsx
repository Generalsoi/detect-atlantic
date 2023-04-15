import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Infrastructurescroll } from "../layouts/homepage/infrastructurescroll";
import { WhatWeDo } from "../layouts/homepage/whatWeDo";
import { servicesList } from "../helpers/servicesList";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import ArrowRight from "../assets/images/arrow-right.png";
import { ColletAnnotateScroll } from "../layouts/homepage/colletAnnotate";
import { motion } from "framer-motion";
import { Platformsection } from "../layouts/homepage/platformsection";
import { Footer } from "../components/Footer";
import HomePageVid from "../assets/videos/detecthomepagevid.mp4";

export const Homepage = () => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(true);
  const [currentId, setCurrentId] = useState<number>(1);

  const handleOpenAccordion = (id: number): void => {
    setCurrentId(id);
    setOpenAccordion(!openAccordion);
  };

  return (
    <motion.div
      className="font-ibmPlexMono scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Navbar />

      <motion.div
        className="px-4 lg:px-0 w-full flex items-center relative top-20 overflow-hidden"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <video autoPlay muted playsInline loop>
          <source src={HomePageVid} type="video/mp4" />
        </video>
      </motion.div>

      <div className="text-white mt-28 py-10  text-center">
        <motion.p
          className=" md:px-10 lg:px-40 px-4 lg:text-xl"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          Detect can provide you with insightful actions to improve your <br />{" "}
          assets’ integrity at a lower cost. We are flexible in our support
          <br /> by offering your selection of data collection, annotation, and
          <br /> analysis.
        </motion.p>
      </div>
      <Infrastructurescroll />

      <WhatWeDo />

      <div className="md:flex px-6 md:px-10 lg:px-20  pb-8 mt-32 md:mb-40  ">
        <div className="w-full">
          {servicesList.map((service) => (
            <div
              key={service.index}
              className={`py-8 border border-x-0 border-red cursor-pointer border-neutral-400 ${
                service.index === 4 ? "border-b-1" : "border-b-0"
              } border-[#AAAAAA] transition ease-linear duration-500 text-white`}
              onClick={() => handleOpenAccordion(service.index)}
              style={{
                borderTopWidth: "0.1px",
                borderColor: "#AAAAAA",
              }}
            >
              <h4 className="flex items-center gap-2 uppercase text-2xl lg:text-3xl">
                {service.name}
                {openAccordion && currentId === service.index ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </h4>
              {currentId === service.index && openAccordion ? (
                <motion.div
                  className="md:flex items-start lg:gap-32 justify-between"
                  initial={{ opacity: 0, y: "-10%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <motion.span className="w-full md:w-[40%]">
                    <p className="my-8 text-sm lg:text-md">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className="text-[#FF6108] uppercase flex items-center gap-3"
                    >
                      Learn More <img src={ArrowRight} alt="arrow-right" />
                    </a>
                  </motion.span>
                  <img
                    className="w-full md:w-[40%] h-[20rem] md:h-[15rem] lg:h-[25rem] mt-8 md:mt-0"
                    src={service.img}
                    alt={service.img}
                  />
                </motion.div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <ColletAnnotateScroll />
      <Platformsection />

      <Footer />
    </motion.div>
  );
};
