import React from "react";
import ImageComparisonSlider from "../imageCompareSlider/ImageCompareSlider";

const About = () => {
  return (
    <div className="md:px-[140px] px-4">
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <div className="flex flex-wrap md:justify-between justify-center items-start gap-6 w-full">
          <div className="flex-shrink-0 w-full mx-auto md:mx-0 justify-center items-center max-w-[500px]">
            <ImageComparisonSlider />
          </div>
          <div className="w-full max-w-[300px]">
            <div className="flex flex-col gap-2 md:flex-row ">
              <button
                href="#contact"
                className="px-6 py-3 w-full bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
              >
                Contact Me
              </button>
              <button
                href="#projects"
                className="md:ml-4 ml-0 px-6 py-3 w-full border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
              >
                My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
