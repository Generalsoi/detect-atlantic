import React, { FC, useState } from "react";
import { Navbar } from "./../../components/Navbar";
import PlatformImgTwo from "../../assets/images/platformimg.png";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import UpArrow from "../../assets/images/uparrow.png";
import Earth from "../../assets/images/earth.png";
import { Link } from "react-router-dom";
import { platformServicesList } from "../../helpers/servicesList";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

export const Platform: FC = () => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(1);

  const handleOpenAccordion = (id: number): void => {
    setCurrentId(id);
    setOpenAccordion(!openAccordion);
  };

  return (
    <div className="font-ibmPlexMono scroll-smooth text-white">
      <Navbar />

      <div className="mt-20 md:mt-20 md:px-32 py-10 md:py-20 flex flex-col">
        <div className="mb-10 md:mb-20 text-left px-4">
          <motion.h1
            className="text-4xl md:text-7xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Introducing
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-7xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Detect's asset
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-7xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Management Platform
          </motion.h1>
        </div>

        <motion.div
          className="mb-10 md:mb-20 text-sm md:text-lg px-4"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <p className="text-justify">
            Digital energy providers are built on using 100% of their data at
            absolute scale. The most successful ones know everything about their
            assets, environment, weather, vegetation — and how to use that
            intelligence to prevent issues from occurring. Especially when
            storms cause major power outages.{" "}
          </p>
          <p className="text-justify mt-4">
            We believe that knowing the health of every energy transmission and
            distribution source is table stakes in today’s data age. It’s why we
            built SCOPE. Architected with AI and machine learning technologies
            to automate the mind-numbing process of making raw data usable,
            readily available and easy to find to take action. We’re
            passionately reimagining the industry standard of using data built
            on three core principles:
          </p>

          <p className="text-justify mt-4 md:pl-8">
            <ol className="list-decimal">
              <li>Automation... To keep your cost low</li>
              <li>Real-time... to make decisions when it's happening</li>
              <li>
                Connectivity... so information can be seamlessly transferred
                into your current workflow.
              </li>
            </ol>
          </p>
          <p className="text-justify mt-4">Here's how it works:</p>
        </motion.div>
      </div>

      <div className="md:flex px-6 md:px-20 pb-8 mt-32 md:mb-40  ">
        <div className="w-full">
          {platformServicesList.map((service) => (
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
                  className="md:flex items-center gap-20"
                  initial={{ opacity: 0, y: "-10%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <motion.span className="w-full md:w-[40%]">
                    <p className="my-8 text-sm">{service.description}</p>
                  </motion.span>
                  <img
                    className="w-full md:w-[50%] h-[20rem] md:h-[20rem] mt-8 md:mt-0"
                    src={service.img}
                    alt={service.img}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <motion.h2
          className="px-4 md:px-32 text-3xl md:text-7xl"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          Data Command Center
        </motion.h2>

        <div className="md:flex flex-col items-center justify-center gap-10 w-full">
          <div className=" w-full ">
            <motion.img
              className="px-0 md:px-32 mt-20 w-full aspect-auto"
              src={PlatformImgTwo}
              alt="platform image two "
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 20 }}
            />
          </div>

          <motion.div
            className="text-sm px-4 md:px-32 mt-20 w-full md:w-[70%] text-justify"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            <p>Our functional web-based platforms can:</p>
            <ul className="mt-4 list-disc px-4 md:px-10">
              <li>
                Store and manage inspections in a customer profile’s searchable
                database
              </li>
              <li>
                Show annotations from our certified Powerline Technicians for
                every structure
              </li>
              <li>Filter detected issues by severity or type</li>
              <li>Automatically generate a PDF report for offline use</li>
            </ul>
            <p className="mt-4 w-full md:w-[80%]">
              Any GPS-tagged imagery and notes can be used Using SCOPE, Detect
              can build a timeline for each asset - its life story.
            </p>
            <p className="mt-4 w-full md:w-[80%]">
              Using rich data and this story, Detect will be able to determine
              long-term trends and extrapolate that to other
              structures/equipment, and fix defects before they become a
              critical risk to the network.
            </p>

            <div className="w-full flex items-center justify-center mt-10">
              <Link to="/contact">
                <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-white px-6 py-4 border-none rounded-lg mt-10">
                  Book now{" "}
                  <img
                    src={UpArrow}
                    alt="up arrow"
                    className="animate-bounce"
                  />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="px-4 md:px-32 py-20 ">
        <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-white px-6 py-4 border-none rounded-lg">
          Book now{" "}
          <img src={UpArrow} alt="up arrow" className="animate-bounce" />
        </button>
      </div> */}

      <Footer />
    </div>
  );
};
