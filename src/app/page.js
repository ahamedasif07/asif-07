import About from "@/components/about/About";
import Hero from "@/components/Hero";
import ImageComparisonSlider from "@/components/imageCompareSlider/ImageCompareSlider";
import Projects from "@/components/Projects/Projects";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import StatsSection from "@/components/StateSection/StateSection";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* hero components */}
      <Hero />
      {/* stats section */}
      <div className="mt-[30px]">
        <StatsSection />
      </div>
      {/* section title */}
      <div className="flex justify-center my-[100px]">
        <SectionTitle title="ABOUT ME" />
      </div>
      {/* about section */}
      <About />
      {/* scetion title my projects */}
      <div className="flex justify-center my-[100px]">
        <SectionTitle title="MY PROJECTS" />
      </div>
      {/* project cmponents */}
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
