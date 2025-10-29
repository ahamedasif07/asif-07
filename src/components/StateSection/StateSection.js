"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef(null);

  const [webDevSkill, setWebDevSkill] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [projects, setProjects] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  // Animate when in view, reset when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStat(setWebDevSkill, 94, 25);
          animateStat(setLanguages, 12, 100);
          animateStat(setProjects, 17, 120);
        } else {
          // Reset when leaving view
          setWebDevSkill(0);
          setLanguages(0);
          setProjects(0);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animateStat = (setter, targetValue, speed) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setter(count);
      if (count >= targetValue) {
        clearInterval(interval);
      }
    }, speed);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b  from-black via-gray-900 to-black py-16"
    >
      <div className="">
        <div className="grid grid-cols-1 lg:px-[120px] md:px-[80px] sm:px[30px] px-4  mx-auto border border-blue-600 sm:grid-cols-3 gap-8 text-center text-white">
          {/* Stat 1 */}
          <div data-aos="zoom-in">
            <h2 className="text-6xl font-bold text-blue-600">{webDevSkill}%</h2>
            <p className="mt-4 text-gray-200 text-lg">
              Web Development skills
              <br />
              gained in my Development life
            </p>
          </div>
          {/* Stat 2 */}
          <div data-aos="zoom-in">
            <h2 className="text-6xl font-bold text-blue-600">{languages}+</h2>
            <p className="mt-4 text-gray-200 text-lg">
              Provide Programming
              <br />
              language & Library
            </p>
          </div>
          {/* Stat 3 */}
          <div data-aos="zoom-in">
            <h2 className="text-6xl font-bold text-blue-600">{projects}+</h2>
            <p className="mt-4 text-gray-200 text-lg">
              Projects I participated in
              <br />
              my Development life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
