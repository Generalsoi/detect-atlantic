import React, { FC } from "react";

export const PowerServicesListDiv: FC = () => {
  return (
    <div>
      <p>Our Data Collection Team includes:</p>
      <ul className="list-disc pl-6 my-4">
        <li>1-2x Certified Pilots</li>
        <li>1x Safety Officer</li>
        <li>1x Flight Operations Manager</li>
      </ul>
      <p className="my-4">
        Wide and Zoom Camera angles can be pre-selected by the customer based on
        your specific needs.
      </p>
      <p>Additional imagery and video are also available:</p>
      <ul className="list-disc pl-6">
        <li> Infrared</li>
        <li>imagery Superzoom on specific components</li>
        <li>Corona Discharge (coming soon)</li>
      </ul>
    </div>
  );
};
