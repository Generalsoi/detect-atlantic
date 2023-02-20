import React, { FC } from "react";
import BlogImgOne from "../../assets/images/blogimg1.png";
import BlogImgTwo from "../../assets/images/blogimg2.png";
import UpArrow from "../../assets/images/uparrow.png";
import ArrowRight from "../../assets/images/arrow-right.png";

type blogDeets = {
  image: string;
  heading: string;
  description: string;
};

export const BlogSection: FC = () => {
  const blogDetails: blogDeets[] = [
    {
      image: BlogImgOne,
      heading: "New Challenges Require New Perspectives",
      description:
        "Climate change, aging infrastructure and increasing electricity demand - what to do?",
    },
    {
      image: BlogImgTwo,
      heading: "Building the Path to Preventative Maintenance",
      description: "A calculated approach.",
    },
  ];
  return (
    <div className="font-ibmPlexMono scroll-smooth text-white mt-20 md:mt-40">
      <div className="md:flex items-start gap-20 md:pt-40 px-4 md:pl-[40%]">
        {blogDetails.map((blogDetail, index) => (
          <div className="w-full md:w-96 mt-10 md:mt-0">
            <img
              src={blogDetail.image}
              alt="blog image"
              className="h-64 w-full md:h-96 aspect-square"
            />
            <h4 className="my-8 uppercase ">{blogDetail.heading}</h4>
            <p className="my-6 text-sm">{blogDetail.description}</p>
            <a href="#" rel="noreferrer" className="uppercase text-[#FF6108]">
              Learn More
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <div>
          <img src="" alt="" />
        </div>
        <div></div>
      </div>

      <div className="flex items-center justify-center mt-32 ">
        <button className="flex items-center justify-center gap-4 bg-[#FF6108] px-6 py-4 border-none rounded-lg">
          Contact us{" "}
          <img src={UpArrow} alt="up arrow" className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};
