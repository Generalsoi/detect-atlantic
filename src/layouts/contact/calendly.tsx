import React, { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { InlineWidget } from "react-calendly";

export const Calendly: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center mt-32">
        <InlineWidget
          url="https://calendly.com/ikhinobelesuccess"
          styles={{
            height: "30rem",
            width: "50rem",
            scrollbarColor: "#000000",
          }}
        />
      </div>
    </div>
  );
};
