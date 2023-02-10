import React from "react";
import { Navbar } from "./../components/Navbar";
import MediaOne from "../assets/images/media1.png";

export const Homepage = () => {
  return (
    <div className="font-ibmPlexMono">
      <Navbar />
      <div className="text-left md:flex flex-col items-center justify-center text-white px-4 py-10">
        <span>
          <h1 className="text-5xl md:text-8xl">We see it</h1>
          <h1 className="text-5xl md:text-8xl">before it</h1>
          <h1 className="text-5xl md:text-8xl">happens</h1>
        </span>
      </div>

      <div className="mt-8">
        <img src={MediaOne} alt="" />
      </div>
    </div>
  );
};
