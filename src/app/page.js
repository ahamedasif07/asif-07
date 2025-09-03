import About from "@/components/about/About";
import ContactForm from "@/components/ContactFrom/ContactFrom";
import FAQSection from "@/components/Faq-Section/FAQSection";
import Hero from "@/components/Hero";
import ImageComparisonSlider from "@/components/imageCompareSlider/ImageCompareSlider";
import Projects from "@/components/Projects/Projects";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SkillsSection from "@/components/Skills/SkillsSection";
import SocalMedia from "@/components/Socalmedia/SocalMedia";
import StatsSection from "@/components/StateSection/StateSection";
import TestimonialSlider from "@/components/TestiminiolSlider/TestimonialSlider";
import React from "react";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div id="hero" className="relative ">
      <Hero />

      <div className="absolute right-[60px] md:right-[115px] top-[100px] md:top-[280px]">
        <SocalMedia />
      </div>

      <div className="mt-[30px]" id="stats">
        <StatsSection />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div>
        <TestimonialSlider />
      </div>

      <div id="contact">
        <Toaster position="top-right" reverseOrder={false} />
        <ContactForm />
      </div>

      <div id="faq">
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
