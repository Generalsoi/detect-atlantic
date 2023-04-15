import React, { FC } from "react";
import ArrowRight from "../../assets/images/arrow-right.png";
import Marquee from "react-fast-marquee";

export const Infrastructurescroll: FC = () => {
  return (
    <div
      className=" font-ibmPlexMono text-[#AAAAAA] my-10 py-6"
      style={{
        borderTopWidth: "0.1px",
        borderBottomWidth: "0.1px",
        borderColor: "#AAAAAA",
      }}
    >
      <Marquee gradientColor={[0, 0, 0]} direction="right">
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          a new perspective on data
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          infrastructure inspections
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          a new perspective on data
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          infrastructure inspections
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          a new perspective on data
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          infrastructure inspections
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          a new perspective on data
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className="uppercase text-lg text-[#AAAAAA] font-bold">
          infrastructure inspections
        </p>
      </Marquee>
    </div>
  );
};
