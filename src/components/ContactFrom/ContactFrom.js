"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaGrimace } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Distance to start the animation
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen once or every scroll
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:mx-[140px] px-4 ">
      <div className="flex justify-center mt-[115px] pb-[55px]">
        <SectionTitle title="CONTACT ME" />
      </div>
      <div
        data-aos="fade-up"
        className=" flex flex-col max-w-screen-2xl items-center justify-center py-5 "
      >
        <form
          className="bg-gray-800 border-2 flex md:flex-row flex-col gap-5 md:gap-[40px] items-center border-blue-600 bg-transparent p-5 md:p-10 rounded-lg shadow-lg w-full max-w-[800px] "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5">
            {/* Email */}
            <a href="mailto:ahamedasif01729@gmail.com">
              <div className="px-4 text-center py-[10px] border-[2px] border-blue-600 cursor-pointer">
                <h3 className="text-gray-400 text-[26px] pb-[6px] flex justify-center">
                  <MdOutlineEmail />
                </h3>
                ahamedasif01729@gmail.com
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ahamedasif07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="px-4 py-[10px] text-center border-[2px] border-blue-600 cursor-pointer">
                <h3 className="text-gray-400 text-[26px] pb-[6px] flex justify-center">
                  <FaGithub />
                </h3>
                ahamedasif07
              </div>
            </a>

            {/* WhatsApp */}
            <a href="tel:+8801729149634">
              <div className="px-4 text-center py-[10px] border-[2px] border-blue-600 cursor-pointer">
                <h3 className="text-gray-400 text-[26px] pb-[6px] flex justify-center">
                  <FaWhatsapp />
                </h3>
                +8801729149634
              </div>
            </a>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-200">
                <span className="text-gray-200">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-200">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-200">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-200">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 h-32 bg-gray-800 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-blue-500 text-gray-200 rounded-lg text-lg hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
