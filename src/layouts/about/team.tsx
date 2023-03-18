import React from "react";
import { team } from "../../helpers/team";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

export const Team = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-40 mt-20">
      <h1 className="text-center uppercase text-4xl md:text-8xl font-bold">
        meet the team
      </h1>

      <div className="px-8 md:px-0 md:flex items-start justify-center gap-20 mt-20">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="w-full md:w-[23%] mb-20"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            <img src={member.image} alt={member.image} />
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <h4 className="my-6 uppercase text-xl md:text-3xl hover:underline transition-all ease-in-out duration-300 text-center">
                {member.name}
              </h4>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
