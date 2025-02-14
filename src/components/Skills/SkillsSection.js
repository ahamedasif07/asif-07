"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", level: 93 },
    { name: "CSS", level: 85 },
    { name: "TailwindCSS", level: 92 },
    { name: "JavaScript", level: 70 },
    { name: "React.js", level: 88 },
    { name: "Next.js", level: 65 },
    { name: "GitHub", level: 85 },
    { name: "Figma", level: 90 },
  ];
  const [progress, setProgress] = useState(
    skills.map(() => 0) // Initial state with all progress set to 0
  );

  useEffect(() => {
    // Trigger all animations simultaneously after a small delay
    const timer = setTimeout(() => {
      setProgress(skills.map((skill) => skill.level)); // Set all progress values at once
    }, 350); // Adjust delay as needed

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Distance to start the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen once or every scroll
    });
  }, []);

  return (
    <section className="text-white ">
      <div className="max-w-screen-2xl py-[40px] md:px-[140px] mx-auto px-4 text-center">
        <div className="flex justify-center mt-[35px] mb-[50px]">
          <SectionTitle title="MY SKILLS" />
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2  gap-8"
        >
          {skills.map((skill, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-lg font-medium">{progress[index]}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-[9px]">
                <div
                  className="bg-blue-500 h-[9px] rounded-full"
                  style={{
                    width: `${progress[index]}%`,
                    transition: "width 1s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
