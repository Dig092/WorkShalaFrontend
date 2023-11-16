import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import heroBg from "./assets/images/Coursesbg.png";
import rightArrow from "./assets/images/rightArrow.png";
import star from "./assets/icons/star.png";
import rightA from "./assets/images/rightA.png";
import person from "./assets/icons/person.png";

export default function Courses() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch("https://courses-api-hrph.onrender.com", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

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

      <div className="flex flex-col w-full mb-16">
        <h1 className="m-16 font-semibold text-2xl">Courses Categories</h1>

        <div className="flex justify-evenly">
          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black hover:bg-white"></div>
            <h1 className="text-lg font-medium ">UI/UX Designing</h1>
            <h3 className="m-4 text-center ">
              There are 90 Courses available for this Domain
            </h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E]  hover:bg-[#FF5E6E] hover:text-white rounded-md">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">Web Development</h1>
            <h3 className="m-4 text-center">
              There are 90 Courses available for this Domain
            </h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">App Development</h1>
            <h3 className="m-4 text-center">
              There are 90 Courses available for this Domain
            </h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">Machine Learning</h1>
            <h3 className="m-4 text-center">
              There are 90 Courses available for this Domain
            </h3>
          </div>

          <div className="flex flex-col w-60 h-64 items-center justify-center border border-[#FF5E6E] rounded-md hover:bg-[#FF5E6E] hover:text-white">
            <div className="w-16 h-16 m-4 rounded-full bg-black"></div>
            <h1 className="text-lg font-medium">Blockchain Technology</h1>
            <h3 className="m-4 text-center">
              There are 90 Courses available for this Domain
            </h3>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-16 py-8 bg-[#FFF6F9]">
        <h1 className="font-semibold text-2xl">Courses For You</h1>
        <button onClick={()=>navigate("/CoursesFull")}><img className="w-8" src={rightA} alt="" /></button>
      </div>

      <div className="flex justify-center items-center w-full bg-[#FFF6F9]">
        <div className="w-3/4 h-full grid grid-cols-4 gap-16 mt-16 mb-16 mr-16 ">
          {posts.map((post) => (
            <div className="flex flex-col items-center  snap-start border rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <div className="w-64 h-32 bg-[#FFE5ED] rounded-md "></div>
              <h1 className="text-lg font-semibold m-4">{post.title}</h1>
              <h1 className="text-xs pl-4 ">{post.description}</h1>
              <div className="w-60 h-0.5 mt-3 bg-[#FFE5ED]"></div>
              <div className="w-full h-16 px-4 flex items-center justify-between">
                <div>{post.type}</div>
                <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={star} alt="" />
                    <h1 className="text-xs">{post.rating}</h1>
                    <img className="w-4 h-4" src={person} alt="" />
                    <h1 className="text-xs">{post.reviewcount}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
