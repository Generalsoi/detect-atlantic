import React from "react";
import { team } from "../../helpers/team";

export const Team = () => {
  return (
    <div>
      <h1>meet the team</h1>

      <div>
        {team.map((member, index) => (
          <div key={index}>
            <img src={member.image} alt={member.image} />
            <h4>{member.name}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
