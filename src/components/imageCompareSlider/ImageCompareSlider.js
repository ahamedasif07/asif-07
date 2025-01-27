"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import beforeImage from "../../../public/assets/asif13_image-.png";

const ImageComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseMove = (event) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const newPosition = (offsetX / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setSliderPosition(newPosition);
    }
  };

  return (
    <div className="cursor-pointer">
      <div
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        className="relative border-2 border-red-500 w-full max-w-[500px] mx-auto h-[400px] overflow-hidden group"
      >
        {/* Before Image */}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <Image
            src={beforeImage}
            alt="Before Image"
            layout="fill"
            objectFit="contain" // Ensures the image resizes without being cropped
          />
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 flex justify-center items-center overflow-hidden"
          style={{
            width: `${sliderPosition}%`,
          }}
        >
          <Image
            src={beforeImage}
            alt="After Image"
            layout="fill"
            objectFit="contain" // Prevents cropping and centers the image
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 h-full w-1 bg-gray-800 group-hover:cursor-col-resize"
          style={{
            left: `${sliderPosition}%`,
          }}
        >
          <div className="absolute inset-y-0 -left-3 flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-lg group-hover:scale-110 transform transition duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
