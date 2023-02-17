import React, { FC } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Uparrow from "../assets/images/uparrow.png";

export const Contact: FC = () => {
  return (
    <div className="font-ibmPlexMono scroll-smooth text-white">
      <Navbar />
      <div className="text-center py-20 mt-16 md:mt-32">
        <h1 className="text-4xl md:text-8xl font-bold">We would love</h1>
        <h1 className="text-4xl md:text-8xl font-bold">to hear from</h1>
        <h1 className="text-4xl md:text-8xl font-bold">you!</h1>
      </div>

      <div className="text-center flex items-center justify-center px-4 md:px-20">
        <p className="md:w-[50%]">
          Do you have any questions about any of our services, or are interested
          in joining the team? If so, please fill out the form below.
        </p>
      </div>

      <div className="px-4 md:px-20 flex items-center justify-center my-20 md:mt-40">
        <form className="w-full md:w-[60%] ">
          <div className="w-full mt-8 md:flex items-center gap-4">
            <div className="w-full md:w-[48%]">
              <label htmlFor="first-name" className="uppercase">
                first name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full h-12 mt-4 bg-[#1A1A1A]"
              />
            </div>
            <div className="w-full md:w-[50%] mt-8 md:mt-0">
              <label htmlFor="last-name" className="uppercase">
                last name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full h-12 mt-4 bg-[#1A1A1A]"
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
              className="w-full h-12 mt-4 bg-[#1A1A1A]"
            />
          </div>
          <div className="w-full mt-8">
            <label htmlFor="subject" className="uppercase">
              subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full h-12 mt-4 bg-[#1A1A1A]"
            />
          </div>
          <div className="w-full mt-8">
            <label htmlFor="message" className="uppercase">
              message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full h-32 mt-4 bg-[#1A1A1A]"
            ></textarea>
          </div>
          <div>
            <button className="w-full py-4 mt-20 uppercase bg-[#FF6108] border-none rounded-lg flex items-center justify-center gap-6 hover:scale-105 transition-all ease-in-out duration-300">
              send{" "}
              <img src={Uparrow} alt="up-arrow" className="animate-bounce" />
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
