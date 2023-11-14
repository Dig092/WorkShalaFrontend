import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import heroBg from "./assets/images/Coursesbg.png";
import rightArrow from "./assets/images/rightArrow.png";

export default function Courses() {
  return (
    <>
      <NavBar />

      <div className="flex">
        <div className="flex flex-col justify-center p-16 w-2/5 ">
          <h1 className="font-semibold text-4xl mb-5">
            Learn on Your <span className="text-[#FF5E6E]">Sche</span>dule
          </h1>
          <h3 className="text-sm font-regular mb-8">
            Study any topic, anytime explore thousands of courses for the lowest
            price ever!
          </h3>
          <input
            className="border p-2 rounded-md mb-8"
            type="text"
            placeholder="What do you want to learn?"
          />
          <div className="flex items-center gap-2 ml-1">
            <button className="bg-[#FF5E6E] text-sm px-8 py-2 rounded-lg text-white">
              Search
            </button>
            <img className="w-8 pt-2" src={rightArrow} alt="" />
          </div>
        </div>
        <img className="w-3/5" src={heroBg} alt="" />
      </div>

      <div className="flex flex-col w-full">
        <h1 className="m-16 font-semibold text-2xl">Courses Categories</h1>

        <div className="flex justify-evenly">

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black hover:bg-white"></div>
            <h1 className="text-lg font-medium ">UI/UX Designing</h1>
            <h3 className="m-4 text-center ">There are 90 Courses available for this Domain</h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E]  hover:bg-[#FF5E6E] hover:text-white rounded-md">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">Web Development</h1>
            <h3 className="m-4 text-center">There are 90 Courses available for this Domain</h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">App Development</h1>
            <h3 className="m-4 text-center">There are 90 Courses available for this Domain</h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">Machine Learning</h1>
            <h3 className="m-4 text-center">There are 90 Courses available for this Domain</h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">Blockchain Technology</h1>
            <h3 className="m-4 text-center">There are 90 Courses available for this Domain</h3>
          </div>

        </div>
      </div>

      <div>

      </div>
      
      <Footer/>
    </>
  );
}
