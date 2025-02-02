import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/20sRZcg7/459318469-510183361732201-973057694240494391-n.jpg",
      projectName: "Gorur Ghash",
      projectDescription:
        "A modern e-commerce platform built with React.js and Tailwind CSS, featuring a fully responsive design, product filtering, and a seamless checkout experience.",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/gLFCzqmL/324268690-3333959940256153-6463376740799483701-n.jpg",
      projectName: "Diagram",
      projectDescription:
        "An advanced online store using React.js with a user-friendly UI, integrated payment gateway, and optimized performance for a smooth shopping experience.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/Df6FMcvQ/image-resize.jpg",
      projectName: "Sultan Dine",
      projectDescription:
        "A visually appealing restaurant website created with React.js, featuring an interactive menu, reservation system, and engaging animations for a dynamic user experience.",
    },
    {
      id: 4,
      image:
        "https://i.ibb.co.com/20sRZcg7/459318469-510183361732201-973057694240494391-n.jpg",
      projectName: "Gorur Ghash",
      projectDescription:
        "A modern e-commerce platform built with React.js and Tailwind CSS, featuring a fully responsive design, product filtering, and a seamless checkout experience.",
    },
    {
      id: 5,
      image:
        "https://i.ibb.co.com/gLFCzqmL/324268690-3333959940256153-6463376740799483701-n.jpg",
      projectName: "Diagram",
      projectDescription:
        "An advanced online store using React.js with a user-friendly UI, integrated payment gateway, and optimized performance for a smooth shopping experience.",
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/Df6FMcvQ/image-resize.jpg",
      projectName: "Sultan Dine",
      projectDescription:
        "A visually appealing restaurant website created with React.js, featuring an interactive menu, reservation system, and engaging animations for a dynamic user experience.",
    },
  ];

  return (
    <div className="md:px-[140px]">
      <div className="max-w-screen-2xl  py-[60px] mx-auto ">
        <div className="grid place-items-center items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
