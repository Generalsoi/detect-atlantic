import React, { FC } from "react";
import ArrowRight from "../../assets/images/arrow-right.png";

export const Infrastructurescroll: FC = () => {
  return (
    <div className="relative w-[100%] overflow-hidden h-20 font-ibmPlexMono text-white my-10">
      <div className=" flex">
        <section className="flex items-center gap-4 py-4 border border-x-0 border-y-2 animate-[swipe]">
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase">a new perspective on data</p>
        </section>
        <section className="flex items-center gap-4 py-4 border border-x-0 border-y-2 animate-[swipe]">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase">infrastructure inspections</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase">a new perspective on data</p>
        </section>
        <section className="flex items-center gap-4 py-4 border border-x-0 border-y-2 animate-[swipe]">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase">infrastructure inspections</p>
        </section>
        <section className="flex items-center gap-4 py-4 border border-x-0 border-y-2 animate-[swipe]">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase">a new perspective on data</p>
        </section>
      </div>
    </div>
  );
};
