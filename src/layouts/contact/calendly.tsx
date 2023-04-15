import React, { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export const Calendly: FC = () => {
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center mt-32">
        <InlineWidget
          url="https://calendly.com/detect_inspections"
          styles={{
            height: "40rem",
            width: "50rem",
          }}
        />
      </div>
    </div>
  );
};
