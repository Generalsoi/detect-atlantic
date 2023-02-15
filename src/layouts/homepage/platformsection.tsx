import React, { FC } from "react";
import MediaThree from "../../assets/images/media3.png";

export const Platformsection: FC = () => {
  return (
    <div className="md:px-20 text-left flex flex-col items-center justify-center ">
      <div>
        <h3 className="uppercase text-xl">Platform</h3>
        <span>
          <p className="md:text-6xl font-bold text-3xl">See your data come</p>
          <p className="md:text-6xl font-bold text-3xl">to life with our</p>
          <p className="md:text-6xl font-bold text-3xl">platform</p>
        </span>
      </div>
      <img src={MediaThree} alt="" className="mt-10" />
    </div>
  );
};
