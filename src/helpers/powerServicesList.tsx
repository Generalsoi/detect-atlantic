import mediaTwo from "../assets/images/media2.png";
import { PowerServicesListDiv } from "./powerServicesListDiv";

type service = {
  index: number;
  name: string;
  description: any;
  image: string;
};

export const powerServicesList: service[] = [
  {
    index: 1,
    name: "Plan",
    description: <PowerServicesListDiv />,
    image: mediaTwo,
  },
  {
    index: 2,
    name: "Collect",
    description: <PowerServicesListDiv />,
    image: mediaTwo,
  },

  {
    index: 3,
    name: "Annote",
    description: <PowerServicesListDiv />,
    image: mediaTwo,
  },
  {
    index: 4,
    name: "Analyze",
    description: <PowerServicesListDiv />,
    image: mediaTwo,
  },
];
