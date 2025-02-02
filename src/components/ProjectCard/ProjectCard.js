"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const { projectName, projectDescription, image } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full  max-w-[31.875rem] h-[28.125rem] rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt="Photo of Cartagena's cathedral"
        layout="fill"
        objectFit="cover"
        className={`transition-transform duration-500 ease-in-out ${
          isHovered ? "scale-125" : ""
        }`}
      />

      <div
        className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-y-0" : "translate-y-2/3"
        }`}
      >
        <h2 className="text-white text-2xl font-bold relative w-fit">
          {projectName}
          <span
            className={`absolute left-0 -bottom-2 h-1 w-full bg-blue-500 transition-all duration-500 ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </h2>
        <p
          className={`text-white mt-2 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {projectDescription}
        </p>
        <button
          className={`mt-4 px-4 py-2 text-gray-200 font-bold text-lg bg-blue-500 rounded-md transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
