import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/alogo.svg";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 ">
      <div className="max-w-screen-2xl px-4 py-[30px] mx-auto flex flex-col justify-center place-items-center">
        <Image height={100} width={100} src={logo} alt="logo"></Image>
        <p className="mt-2 text-[13px] text-gray-400">
          © 2025 Ahamed Asif. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
