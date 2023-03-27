import React, { FC } from "react";
import ArrowRight from "../../assets/images/arrow-right.png";

export const Infrastructurescroll: FC = () => {
  return (
    <div className="hidden md:block relative  overflow-hidden h-40 font-ibmPlexMono text-[#AAAAAA] my-10">
      <div
        className="absolute w-[200%] top-0 left-0 right-0 flex h-24 border-dotted border-x-0"
        style={{
          borderTopWidth: "0.1px",
          borderBottomWidth: "0.1px",
          borderColor: "#AAAAAA",
        }}
      >
        <section className="flex items-center gap-3 py-3 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
        </section>
        <section className="flex items-center gap-3 py-3 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
        </section>

        {/* <section className="flex items-center gap-4 py-4 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
          <img src={ArrowRight} alt="arrow-right" className="ml-6" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            infrastructure inspections
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs text-[#AAAAAA] font-bold">
            a new perspective on data
          </p>
        </section> */}
      </div>
    </div>
  );
};
