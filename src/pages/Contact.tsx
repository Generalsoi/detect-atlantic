import React, { FC } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Uparrow from "../assets/images/uparrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Contact: FC = () => {
  return (
    <motion.div
      className="font-ibmPlexMono scroll-smooth text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <Navbar />
      <div className="text-center py-20 mt-16 md:mt-20">
        <h1 className="text-4xl md:text-8xl font-bold uppercase">Let's chat</h1>
      </div>

      <div className="text-center flex items-center justify-center px-4 md:px-20">
        <p className="md:w-[50%]">
          Do you have any questions about any of our services, or are interested
          in joining the team? If so, please fill out the form below.
        </p>
      </div>

      <div className="px-4 md:px-20 flex items-center justify-center my-20 md:mt-40">
        <form className="w-full lg:w-[60%] ">
          <div className="w-full mt-8 md:flex items-center gap-4">
            <div className="w-full md:w-[48%]">
              <label htmlFor="first-name" className="uppercase">
                first name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full h-12 mt-4 bg-[#1A1A1A] px-4"
              />
            </div>
            <div className="w-full md:w-[50%] mt-8 md:mt-0">
              <label htmlFor="last-name" className="uppercase">
                last name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full h-12 mt-4 bg-[#1A1A1A] px-4"
              />
            </div>
          </div>
          <div className="w-full mt-8">
            <label htmlFor="email" className="uppercase">
              email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-12 mt-4 bg-[#1A1A1A] px-4"
            />
          </div>
          <div className="w-full mt-8">
            <label htmlFor="subject" className="uppercase">
              subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full h-12 mt-4 bg-[#1A1A1A] px-4"
            />
          </div>
          <div className="w-full mt-8">
            <label htmlFor="message" className="uppercase">
              message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full h-32 mt-4 bg-[#1A1A1A] px-4"
            ></textarea>
          </div>
          <div>
            <Link to="">
              <button className="w-full py-4 mt-20 uppercase bg-[#FF6108] border-none rounded-lg flex items-center justify-center gap-6 hover:scale-105 transition-all ease-in-out duration-300">
                send
                <img src={Uparrow} alt="up-arrow" className="animate-bounce" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/calendly">
              <button className="w-full py-4 mt-10 uppercase bg-transparent hover:bg-[#FF6108] border-2 hover:border-none rounded-lg flex items-center justify-center gap-6 hover:scale-105 transition-all ease-in-out duration-300">
                book now
                <img src={Uparrow} alt="up-arrow" className="animate-bounce" />
              </button>
            </Link>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center px-4 md:px-20 mt-8 md:mt-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.7972850504084!2d-63.57596229028401!3d44.642059982508044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a223414266c19%3A0xfc639809513b8892!2s1345%20Norma%20Eddy%20Ln%2C%20Halifax%2C%20NS%20B3J%201B6%2C%20Canada!5e0!3m2!1sen!2sng!4v1677445065168!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{
            border: 0,
            width: "100%",
            filter: "invert(90%) grayscale(1)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </motion.div>
  );
};
