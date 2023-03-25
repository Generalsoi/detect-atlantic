import mediaTwo from "../assets/images/media2.png";
import Power from "../assets/images/powerimg.png";
import { PowerServicesListDiv } from "./powerServicesListDiv";
import Analyze from "../assets/images/platformimg.png";
import Plan from "../assets/images/plan.png";
import Onboard from "../assets/images/onboard.png";
import Collect from "../assets/images/collect.jpg";
import Transform from "../assets/images/transform.png";

type service = {
  index: number;
  name: string;
  description: string;
  image: string;
};

export const powerServicesList: service[] = [
  {
    index: 1,
    name: "OnBoard",
    description:
      "Provide existing geospatial data, inspection data, train pilots, set inspection criteria​",
    image: Onboard,
  },
  {
    index: 2,
    name: "Plan",
    description:
      "Auto–generate optimal takeoff points to minimize field time, while maintaining visual line of sight",
    image: Plan,
  },
  {
    index: 3,
    name: "Collect",
    description:
      "HD imagery and video, all weather capability, 200X zoom, infrared, Lidar mapping, live-streaming data collection, geospatial data​",
    image: Collect,
  },

  {
    index: 4,
    name: "Transform",
    description:
      "Refine raw data across different types into clean data assets ready for use. Label newly transformed data to match inspection criteria​",
    image: Transform,
  },
  {
    index: 5,
    name: "Analyze",
    description:
      "View, query and inspect results in a scalable, searchable database​. Run models and analytics to identify critical areas",
    image: Analyze,
  },
];
