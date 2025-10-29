"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const { projectName, projectDescription, image, LiveLink } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[14rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[22rem]
      rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-[1.03]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt={projectName}
        fill
        className={`object-cover transition-transform duration-700 ease-in-out ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Bottom Content */}
      <div
        className={`absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/80 to-transparent 
        transition-all duration-500 ease-in-out ${
          isHovered ? "translate-y-0" : "translate-y-2/3"
        }`}
      >
        <h2 className="text-white text-xl font-semibold relative w-fit">
          {projectName}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transition-transform duration-500 origin-left ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </h2>

        <p
          className={`text-gray-200 mt-2 text-sm transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {projectDescription}
        </p>

        <a href={LiveLink} target="_blank" rel="noopener noreferrer">
          <button
            className={`mt-3 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            View
          </button>
        </a>
      </div>
    </div>
  );
}
