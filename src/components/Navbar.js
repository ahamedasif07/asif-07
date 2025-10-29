"use client";
import React, { useState, useEffect } from "react";
import aLogo from "../../public/assets/alogo.svg";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [togolMenu, setTogolMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:px-[120px] md:px-[80px] sm:px[30px] px-4  mx-auto">
      <div
        className={` mx-auto transition-all duration-500 ${
          isFixed
            ? "fixed top-0 left-0 right-0 z-[1000] bg-[#0A0A0A] shadow-lg"
            : ""
        }`}
      >
        <div
          className={`flex justify-between items-center py-3 ${
            isFixed ? "bg-[#0A0A0A] md:px-[70px] px-4 shadow-lg" : ""
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <Image height={50} width={50} src={aLogo} alt="logo" />
            <h2 className="text-[30px] font-bold text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text">
              SIF
            </h2>
          </div>

          {/* Menu Section */}
          <div className="flex gap-4 justify-center items-center">
            {/* Desktop Menu */}
            <div className="md:block hidden">
              <ul className="flex items-center gap-7">
                {[
                  { name: "Home", id: "hero" },
                  { name: "About", id: "about" },
                  { name: "Projects", id: "projects" },
                  { name: "Skills", id: "skills" },
                  { name: "Contact", id: "contact" },
                  { name: "FAQ", id: "faq" },
                ].map((item) => (
                  <li
                    key={item.id}
                    className="text-[17px] font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 transition-transform duration-300 transform-origin-center cursor-pointer"
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Menu */}
            <div className="z-[10000] ">
              <div
                className={`absolute top-[62px] w-full right-[5px] z-[10000] py-4 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out ${
                  togolMenu
                    ? "opacity-100 bg-black md:bg-transparent translate-y-0 scale-100"
                    : "opacity-0 translate-y-[-20px] scale-95 pointer-events-none"
                }`}
              >
                <div className="md:hidden block">
                  <ul className="flex flex-col gap-4">
                    {[
                      { name: "Home", id: "hero" },
                      { name: "About", id: "about" },
                      { name: "Projects", id: "projects" },
                      { name: "Skills", id: "skills" },
                      { name: "Contact", id: "contact" },
                      { name: "FAQ", id: "faq" },
                    ].map((item) => (
                      <li
                        onClick={() => {
                          document.getElementById(item.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          setTogolMenu(false);
                        }}
                        key={item.id}
                        className="text-[17px] text-center font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 transition-transform duration-300 transform-origin-center"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Icon */}
            <div
              onClick={() => setTogolMenu(!togolMenu)}
              className="mb-2 md:hidden block cursor-pointer"
            >
              <h2 className="text-blue-500 text-[22px]">
                {togolMenu ? <RxCross2 /> : <RiMenu3Fill />}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
