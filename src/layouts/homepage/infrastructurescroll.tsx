import React, { FC } from "react";
import ArrowRight from "../../assets/images/arrow-right.png";

export const Infrastructurescroll: FC = () => {
  return (
    <div className="hidden md:block relative  overflow-hidden h-40 font-ibmPlexMono text-white my-10">
      <div className="absolute w-[200%] top-0 left-0 right-0 flex h-24 border border-x-0 border-y-[0.2px] border-gray-300 ">
        <section className="flex items-center gap-4 py-4 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs">infrastructure inspections</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs">a new perspective on data</p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs">infrastructure inspections</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs">a new perspective on data</p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs">infrastructure inspections</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs">a new perspective on data</p>
        </section>
        <section className="flex items-center gap-4 py-4 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs">infrastructure inspections</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs">a new perspective on data</p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs">infrastructure inspections</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs">a new perspective on data</p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs">infrastructure inspections</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs">a new perspective on data</p>
        </section>
      </div>
    </div>
  );
};
