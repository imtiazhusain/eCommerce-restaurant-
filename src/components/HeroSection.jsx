import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="container pt-8 ">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            src="./images/hero__1.webp"
            alt="hero image"
            className="w-full h-full rounded-lg object-cover"
          />

          <div className="absolute ml-8 sm:ml-16 top-[50%] -translate-y-[50%] sm:sapce-y-4 max-w-[470px]">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="font-bold text-2xl sm:text-4xl md:text-6xl">
              Dried Frutis Best Quality
            </h2>

            <p className="text-xl sm:pt-8 pt-4 text-gray-500">Starting At</p>
            <div className="font-medium text-red-500 text-2xl sm:text-4xl  pb-4 sm:pb-8">
              $50
            </div>

            <div className="text-white bg-accentDark hover:bg-accent rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="./images/hero__2.webp"
            alt=""
            className="w-full h-full rounded-lg"
          />

          <div className="absolute ml-8 sm:ml-16 top-[50%] -translate-y-[50%] sm:sapce-y-4 max-w-[470px]">
            <h2 className="font-bold text-2xl sm:text-3xl ">
              Best Yummy Pizza
            </h2>

            <p className="text-xl sm:pt-8 pt-4 text-gray-500">Starting At</p>
            <div className="font-medium text-red-500 text-2xl sm:text-4xl  pb-4 sm:pb-8">
              $40
            </div>

            <div className="text-white bg-accentDark hover:bg-accent rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="./images/hero__3.webp"
            alt=""
            className="w-full h-full rounded-lg"
          />

          <div className="absolute ml-8 sm:ml-16 top-[50%] -translate-y-[50%] sm:sapce-y-4 max-w-[470px]">
            <h2 className="font-bold text-2xl sm:text-3xl ">
              Best Yummy Chips
            </h2>

            <p className="text-xl sm:pt-8 pt-4 text-gray-500">Starting At</p>
            <div className="font-medium text-red-500 text-2xl sm:text-4xl  pb-4 sm:pb-8">
              $10
            </div>

            <div className="text-white bg-accentDark hover:bg-accent rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
