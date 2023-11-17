import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import star from "./assets/icons/star.png";
import person from "./assets/icons/person.png";

export default function CoursesFull() {
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

    fetch(
      "https://courseapi-s0hm.onrender.com/recommend/blockchain",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data && Array.isArray(data.courses)) {
          setCourses(data.courses);
        } else {
          setCourses([]);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />

      <div className="w-full px-16 py-8 text-3xl font-semibold bg-[#FFF6F9]">
        Courses For You
      </div>
      <div className="flex justify-center items-center w-full bg-[#FFF6F9]">
        <div className="w-3/4 h-full grid grid-cols-4 gap-16 mt-16 mb-16 mr-16 ">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div className="flex flex-col items-center  snap-start border rounded-md flex-shrink-0 w-64 h-80 mx-4">
                <div className="w-64 h-32 bg-[#FFE5ED] rounded-md "></div>
                <h1 className="text-lg font-semibold m-4">{course}</h1>
                <h1 className="text-xs pl-4 ">
                  Learn to design data models, build data warehouses and data
                  lakes, automate data pipelines, and manage massive datasets.
                </h1>
                <div className="w-60 h-0.5 mt-3 bg-[#FFE5ED]"></div>
                <div className="w-full h-16 px-4 flex items-center justify-between">
                  <div>Free</div>
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={star} alt="" />
                    <h1 className="text-xs">4.5</h1>
                    <img className="w-4 h-4" src={person} alt="" />
                    <h1 className="text-xs">123</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No Courses available</div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
