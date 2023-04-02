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
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(1);

  const handleOpenAccordion = (id: number): void => {
    setCurrentId(id);
    setOpenAccordion(!openAccordion);
  };

  return (
    <motion.div
      className="font-ibmPlexMono scroll-smooth"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      {/* <div className="text-left md:flex flex-col lg:h-screen items-center justify-center text-white px-4 py-10 mt-16 md:mt-20">
        <span>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl uppercase font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            We see it
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl uppercase font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            before it
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl uppercase font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            happens
          </motion.h1>
        </span>
      </div> */}
      <motion.div
        className="px-4 lg:px-0 w-full flex items-center relative top-20 overflow-hidden"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <video autoPlay muted playsInline loop>
          <source src={HomePageVid} type="video/mp4" />
        </video>
        {/* <div className="md:absolute md:top-[8rem] lg:top-[20rem] lg:px-40 w-full hidden md:flex items-center justify-center ">
          <div className="bg-black p-8 rounded-lg">
            <h1 className=" lg:text-2xl text-white">
              Detect can provide you with insightful actions to
            </h1>
            <h1 className=" lg:text-2xl text-white">
              improve your assets' integrity at a lower cost.
            </h1>

            <h1 className=" lg:text-2xl text-white">
              We are flexible in our support by offering your
            </h1>
            <h1 className=" lg:text-2xl text-white">
              selection of data collection, annotation, and
            </h1>
            <h1 className=" lg:text-2xl text-white">analysis.</h1>
          </div>
        </div> */}
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

        <span className="flex flex-col md:flex-row items-center gap-8 justify-center my-20 px-4 md:px-48">
          <HashLink smooth={true} to="#whatwedo">
            <button className="mt-4 md:mt-0 w-56 lg:w-fit px-3 md:px-6 lg:px-8 py-6 md:py-5 border border-white rounded-lg uppercase flex items-center justify-center gap-5 hover:translate-y-3 transition-all duration-300">
              learn more{" "}
              <img
                src={DownArrow}
                alt="down-arrow"
                className="animate-bounce"
              />
            </button>
          </HashLink>

          <Link to="/solutions/aisoftware">
            <button className="mt-4 md:mt-0 w-56 lg:w-fit px-3 md:px-4 lg:px-10 py-6 md:py-5 border-none bg-[#FF6108] rounded-lg uppercase flex items-center justify-center gap-5 hover:translate-y-3 transition-all duration-300">
              try our platform <img src={UpArrow} alt="up-arrow" />
            </button>
          </Link>
        </span>
      </div>
      <Infrastructurescroll />

      <WhatWeDo />

      {/* <div className="md:flex px-6 md:pl-20 md:pr-0 pb-8 mt-32 md:mb-40 ">
        <div className="md:w-[50%]">
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
              <h4 className="flex items-center gap-2 uppercase text-2xl">
                {service.name}
                {currentId === service.index ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </h4>
              {currentId === service.index && (
                <motion.span
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: "100%" }}
                  transition={{ type: "spring", stiffness: 20 }}
                >
                  <p className="my-8 text-sm">{service.description}</p>

                  <a
                    href={service.link}
                    className="text-[#FF6108] uppercase flex items-center gap-3"
                  >
                    Learn More <img src={ArrowRight} alt="arrow-right" />
                  </a>
                </motion.span>
              )}
            </div>
          ))}
        </div>
        <img
          className="hidden md:block w-[50%] h-[34rem]"
          src={MediaTwo}
          alt="mediatwo"
        />
      </div> */}

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
              <h4 className="flex items-center gap-2 uppercase text-2xl">
                {service.name}
                {currentId === service.index ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowRight />
                )}
              </h4>
              {currentId === service.index && (
                <motion.div
                  className="md:flex items-start lg:gap-32 justify-between"
                  initial={{ opacity: 0, y: "-10%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <motion.span className="w-full md:w-[40%]">
                    <p className="my-8 text-sm">{service.description}</p>
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
              )}
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
