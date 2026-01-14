/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import asifImage from "../../public/assets/asif13_image-.png";

import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap"; // GSAP ইমপোর্ট করা হয়েছে
import TypingTitle from "./TypingTitel/TypingTitle";

const Hero = () => {
  const particleContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });

    // --- আগুনের ফুলকির অ্যানিমেশন লজিক ---
    const container = particleContainerRef.current;
    const particleCount = 300; // ফুলকির সংখ্যা

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "spark";
      container.appendChild(particle);

      // প্রতিটি ফুলকির আলাদা সাইজ ও পজিশন
      const size = Math.random() * 4 + 2;
      gsap.set(particle, {
        width: size,
        height: size,
        x: Math.random() * 400 - 200, // কেন্দ্র থেকে ডানে-বামে ছড়াবে
        y: Math.random() * 400 - 200, // কেন্দ্র থেকে উপরে-নিচে ছড়াবে
        opacity: Math.random(),
        backgroundColor: "#3b82f6", // নীল আগুনের ফুলকি (আপনার থিমের সাথে মিল রেখে)
        borderRadius: "50%",
        position: "absolute",
        boxShadow: "0 0 10px #60a5fa",
      });

      // অনন্তকাল ধরে চলার অ্যানিমেশন (Floating & Fading)
      gsap.to(particle, {
        x: "+=" + (Math.random() * 100 - 50),
        y: "-=" + (Math.random() * 150 + 50), // উপরের দিকে উড়ে যাবে
        opacity: 0,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        delay: Math.random() * 2,
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <div className="lg:px-[120px] md:px-[80px] sm:px[30px] px-4 mx-auto">
      <div className="relative hero overflow-hidden">
        <section className="mb-9 overflow-hidden">
          <div className="">
            <div className="md:flex justify-between min-h-[680px] items-center">
              {/* Left Section: Text */}
              <div className="md:w-1/2 mx-auto px-4 md:px-0 md:mt-[80px] md:ml-[68px] text-center lg:text-left md:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#235692]">
                  Hi, I'm Asif Hosen
                </h1>
                <div>
                  <TypingTitle />
                </div>

                <p className="text-gray-700 px-4 lg:ml-[0px] md:px-0 text-lg leading-relaxed">
                  Always love to learn something new. Love to get error and
                  handle error. If I learn something special I share this with
                  my friends. One secret about me I'm very fast learner
                  programming is my Heart.
                </p>
                <div className="flex flex-col gap-2 md:flex-row mt-6">
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 w-full bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                  >
                    Contact Me
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById("projects");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="md:ml-4 ml-0 px-6 py-3 w-full border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    My Projects
                  </button>
                </div>
              </div>

              {/* Right Section: Image with Fire Sparks */}
              <div
                data-aos="zoom-in"
                className="flex md:w-1/2 justify-center md:ml-[120px] overflow-visible lg:mt-0 relative"
              >
                {/* আগুনের ফুলকির কন্টেইনার (ছবির পেছনে থাকবে) */}
                <div
                  ref={particleContainerRef}
                  className="absolute inset-0 flex justify-center items-center z-0"
                ></div>

                <div className="absolute inset-0 mt-[130px] md:mr-[26px] flex justify-center items-center">
                  <div className="md:w-[300px] w-[250px] mt-[160px] md:mt-[200px] md:ml-[20px] h-[250px] md:h-[300px] rounded-full bg-[#275298] animate-pulseLight"></div>
                </div>

                <div className="md:w-[470px] w-[350px] h-[350px] md:h-[470px] z-10">
                  <Image
                    src={asifImage}
                    alt="Asif Hosen"
                    className="relative mt-[40px] rounded-lg"
                  />
                </div>
              </div>

              <style jsx>
                {`
                  @keyframes pulseLight {
                    0%,
                    100% {
                      box-shadow: 0 0 10px 0 rgba(59, 130, 246, 0.5),
                        0 0 30px 10px rgba(59, 130, 246, 0.4);
                    }
                    50% {
                      box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.6),
                        0 0 40px 20px rgba(59, 130, 246, 0.5);
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
