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

const Home = () => {
  return (
    <div className="relative">
      {/* hero components */}
      <Hero />
      {/*socal media  */}
      <div className="absolute right-[60px] md:right-[115px] top-[100px] md:top-[280px] ">
        <SocalMedia />
      </div>

      {/* stats section */}
      <div className="mt-[30px]">
        <StatsSection />
      </div>
      {/* section title */}

      {/* about section */}
      <About />
      {/* scetion title my projects */}

      {/* project cmponents */}
      <div>
        <Projects />
      </div>
      {/* my Title*/}

      {/* skils section */}
      <div>
        <SkillsSection />
      </div>

      <div>
        <TestimonialSlider />
      </div>
      {/* contact title */}

      {/* contsct from */}
      <div>
        <ContactForm />
      </div>

      {/* faq section */}
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
