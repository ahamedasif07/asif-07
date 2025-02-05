/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import asifImage from "../../public/assets/asif13_image-.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Distance to start the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen once or every scroll
    });
  }, []);
  return (
    <div className="max-w-screen-2xl  mx-auto">
      <div className="relative hero overflow-hidden">
        {/* Bubbles Component */}

        {/* Hero Content */}
        <section className=" mb-9  overflow-hidden">
          <div className="">
            <div className="md:flex justify-between min-h-[680px]   items-center">
              {/* Left Section: Text */}
              <div className="md:w-1/2 mx-auto px-4 md:px-0  md:mt-[80px] md:ml-[68px] lg:pl-[85px] text-center lg:text-left md:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#235692]">
                  Hi, I'm Asif Hosen
                </h1>
                <h1 className="text-4xl pt-4  mx-auto text-center md:ml-0 lg:ml-0 lg:text-5xl font-bold text-gray-800">
                  <a
                    className="flex justify-center md:justify-start"
                    href="https://git.io/typing-svg"
                  >
                    <img
                      className="flex  justify-center ml-[30px] md:ml-0"
                      src="https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=46&pause=1000&color=2563EB&width=472&height=65&lines=Front-End+Developer"
                      alt="Typing SVG"
                    />
                  </a>
                </h1>

                <p className="text-gray-700 px-4     lg:ml-[0px]  md:px-0 text-lg leading-relaxed">
                  Always love to learn something new . Love to get error and
                  handle error . If I learn something special I share this with
                  my friends . One secret about me I'm very fast learner
                  programming is my Heard.
                </p>
                <div className="flex flex-col gap-2 md:flex-row mt-6">
                  <button
                    href="#contact"
                    className="px-6 py-3 w-full bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                  >
                    Contact Me
                  </button>
                  <button
                    href="#projects"
                    className="md:ml-4 ml-0h px-6 py-3 w-full border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    My Projects
                  </button>
                </div>
              </div>

              {/* Right Section: Image */}
              <div
                data-aos="zoom-in"
                className="flex md:w-1/2 justify-center md:ml-[120px] overflow-hidden lg:mt-0 relative"
              >
                <div className="absolute inset-0 mt-[130px] md:mr-[26px] flex justify-center items-center">
                  <div className="md:w-[300px] w-[250px]  mt-[160px] md:mt-[200px] md:ml-[20px] h-[250px] md:h-[300px] rounded-full bg-[#275298] animate-pulseLight"></div>
                </div>
                <div className="md:w-[470px]  w-[350px] h-[350px] md:h-[470px]">
                  <Image
                    src={asifImage}
                    alt="Asif Hosen"
                    className="relative z-10 md:ml-[0px] mt-[40px]  rounded-lg "
                  />
                </div>
              </div>

              <style jsx>
                {`
                  @keyframes pulseLight {
                    0% {
                      box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.5),
                        0 0 30px 10px rgba(59, 130, 246, 0.4),
                        0 0 60px 20px rgba(59, 130, 246, 0.3);
                    }
                    50% {
                      box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.6),
                        0 0 40px 20px rgba(59, 130, 246, 0.5),
                        0 0 80px 40px rgba(59, 130, 246, 0.4);
                    }
                    100% {
                      box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.5),
                        0 0 30px 10px rgba(59, 130, 246, 0.4),
                        0 0 60px 20px rgba(59, 130, 246, 0.3);
                    }
                  }
                  .animate-pulseLight {
                    animation: pulseLight 2s infinite;
                  }
                `}
              </style>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
