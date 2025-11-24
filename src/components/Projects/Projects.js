"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [filter, setFilter] = useState("all"); // 'all', 'live', or 'working'

  const projects = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/20sRZcg7/459318469-510183361732201-973057694240494391-n.jpg",
      projectName: "Gorur Ghash",
      projectDescription:
        "A modern e-commerce platform built with React.js and Tailwind CSS, featuring a fully responsive design, product filtering, and a seamless checkout experience.",
      LiveLink: "https://project-gorur-ghash-d7b9.vercel.app/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/fV87XKLh/Screenshot-33.png",
      projectName: "Sailor",
      projectDescription:
        "Sailor — A fully functional fashion e-commerce website currently in development. It features modern UI/UX design, category filtering, and React.js-based performance optimization.",
      LiveLink: "https://seilor-project-cu2a.vercel.app/", // Add real link when ready
      isLive: false,
      isWorking: true,
    },

    {
      id: 3,
      image: "https://i.ibb.co.com/qYcSsnQj/Screenshot-31.png",
      projectName: "Sharif Bering",
      projectDescription:
        "An e-commerce website for mechanical products built with React.js, featuring product listings, shopping cart functionality, and a smooth user experience for buyers and sellers.",
      LiveLink: "https://sbmbd.net/",
      isLive: true,
      isWorking: false,
    },
    {
      id: 4,
      image: "https://i.ibb.co/bMbKVHSG/Screenshot-45.png",
      projectName: "Frish Gosory",
      projectDescription:
        "Frish Gosory — A modern e-commerce shop template built with React.js and Tailwind CSS, offering fresh grocery products, responsive design, category filtering, and a smooth shopping experience.",
      LiveLink: "https://project-fresh-grocery.vercel.app/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/gbPXf1T5/Screenshot-20.png",
      projectName: "Scapesync",
      projectDescription:
        "This project is a fully responsive Next.js application converted from a Figma design. The goal was to transform the static UI into a dynamic, production-ready web app with user authentication (Login & Registration) and API connectivity. It ensures a smooth user experience with modern design, optimized performance, and clean code structure.",
      LiveLink: "https://scapesync-mauve.vercel.app/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 6,
      image: "https://i.ibb.co/Df6FMcvQ/image-resize.jpg",
      projectName: "Sultan Dine",
      projectDescription:
        "A visually appealing restaurant website created with React.js, featuring an interactive menu, reservation system, and engaging animations for a dynamic user experience.",
      LiveLink: "https://ak-asif-sultan-dine.surge.sh/",
      isLive: false,
      isWorking: false,
    },
    {
      id: 7,
      image:
        "https://i.ibb.co.com/gLFCzqmL/324268690-3333959940256153-6463376740799483701-n.jpg",
      projectName: "Diagram",
      projectDescription:
        "An advanced online store using React.js with a user-friendly UI, integrated payment gateway, and optimized performance for a smooth shopping experience.",
      LiveLink: "http://ak-asif-diagram.surge.sh",
      isLive: false,
      isWorking: false,
    },
  ];

  // ✅ Filter logic
  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "live"
      ? projects.filter((p) => p.isLive)
      : projects.filter((p) => p.isWorking);

  return (
    <div className="lg:px-[120px] md:px-[80px] sm:px-[30px] px-4 mx-auto overflow-hidden">
      <div className="py-[60px] mx-auto">
        <div className="flex justify-center mt-[80px] mb-[20px]">
          <SectionTitle title="MY PROJECTS" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mt-20 mb-8">
          <button
            className={`px-6 py-2 rounded-lg ${
              filter === "all"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>

          <button
            className={`px-6 py-2 rounded-lg ${
              filter === "live"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("live")}
          >
            Live Projects
          </button>

          <button
            className={`px-6 py-2 rounded-lg ${
              filter === "working"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("working")}
          >
            Working Projects
          </button>
        </div>

        {/* Project Grid */}
        <div
          data-aos="fade-up"
          className="grid place-items-center items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4 md:px-0"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
