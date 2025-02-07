import About from "@/components/about/About";
import ContactForm from "@/components/ContactFrom/ContactFrom";
import Hero from "@/components/Hero";
import ImageComparisonSlider from "@/components/imageCompareSlider/ImageCompareSlider";
import Projects from "@/components/Projects/Projects";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SkillsSection from "@/components/Skills/SkillsSection";
import StatsSection from "@/components/StateSection/StateSection";
import TestimonialSlider from "@/components/TestiminiolSlider/TestimonialSlider";
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
      <div className="flex justify-center mt-[120px] mb-[50px]">
        <SectionTitle title="MY PROJECTS" />
      </div>
      {/* project cmponents */}
      <div>
        <Projects />
      </div>
      {/* my Title*/}
      <div className="flex justify-center mt-[70px] mb-[50px]">
        <SectionTitle title="MY SKILLS" />
      </div>
      {/* skils section */}
      <div>
        <SkillsSection />
      </div>
      <div className="flex justify-center mt-[90px] pb-[60px]">
        <SectionTitle title="IT EXPERT INSIGHTS" />
      </div>
      <div>
        <TestimonialSlider />
      </div>
      {/* contact title */}

      <div className="flex justify-center mt-[120px] pb-[60px]">
        <SectionTitle title="CONTACT ME" />
      </div>

      {/* contsct from */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
