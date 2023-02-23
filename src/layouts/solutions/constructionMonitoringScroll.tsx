import React, { FC } from "react";

import ArrowRight from "../../assets/images/arrow-right.png";

export const ConstructionMonitoringScroll: FC = () => {
  return (
    <div className="hidden lg:block relative  overflow-hidden h-40 font-ibmPlexMono text-white my-10">
      <div className="absolute w-[200%] top-0 left-0 right-0 flex gap-4 h-24 border-none">
        <section className="flex items-center gap-6 py-4 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className=" text-lg text-[#AAAAAA] font-bold">Growth monitoring</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className=" text-lg text-[#AAAAAA] font-bold">
            Predictive analysis
          </p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className=" text-lg text-[#AAAAAA] font-bold">
            Construction monitoring
          </p>

          <img src={ArrowRight} alt="arrow-right" />
          <p className=" text-lg text-[#AAAAAA] font-bold">Access planning</p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className=" text-lg text-[#AAAAAA] font-bold">Growth monitoring</p>
        </section>
        <section className="flex items-center gap-6 py-4 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className=" text-lg text-[#AAAAAA] font-bold">
            Predictive analysis
          </p>

          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className=" text-lg text-[#AAAAAA] font-bold">
            Construction monitoring
          </p>

          <img src={ArrowRight} alt="arrow-right" />
          <p className=" text-lg text-[#AAAAAA] font-bold">Access planning</p>

          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className=" text-lg text-[#AAAAAA] font-bold">Growth monitoring</p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className=" text-lg text-[#AAAAAA] font-bold">
            Predictive analysis
          </p>
        </section>
      </div>
    </div>
  );
};
