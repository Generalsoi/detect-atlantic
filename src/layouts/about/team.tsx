import React from "react";
import { team } from "../../helpers/team";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-40 mt-20">
      <h1 className="text-center uppercase text-4xl md:text-8xl">
        meet the team
      </h1>

      <div className="md:flex items-start justify-center gap-20 flex-wrap mt-20">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="md:w-[38%] mb-20"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            <img src={member.image} alt={member.image} />
            <h4 className="my-10 uppercase text-xl md:text-3xl">
              {member.name}
            </h4>
            <p>{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
