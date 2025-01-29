"use client";
import React, { useState } from "react";
import ImageComparisonSlider from "../imageCompareSlider/ImageCompareSlider";

const About = () => {
  const [activeSection, setActiveSection] = useState("experience");
  return (
    <div className="md:px-[140px] px-4">
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <div className="flex border-2 border-green-600  md:justify-between justify-center items-start gap-6 w-full">
          <div className=" w-1/2  ">
            <div className="w-full flex-shrink-0  mx-auto md:mx-0 justify-center items-center ">
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
                    : "bg-gray-200 text-gray-800"
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
            <div className="mt-4 p-4 border rounded-lg bg-gray-100">
              {activeSection === "experience" ? (
                <div>
                  <h3 className="text-lg font-semibold">Experience Details</h3>
                  <p>Worked as a Frontend Developer at XYZ Company.</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold">Education Details</h3>
                  <p>Bachelor's in Computer Science from ABC University.</p>
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
