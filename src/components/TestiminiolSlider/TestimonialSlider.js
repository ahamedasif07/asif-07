// components/TestimonialSlider.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Hasan",
    position: "University - Student",
    feedback:
      "He is a passionate programming enthusiast, hardworking, and dedicated.",
    image: "/hasan.jpg",
  },
  {
    name: "Monowar Islam",
    position: "SSL Wireless - DevOps",
    feedback:
      "He is such a hard-working man who does not know how to give up. I know he will shine in the programming field by any means.",
    image: "/monowar.jpg",
  },
  {
    name: "Jorna Katun",
    position: "SSL - Software Engineer",
    feedback:
      "He is such a hard-working man who does not know how to give up. Best of luck!",
    image: "/jorna.jpg",
  },
  {
    name: "Rakib Uddin",
    position: "Islamic University",
    feedback:
      "Very passionate and super talented. Hardworking and punctual in his endeavors.",
    image: "/rakib.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-screen-2xl  md:px-[140px] px-4 mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper "
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="">
            <div className="bg-gray-800 p-6 h-[270px] rounded-lg shadow-lg text-center">
              <div className="relative mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto border-2 border-orange-500"
                />
                <div className="absolute -bottom-4 right-10 text-orange-500 text-4xl">
                  &#8220;
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-8">{testimonial.name}</h3>
              <p className="text-sm text-orange-400">{testimonial.position}</p>
              <p className="mt-4 text-sm text-gray-300">
                {testimonial.feedback}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
