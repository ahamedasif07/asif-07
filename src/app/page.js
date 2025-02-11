import About from "@/components/about/About";
import ContactForm from "@/components/ContactFrom/ContactFrom";
import FAQSection from "@/components/Faq-Section/FAQSection";
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
    <div className="relative">
      {/* hero components */}
      <Hero />
      <div className="absolute right-[100px] top-[300px] ">
        <div className="flex flex-col gap-[10px] fixed z-20 border-[2px] p-2 border-blue-600 ">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="w-[26px] r-[26px]nded-sm h-6"
            />
          </a>
        </div>
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
