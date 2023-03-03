import React, { FC } from "react";
import { Navbar } from "./../../components/Navbar";
import PlatformImgTwo from "../../assets/images/platformimgtwo.png";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import UpArrow from "../../assets/images/uparrow.png";
import Earth from "../../assets/images/earth.png";
import { Link } from "react-router-dom";

export const Platform: FC = () => {
  return (
    <div className="font-ibmPlexMono scroll-smooth text-white">
      <Navbar />

      <div className="mt-20 md:mt-20 md:px-32 py-10 md:py-20 flex flex-col">
        <div className="mb-10 md:mb-20 text-left px-4">
          <motion.h1
            className="text-4xl md:text-8xl font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Actionable
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-8xl font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Insights at
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-8xl font-bold"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Your Fingertips
          </motion.h1>
        </div>

        <motion.div
          className="mb-10 md:mb-20 text-sm md:text-lg px-4"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <p className="text-justify">
            The platform, named "SCOPE," is a next-generation geospatial data
            platform that uses advanced artificial intelligence (AI) and machine
            learning (ML) algorithms to transform data and provide actionable
            insights. The platform has been designed to help energy providers
            make better decisions by providing them with a better understanding
            of their most critical assets.{" "}
          </p>
          <p className="text-justify mt-4">
            SCOPE is built on a modular architecture, making it highly scalable
            and customizable. It is designed to work with a wide range of data
            sources, including structured and unstructured data, as well as data
            from various sensors and devices, including drones. This means that
            energy providers can use the platform to collect and analyze data
            from a variety of sources, including but not limited to drones,
            satellites and IoT devices and accurately mapped to an accurate GPS
            coordinate.
          </p>
          <p className="text-justify mt-4">
            The platform uses a combination of natural language processing
            (NLP), deep learning, and other AI techniques to transform raw data
            into valuable insights. This includes identifying patterns, trends,
            and anomalies in the data, as well as detecting correlations and
            causations between different variables.{" "}
          </p>
          <p className="text-justify mt-4">
            One of the key features of SCOPE is its ability to automate the data
            management & analysis processes. The platform uses AI and ML
            algorithms to perform advanced data analysis tasks, such as
            clustering, classification, and regression analysis, without
            requiring human intervention. This not only saves time and resources
            but also reduces the risk of errors and biases in the analysis.
          </p>
          <p className="text-justify mt-4">
            SCOPE also provides a range of visualization tools, allowing energy
            providers to easily explore and interact with their data. These
            include maps, charts, graphs, and dashboards, which can be
            customized to suit different business needs. Overall, SCOPE is a
            powerful and flexible platform that enables businesses to extract
            maximum value from their data. By leveraging advanced AI and ML
            techniques, it transforms data into actionable insights, providing
            businesses with a competitive edge in today's data-driven world.
          </p>
        </motion.div>
      </div>
      {/* 
      <div className="flex items-center justify-center">
        <img src={Earth} alt="earth " />
      </div> */}

      <div className="mt-10">
        <motion.h2
          className="px-4 md:px-32 text-3xl md:text-7xl"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          Data Command Center
        </motion.h2>

        <div className="md:flex items-start justify-center gap-10 w-full">
          <div className=" w-full md:w-[50%] ">
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
            className="text-sm px-4 md:px-32 mt-20 w-full md:w-[50%]"
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

            <Link to="/contact">
              <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-white px-6 py-4 border-none rounded-lg mt-10">
                Book now{" "}
                <img src={UpArrow} alt="up arrow" className="animate-bounce" />
              </button>
            </Link>
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
