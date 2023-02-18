import React, { FC } from "react";
import CausLogo from "../../assets/images/causlogo.png";
import PilotWaveHoldingsLogo from "../../assets/images/pilotwaveholdings.png";
import { motion } from "framer-motion";

export const AboutUs: FC = () => {
  return (
    <div className="px-4 md:px-20 py-10 md:py-16 mt-10">
      <motion.div
        className="bg-[#1A1A1A] py-10 px-4 md:p-40"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 20 }}
      >
        <h2 className="text-2xl md:text-5xl mb-4 md:mb-8 font-bold">About</h2>
        <hr className="mt-1 mb-10 md:mb-16" />
        <p className="mb-8">
          Climate change will have a significant impact on the cost of
          maintaining North America's electrical power system in the coming
          years. It will increase the frequency and severity of extreme weather
          events, such as hurricanes, floods, and heat waves, which can damage
          electrical infrastructure and disrupt power supply. Repairing and
          rebuilding this infrastructure can be costly, and the costs are likely
          to increase over time as the effects of climate change intensify.{" "}
        </p>
        <p className="mb-8">
          In addition, the demand for electricity is expected to continue to
          grow in the coming years, driven by population growth, economic
          development, and the increasing use of electrified transportation and
          other electrified technologies. This growing demand for electricity
          may lead to an increased demand for power line maintenance, as more
          will be needed to install, maintain, and repair the electrical
          infrastructure required to meet this increased demand.
        </p>
        <p className="mb-8">
          New perspectives on how we maintain these systems are required. Detect
          Atlantic Inspection Services is the result of a research & development
          partnership between Connect Atlantic Utility Services and Pilot Wave
          Holdings to address these needs.
        </p>
        <div className="flex items-center gap-8 mt-20">
          <img src={CausLogo} alt="causlogo" />
          <img
            src={PilotWaveHoldingsLogo}
            alt="pilotwaveholdingslogo"
            className="w-[50%] md:w-fit"
          />
        </div>
      </motion.div>
    </div>
  );
};
