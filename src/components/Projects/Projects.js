"use client";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Distance to start the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen once or every scroll
    });
  }, []);
  const projects = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/20sRZcg7/459318469-510183361732201-973057694240494391-n.jpg",
      projectName: "Gorur Ghash",
      projectDescription:
        "A modern e-commerce platform built with React.js and Tailwind CSS, featuring a fully responsive design, product filtering, and a seamless checkout experience.",
      LiveLink: "https://project-gorur-ghash-d7b9.vercel.app/",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/gLFCzqmL/324268690-3333959940256153-6463376740799483701-n.jpg",
      projectName: "Diagram",
      projectDescription:
        "An advanced online store using React.js with a user-friendly UI, integrated payment gateway, and optimized performance for a smooth shopping experience.",
      LiveLink: "http://ak-asif-diagram.surge.sh",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/Df6FMcvQ/image-resize.jpg",
      projectName: "Sultan Dine",
      projectDescription:
        "A visually appealing restaurant website created with React.js, featuring an interactive menu, reservation system, and engaging animations for a dynamic user experience.",
      LiveLink: "https://ak-asif-sultan-dine.surge.sh/",
    },
    {
      id: 4,
      image: "https://i.ibb.co/bMbKVHSG/Screenshot-45.png",
      projectName: "Frish Gosory",
      projectDescription:
        "Frish Gosory — A modern e-commerce shop template built with React.js and Tailwind CSS, offering fresh grocery products, responsive design, category filtering, and a smooth shopping experience.",
      LiveLink: "https://project-fresh-grocery.vercel.app/",
    },
    {
      id: 5,
      image:
        "https://i.ibb.co.com/gLFCzqmL/324268690-3333959940256153-6463376740799483701-n.jpg",
      projectName: "Diagram",
      projectDescription:
        "An advanced online store using React.js with a user-friendly UI, integrated payment gateway, and optimized performance for a smooth shopping experience.",
      LiveLink: "http://ak-asif-diagram.surge.sh",
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/Df6FMcvQ/image-resize.jpg",
      projectName: "Sultan Dine",
      projectDescription:
        "A visually appealing restaurant website created with React.js, featuring an interactive menu, reservation system, and engaging animations for a dynamic user experience.",
      LiveLink: "https://project-gorur-ghash-d7b9.vercel.app/",
    },
  ];

  return (
    <div className="md:px-[140px] overflow-hidden">
      <div className="max-w-screen-2xl  py-[60px] mx-auto ">
        <div className="flex justify-center mt-[80px] mb-[60px]">
          <SectionTitle title="MY PROJECTS" />
        </div>
        <div
          data-aos="fade-up"
          className="grid place-items-center items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4 md:px-0"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
