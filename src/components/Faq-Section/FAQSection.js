"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Distance to start the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen once or every scroll
    });
  }, []);

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Tailwind CSS, Material UI, and Vite for building modern, responsive web applications.",
    },
    {
      question: "How much experience do you have in frontend development?",
      answer:
        "I have 2.5 years of experience as a frontend web developer, working on various projects including e-commerce and restaurant websites.",
    },
    {
      question: "Do you have experience with UI/UX design?",
      answer:
        "Yes, I have experience working with Figma and CodePen to design and prototype user-friendly interfaces.",
    },
    {
      question: "What projects have you worked on?",
      answer:
        "I have developed a responsive e-commerce website and a restaurant website with animations and dynamic components.",
    },
    {
      question: "What are your core strengths as a frontend developer?",
      answer:
        "My strengths include responsive design, animation effects, state management, and API integration using React.",
    },
  ];

  return (
    <div className="md:px-[140px] px-4 mt-[50px] pb-[40px]">
      <section className="bg-[#0A0A0A]">
        <div className="max-w-screen-2xl py-10 mx-auto">
          <div className="flex justify-center pb-[25px]">
            <SectionTitle title="FAQ" />
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
              >
                <button
                  className="flex items-center justify-between w-full p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <h1 className="font-semibold text-gray-700 dark:text-white text-left">
                    {faq.question}
                  </h1>
                  <span
                    className={`rounded-full flex items-center justify-center w-8 h-8 transition-all duration-300 ${
                      openIndex === index
                        ? "text-gray-400 bg-gray-200 rotate-180"
                        : "text-white bg-blue-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {openIndex === index ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 12H6"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      )}
                    </svg>
                  </span>
                </button>

                {/* Animated Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-[500px] bg-blue-600 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-6 text-md black dark:text-gray-200">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
