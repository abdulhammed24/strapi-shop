import React, { useState } from "react";
import { MdOutlineEast, MdOutlineWest } from "react-icons/md";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-screen h-[100vh_-_80px] relative overflow-hidden">
      <div
        className="w-[300vw] h-[70vh] flex transition-all duration-100 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={data[0]}
          alt="strapi-shop"
          className="w-screen h-full object-cover"
        />
        <img
          src={data[1]}
          alt="strapi-shop"
          className="w-screen h-full object-cover"
        />
        <img
          src={data[2]}
          alt="strapi-shop"
          className="w-screen h-full object-cover"
        />
      </div>
      <div className="w-fit flex absolute left-0 right-0 bottom-[100px] gap-[10px] m-auto">
        <div
          className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border border-solid border-[#fff] bg-white"
          onClick={prevSlide}
        >
          <MdOutlineWest size={20} color="#0000ff" />
        </div>
        <div
          className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border border-solid border-[#fff] bg-white"
          onClick={nextSlide}
        >
          <MdOutlineEast size={20} color="#0000ff" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
