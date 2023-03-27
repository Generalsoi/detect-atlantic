import React, { FC } from "react";
import ArrowRight from "../../assets/images/arrow-right.png";

export const ColletAnnotateScroll: FC = () => {
  return (
    <div className="hidden md:block relative  overflow-hidden h-40 font-ibmPlexMono text-white my-10">
      <div
        className="absolute w-[200%] top-0 left-0 right-0 flex h-24 border border-x-0 "
        style={{
          borderTopWidth: "0.1px",
          borderBottomWidth: "0.1px",
          borderColor: "#AAAAAA",
        }}
      >
        <section className="flex items-center gap-4 py-4 w-[50%] animate-swipe">
          {/* <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-8 "></span> */}
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Onboard</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Plan</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">collect</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">
            Transform
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Analyze</p>

          <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-8 "></span>
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Onboard</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Plan</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">collect</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">
            Transform
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Analyze</p>
          <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-8 "></span>
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Onboard</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Plan</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">collect</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">
            Transform
          </p>
          {/* <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Analyze</p> */}
          {/* <img src={ArrowRight} alt="arrow-right" /> */}
          {/* <p className="uppercase text-xs font-bold text-[#AAAAAA]">analyze</p> */}
        </section>
        <section className="flex items-center gap-4 ml-4 py-4 w-[50%] animate-swipe">
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Analyze</p>
          <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-8 "></span>
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Onboard</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Plan</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">collect</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">
            Transform
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Analyze</p>
          <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-8 "></span>
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Onboard</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Plan</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">collect</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">
            Transform
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Analyze</p>
          <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-8 "></span>
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Onboard</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Plan</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">collect</p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">
            Transform
          </p>
          <img src={ArrowRight} alt="arrow-right" />
          <p className="uppercase text-xs font-bold text-[#AAAAAA]">Analyze</p>
          <span className="border border-l-2 border-t-0 border-r-0 border-b-0 h-8 "></span>
        </section>
      </div>
    </div>
  );
};
