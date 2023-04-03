import React, { FC, useState } from "react";
import Media4 from "../../assets/images/media4.png";
import { motion } from "framer-motion";
import { Navbar } from "./../../components/Navbar";
import { Footer } from "./../../components/Footer";
import { Stormsupport } from "./stormsupport";
import { Flightplanning } from "./flightplanning";
import { ColletAnnotateScroll } from "./../homepage/colletAnnotate";
import { Link } from "react-router-dom";
import UpArrow from "../../assets/images/uparrow.png";

export const Power: FC = () => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(1);

  const handleOpenAccordion = (id: number): void => {
    setCurrentId(id);
    setOpenAccordion(!openAccordion);
  };
  return (
    <motion.div
      className="font-ibmPlexMono scroll-smooth text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <motion.div
        className="px-4 md:px-20 mt-16 md:mt-20 py-20 flex items-center justify-center"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h2 className="lg:w-[50%] text-5xl md:text-7xl lg:text-8xl font-bold">
          Full Service Inspection
        </h2>
      </motion.div>
      <div className="flex flex-col items-center justify-center mt-8 lg:mt-20 py-10 lg:h-screen">
        <img
          src={Media4}
          alt="mediafour"
          className="h-60 md:h-[32rem] w-full md:w-fit"
        />

        {/* <div className="mt-20 md:px-20 px-4 flex items-center justify-center text-center md:mb-20">
          <div
            className="w-full md:w-[50%] border border-x-0 border-neutral-400 md:px-10 py-8 flex items-center justify-center"
            style={{ borderTopWidth: "0.1px", borderBottomWidth: "0.1px" }}
          >
            <p className="w-full">
              We know that infrastructure maintenance is complicated - that’s
              why we’ve kept our services as flexible as possible to help
              address your specific needs.
            </p>
          </div>
        </div> */}
      </div>

      <ColletAnnotateScroll />

      {/* <div className="md:flex px-6 md:px-20 pb-8 md:mt-32 md:mb-40 ">
        <div className="w-full">
          {powerServicesList.map((service) => (
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
                  className="md:flex items-start gap-10"
                  initial={{ opacity: 0, y: "-10%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <motion.span className="w-full md:w-[50%]">
                    <p className="my-8 text-sm">{service.description}</p>
                  </motion.span>
                  <img
                    className="w-full md:w-[40%] h-[20rem] md:h-[25rem] mt-8 md:mt-0"
                    src={service.image}
                    alt="mediatwo"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div> */}
      <motion.div
        className="mb-32 md:mb-40 md:px-20 lg::px-40 text-sm md:text-lg px-4"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <p className="text-justify md:text-lg">
          Our team of experienced pilots and technicians capture high quality
          imagery and videos required to properly assess the health of your most
          critical infrastructure while adhering to safety regulations and
          guidelines. We accomplish this goal through our proprietary
          integration of skills accumulated from years of fixing all powerline
          types with matched pilot experience in the most difficult terrains.{" "}
        </p>
        {/* <ul className="list-disc mt-4 pl-8 text-justify">
          <li>200X zoom</li>
          <li>4k video</li>
          <li>cm-level lidar data capture</li>
          <li>Infrared imagery</li>
          <li>3.5km inspection radius</li>
          <li>Flying in 50 - 60 km/h wind</li>
          <li>-20 to 40 deg C (-4 to 104 deg F)</li>
        </ul>
        <p className="text-justify mt-4">
          Our drone inspection service can detect issues before they become
          critical. Our infrared imaging sensors can detect hotspots that may
          indicate potential equipment failure or damaged wires. We can identify
          other potential problems such as corrosion, rust, bent members or
          cracks in the towers or insulators.
        </p>
        <p className="text-justify mt-4">
          Our team of experienced pilots and technicians ensure that our drones
          are operated safely and efficiently. We adhere to all safety
          regulations and guidelines set forth by country regulatory bodies such
          as Transport Canada and the Federal Aviation Administration (FAA).
        </p> */}

        <p className="text-justify mt-4">
          See your data come to life on our next-generation platform
        </p>
        <div className="w-full flex items-center justify-center mt-10">
          <Link to="/solutions/aisoftware">
            <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-white px-6 py-4 border-none rounded-lg mt-10">
              Learn More
              <img src={UpArrow} alt="up arrow" className="animate-bounce" />
            </button>
          </Link>
        </div>
      </motion.div>

      <Flightplanning />
      <Stormsupport />

      <Footer />
    </motion.div>
  );
};
