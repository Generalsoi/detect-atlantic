import React, { FC } from "react";
import Marquee from "react-fast-marquee";
import ArrowRight from "../../assets/images/arrow-right.png";

export const ConstructionMonitoringScroll: FC = () => {
  return (
    <div>
      <Marquee gradientColor={[0, 0, 0]}>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className=" text-lg text-[#AAAAAA] font-bold">
          Vegetation Growth monitoring
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className=" text-lg text-[#AAAAAA] font-bold">Predictive analysis</p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />

        <p className=" text-lg text-[#AAAAAA] font-bold">
          Construction monitoring
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />
        <p className=" text-lg text-[#AAAAAA] font-bold">Access planning</p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />

        <p className=" text-lg text-[#AAAAAA] font-bold">Building Inspection</p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />

        <p className=" text-lg text-[#AAAAAA] font-bold">
          Aggregate Pile Volume Estimation
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />

        <p className=" text-lg text-[#AAAAAA] font-bold">
          Mission Live streaming
        </p>
        <img src={ArrowRight} alt="arrow-right" className="mx-6" />

        <p className=" text-lg text-[#AAAAAA] font-bold">Conductor Stringing</p>
      </Marquee>
    </div>
  );
};
