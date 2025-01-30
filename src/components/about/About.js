"use client";
import React, { useEffect, useState } from "react";
import ImageComparisonSlider from "../imageCompareSlider/ImageCompareSlider";
import { FaBook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const educationData = [
    {
      schoolName: "Mymensingh Polytechnic Institute",
      examinationName: "Diploma Engineer - CST",
      gpa: "3.80",
      startDate: "Jan 2021",
      endDate: "Jan 2024",
    },
    {
      schoolName: "Batajore BM High School",
      examinationName: "SSC - Computer Technology",
      gpa: "A+",
      startDate: "Jan 2018",
      endDate: "Jan 2020",
    },
    {
      schoolName: "Batajore BM High School",
      examinationName: "JSC - General",
      gpa: "4.50",
      startDate: "Jan 2021",
      endDate: "Jan 2024",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Distance to start the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen once or every scroll
    });
  }, []);

  return (
    <div className="md:px-[140px] px-4">
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <div className="flex border-2 border-green-600  md:justify-between justify-center items-start gap-[80px] w-full">
          <div className=" w-1/2  ">
            <div className=" flex-shrink-0  mx-auto md:mx-0 justify-center items-center ">
              <ImageComparisonSlider />
            </div>
          </div>
          <div className="w-1/2 border-2 border-red-600  p-4">
            <div className="flex flex-shrink-0 flex-col gap-2 md:flex-row">
              <button
                onClick={() => setActiveSection("experience")}
                className={`px-6 py-3 w-full rounded-lg shadow-md transition duration-300 ${
                  activeSection === "experience"
                    ? "bg-blue-600 text-white"
                    : "bg-[#0A0A0A] border border-blue-600 text-white"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveSection("education")}
                className={`px-6 py-3 w-full border border-blue-600 rounded-lg transition duration-300 ${
                  activeSection === "education"
                    ? "bg-blue-600 text-white"
                    : "text-blue-600"
                }`}
              >
                Education
              </button>
            </div>

            {/* Conditional Rendering of Content */}
            <div className="mt-4  rounded-md ">
              {activeSection === "experience" ? (
                <div>
                  {/* <h3 className="text-lg font-semibold">Experience Details</h3>
                  <p>Worked as a Frontend Developer at XYZ Company.</p> */}
                  <p className="text-[14px] text-gray-300">
                    I'm a CSE student with over three years + of web development
                    experience. As a creative person and project leader, I've
                    been dedicated to learning various programming languages and
                    modern technologies.
                  </p>
                  <div className="mt-4">
                    {educationData.map((education, index) => {
                      // Define an array of AOS animations based on index positions
                      const aosEffects = ["fade-right", "fade-up", "fade-left"];

                      return (
                        <div
                          className="border flex gap-5 items-center border-blue-600 p-2 mb-2"
                          key={education.gpa}
                        >
                          <p className="text-3xl p-[10px] hover:text-gray-200 transition-all duration-300 ease-in-out hover:border-blue-600 border border-gray-300 text-blue-600">
                            <FaBook />
                          </p>
                          <div data-aos={aosEffects[index % aosEffects.length]}>
                            <h3 className="text-[15px] font-semibold text-gray-100">
                              {education.schoolName}
                            </h3>
                            <p className="text-[12px] my-[3px] text-blue-600 ">
                              {education.examinationName} ({education.gpa})
                            </p>
                            <p className="text-[12px] text-gray-300">
                              ({education.startDate}-{education.endDate})
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-[14px] text-gray-400">
                    I'm a CST student with a 4-year Diploma in Computer Science
                    and Technology. As class CR, I lead with creativity and
                    innovation, focusing on pursuing a BSC in Software
                    Engineering and modern technologies.
                  </p>
                  {/* <h3 className="text-lg font-semibold">Education Details</h3>
                  <p>Bachelor's in Computer Science from ABC University.</p> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
