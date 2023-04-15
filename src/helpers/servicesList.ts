import Power from '../assets/images/powerimg.jpg'
import Energy from '../assets/images/energyimg.jpg'
import Platform from '../assets/images/platformimg.jpg'
import Ondemand from '../assets/images/ondemandimg.jpg'
import Plan from '../assets/images/plan.png'
import Onboard from '../assets/images/onboard.png'
import Collect from '../assets/images/collect.png'
import Refine from '../assets/images/refine.png'
import Analyze from '../assets/images/analyze.png'
import Enhance from '../assets/images/enhance.png'
import Visualize from '../assets/images/visualize.png'



type service = {
    index: number;
    name: string;
    description: string;
    link: string;
    img: string;
  };

  type platformService = {
    index: number;
    name: string;
    description: string;
    img: string;
  }


export const servicesList: service[] = [
    {
      index: 1,
      name: "Power",
      description:
        "Digitize & assess risk for your electrical infrastructure with the help of our team of experts",
      link: "/solutions/powerlineinspectionservices",
      img: Power
    },
    {
      index: 2,
      name: "Energy",
      description:
        "Automate your energy asset monitoring with RGB and infrared scans.",
      link: "/solutions/solarandwindinspectionservices",
      img: Energy
    },
    {
      index: 3,
      name: "On Demand",
      description:
        "Meeting needs across areas such as monitoring vegetation growth, stringing conductors and inspecting damage from Storms.",
      link: "/solutions/ondemand",
      img: Ondemand
    },
  ];


  export const platformServicesList: platformService[] = [
    {
      index: 1,
      name: "Onboard",
      description: "Provide raw existing geospatial data, inspection data and set inspection criteria",
      img: Onboard
    },
    {
      index: 2,
      name: "Plan",
      description: "Using this (and other) data, auto–generate optimal takeoff points to minimize field time and determine access trails and potential hazard",
      img: Plan
    },
    {
      index: 3,
      name: "Collect",
      description: "HD imagery and video, all weather capability, 200X zoom, infrared, Lidar mapping, live-streaming data collection, geospatial data",
      img: Collect
    },
    {
      index: 4,
      name: "Refine",
      description: "Transform raw data across different types into clean data assets ready for use ",
      img: Refine
    },
    {
      index: 5,
      name: "Enhance",
      description: "Label newly transformed data to match inspection criteria",
      img: Enhance
    },
    {
      index: 6,
      name: "Visualize",
      description: "View, query and inspect results in a scalable, searchable database",
      img: Visualize
    },
    {
      index: 7,
      name: "Analyze",
      description: "Run models and analytics to identify critical areas",
      img: Analyze
    },
  ]