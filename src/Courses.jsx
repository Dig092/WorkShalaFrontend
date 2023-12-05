import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import heroBg from "./assets/images/Coursesbg.png";
import rightArrow from "./assets/images/rightArrow.png";
import rightA from "./assets/images/rightA.png";
import star from "./assets/icons/star.png";
import person from "./assets/icons/person.png";

export default function Courses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch("https://course2.onrender.com/recommend/javascript", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourses(data.courses);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5">
          <div className="p-4 md:p-16">
            <h1 className="font-semibold text-4xl mb-5">
              Learn on Your <span className="text-[#FF5E6E]">Schedule</span>
            </h1>
            <h3 className="text-sm font-regular mb-8">
              Study any topic, anytime explore thousands of courses for the
              lowest price ever!
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
        </div>
        <img className="md:w-3/5 w-full" src={heroBg} alt="" />
      </div>

      <div className="flex flex-col w-full mb-16">
        <h1 className="m-4 md:m-16 font-semibold text-xl md:text-2xl">
          Courses Categories
        </h1>

        <div className="flex flex-wrap justify-evenly">
          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white mb-4">
          <div className="w-16 h-16 m-4 rounded-full bg-black hover:bg-white"></div>
            <h1 className="text-lg font-medium ">UI/UX Designing</h1>
            <h3 className="m-4 text-center ">
              There are 90 Courses available for this Domain
            </h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white mb-4">
          <div className="w-16 h-16 m-4 rounded-full bg-black hover:bg-white"></div>
            <h1 className="text-lg font-medium ">Web Development</h1>
            <h3 className="m-4 text-center ">
              There are 90 Courses available for this Domain
            </h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white mb-4">
          <div className="w-16 h-16 m-4 rounded-full bg-black hover:bg-white"></div>
            <h1 className="text-lg font-medium ">Blockchain Developer</h1>
            <h3 className="m-4 text-center ">
              There are 90 Courses available for this Domain
            </h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white mb-4">
          <div className="w-16 h-16 m-4 rounded-full bg-black hover:bg-white"></div>
            <h1 className="text-lg font-medium ">App Developer</h1>
            <h3 className="m-4 text-center ">
              There are 90 Courses available for this Domain
            </h3>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 md:px-16 py-8 bg-[#FFF6F9]">
        <h1 className="font-semibold text-xl md:text-2xl">Courses For You</h1>
        <button onClick={() => navigate("/CoursesFull")}>
          <img className="w-8" src={rightA} alt="" />
        </button>
      </div>

      <div className="flex justify-center items-center w-full bg-[#FFF6F9]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:mt-16 mb-16">
          {Array.isArray(courses) &&
            courses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col items-start border rounded-md w-full md:w-64 mb-4"
              >
                {/* ... (Course card content) ... */}
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
