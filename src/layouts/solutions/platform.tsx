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
  const [openAccordion, setOpenAccordion] = useState<boolean>(true);
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
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Navbar />

      <div className="mt-20 md:mt-20 md:px-20 lg:px-[15%] py-10 md:py-20 flex flex-col">
        <div className="mb-10 md:mb-20 text-left px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Introducing
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold uppercase"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            Detect's asset
          </motion.h1>
          <motion.h1
            className="text-4xl md:text-6xl font-bold uppercase"
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
          <p className="text-justify md:text-xl">
            Through our decades of IP building world-class data & artificial
            intelligence software while meeting the strictest level of data
            security; we built a platform in record pace to monitor and protect
            the digital version of your critical physical infrastructure.{" "}
          </p>
          <p className="text-justify mt-4">How it works:</p>
        </motion.div>
      </div>

      <div className="md:flex px-6 md:px-10 lg:px-20 pb-8 mt-8 md:mt-20 md:mb-40  ">
        <div className="w-full">
          {platformServicesList.map((service) => (
            <div
              key={service.index}
              className={`py-8 border border-x-0 border-red cursor-pointer border-neutral-400 ${
                service.index === 4 ? "border-b-1" : "border-b-0"
              } border-[#AAAAAA] transition ease-linear duration-500 text-white`}
              // onClick={() => handleOpenAccordion(service.index)}
              style={{
                borderTopWidth: "0.1px",
                borderBottomWidth: "0.1px",
                borderColor: "#AAAAAA",
              }}
            >
              <h4 className="flex items-center gap-2 uppercase text-2xl">
                {service.name}
              </h4>
              {
                <motion.div
                  className="md:flex items-center gap-20"
                  initial={{ opacity: 0, y: "-10%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <motion.span className="w-full md:w-[40%]">
                    <p className="my-8 text-sm">{service.description}</p>
                  </motion.span>
                  <div className="w-full md:w-[50%] h-[20rem] md:h-[15rem] lg:h-[20rem] mt-8 md:mt-0 flex items-center justify-center md:px-10">
                    <img
                      className="w-full md:w-[22rem] h-full aspect-square "
                      src={service.img}
                      alt={service.img}
                    />
                  </div>
                </motion.div>
              }
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="lg:flex flex-col items-center justify-center gap-10 w-full">
          <motion.div
            className="text-sm px-4 md:px-20 lg:px-32 mt-20 w-full lg:w-[70%] text-justify"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            <div className="w-full flex items-center justify-center mt-10">
              <Link to="/contact">
                <button className="flex items-center justify-center gap-4 bg-[#FF6108] text-white px-6 py-4 md:px-10 md:py-6 border-none rounded-lg mt-10">
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

      <Footer />
    </motion.div>
  );
};
