"use client";
import React, { useState } from "react";
import aLogo from "../../public/assets/alogo.svg";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  const [togolMenu, setTogolMenu] = useState(false);
  return (
    <div className="max-w-screen-lg mx-auto px-10">
      <div className="flex justify-between items-center py-3 ">
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
            <ul className="flex gap-7">
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
            className={`absolute top-[58px] right-[35px] z-[1000] py-4 px-12  rounded-lg shadow-xl transform transition-all duration-500 ease-in-out ${
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
  );
};

export default NavBar;
