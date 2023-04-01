import React, { FC } from "react";
import StormSupport from "../../assets/images/stormsupport.png";
import { motion } from "framer-motion";

export const Stormsupport: FC = () => {
  return (
    <motion.div
      className="px-4 md:px-20 flex mt-24 mb-24 lg:mt-0 flex-col-reverse lg:flex-row items-end justify-center md:gap-20"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 20 }}
    >
      <div className="w-full lg:w-[40%]">
        <h3 className="font-bold text-2xl md:text-4xl mt-8 md:mt-0">
          Storm Support
        </h3>

        <ol className="list-decimal mt-8 md:mt-16 pl-8">
          <li className="mt-2">
            When power is lost after a severe weather event, our team can:
            <ul className="list-disc">
              <li>Quickly identify damaged infrastructure causing outages</li>
              <li>
                How best to access them with the required construction equipment
              </li>
            </ul>
          </li>
          <li className="mt-2">
            An interactive offline map is provided to the customer and the crews
            to rapidly get the power back on for the local community
          </li>
          <li className="mt-2">
            Before going to the field, Detect can use SCADA information and
            quickly search all data collected around the potentially damaged
            structures, we can go to the field with the to confirm
          </li>
        </ol>
      </div>
      <img
        src={StormSupport}
        alt="stormsupport"
        className="w-full lg:w-[45%] h-[15rem] md:h-[30rem]"
      />
    </motion.div>
  );
};
