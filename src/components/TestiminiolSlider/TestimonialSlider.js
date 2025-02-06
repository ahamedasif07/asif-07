"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    name: "Shoiab Sheikh Samy",
    position: "University - Student",
    feedback:
      "He is a passionate programming enthusiast, hardworking, and dedicated.",
    image:
      "https://i.ibb.co/snHdHCy/Whats-App-Image-2025-02-06-at-08-51-41-a52d4721.jpg",
  },
  {
    name: "Arif Hosen Jibon",
    position: "SSL Wireless - DevOps",
    feedback:
      "He is such a hard-working man who does not know how to give up. I know he will shine in the programming field by any means.",
    image:
      "https://i.ibb.co/YBTZpFdM/Whats-App-Image-2025-02-06-at-08-59-38-92f3b142.jpg",
  },
  {
    name: "Md Jihad",
    position: "University-Student",
    feedback:
      "Very passionate and super talented. Hardworking and punctual in his endeavors.",
    image:
      "https://i.ibb.co/7t5rXFMT/Whats-App-Image-2025-02-06-at-09-04-36-aeb6ad2c.jpg",
  },
  {
    name: "Jorna Katun",
    position: "SSL - Software Engineer",
    feedback:
      "He is such a hard-working man who does not know how to give up. Best of luck!",
    image: "https://i.ibb.co/4gmjTSk4/jorna.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-screen-2xl md:px-[140px] px-4 mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        loop={true} // Enables looping
        loopAdditionalSlides={1} // Adds additional slides to ensure smooth looping
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 p-6 h-[270px] rounded-lg shadow-lg text-center">
              <div className="relative mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  height={64}
                  width={64}
                  className="w-16 h-16 rounded-full mx-auto border-2 border-blue-600 hover:border-yellow-500"
                />
              </div>
              <h3 className="text-lg font-semibold mt-8">{testimonial.name}</h3>
              <p className="text-sm text-blue-600">{testimonial.position}</p>
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
