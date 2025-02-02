"use client";
import React, { useState, useEffect } from "react";
import aLogo from "../../public/assets/alogo.svg";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  const [togolMenu, setTogolMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
        setTimeout(() => setIsFixed(true), 300); // Fix navbar after smooth transition
      } else {
        setIsScrolled(false);
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:px-[100px] px-4">
      <div
        className={`max-w-screen-2xl mx-auto transition-all duration-500 ${
          isFixed
            ? "fixed top-0 left-0 right-0 z-[1000] bg-[#0A0A0A] shadow-lg "
            : isScrolled
            ? "translate-y-[-20px] opacity-0"
            : "translate-y-0"
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
                {["Home", "About", "Skills", "Projects"].map((item) => (
                  <li
                    key={item}
                    className="text-[17px] font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 transition-transform duration-300 transform-origin-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Menu */}
            <div
              className={`absolute top-[58px] right-[35px] z-[1000] py-4 px-12 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out ${
                togolMenu
                  ? "opacity-100 bg-black md:bg-transparent translate-y-0 scale-100"
                  : "opacity-0 translate-y-[-20px] scale-95 pointer-events-none"
              }`}
            >
              <div className="md:hidden block">
                <ul className="flex flex-col gap-4">
                  {["Home", "About", "Skills", "Projects"].map((item) => (
                    <li
                      key={item}
                      className="text-[17px] text-center font-semibold pb-2 text-transparent bg-gradient-to-r from-[#1A5685] to-[#63c7ee] bg-clip-text hover:scale-105 transition-transform duration-300 transform-origin-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Icon */}
            <div
              onClick={() => setTogolMenu(!togolMenu)}
              className="mb-2 md:hidden block cursor-pointer"
            >
              <h2 className="text-blue-500 text-[22px]">
                <RiMenu3Fill />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
