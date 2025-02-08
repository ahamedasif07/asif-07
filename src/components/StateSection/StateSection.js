"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function StatsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // State for the stats
  const [webDevSkill, setWebDevSkill] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
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

    animateStat(setWebDevSkill, 94, 25); // 94% Web Dev skill
    animateStat(setLanguages, 12, 100); // 12+ Languages
    animateStat(setProjects, 17, 120); // 10+ Projects
  }, []);

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16">
      <div className="max-w-screen-2xl md:px-[70px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
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
