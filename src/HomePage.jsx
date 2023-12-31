import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import heroImg from "./assets/images/heroImg.png";
import wave from "./assets/icons/wave.png";
import serviceImg from "./assets/images/servicecardImg.png";
import star from "./assets/icons/star.png";
import contestImg from "./assets/images/contestImg.png";
import calender from "./assets/icons/Calender.png";
import profile from "./assets/icons/Profile.png";

export default function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      redirect: "follow",
    };

    fetch("https://workshala-7v7q.onrender.com/companyData", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.companies);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-auto">
        <NavBar />

        {/* heroSection */}

        <div className="w-full h-full flex-shrink-0 md:flex">
          <div className="md:w-3/5 flex items-center justify-center">
            <div className="w-3/4">
              <div className="flex gap-2 mb-2">
                <img className="w-5" src={wave} />
                <h5 className="text-[#B092D3]">WELCOME TO WORKSHALA</h5>
              </div>

              <h1 className="font-bold text-xl md:text-5xl w-36 md:w-96 mb-2 ">
                Best Place To Get You Placed
              </h1>
              <h6 className="mb-4 w-112 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry-s standard dummy
                text ever since the 1500s.
              </h6>
              <div className="flex gap-3">
                <button className=" px-3 py-2 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                  Read More
                </button>
                <button className=" px-3 py-2 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                  Start Today
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-3/5">
            <img className="w-4/5" src={heroImg} alt="" />
          </div>
        </div>

        {/* services */}

        <div className="flex flex-col bg-[#FFB2CA12] w-full justify-around">
          <div className="flex flex-col items-center mt-16 mb-24">
            <h5 className="text-xs">Services</h5>
            <h2 className="text-3xl font-bold">Our Services</h2>
          </div>

          <div className="flex flex-wrap mb-24 justify-evenly mx-auto">
            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
              <img className="w-24 m-7" src={serviceImg} alt="" />
              <h2 className="font-bold text-2xl">Internships</h2>
              <h5 className="text-center text-sm m-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, vitae.
              </h5>
            </div>

            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
              <img className="w-24 m-7" src={serviceImg} alt="" />
              <h2 className="font-bold text-2xl">Jobs</h2>
              <h5 className="text-center text-sm m-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, vitae.
              </h5>
            </div>

            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
              <img className="w-24 m-7" src={serviceImg} alt="" />
              <h2 className="font-bold text-2xl">Courses</h2>
              <h5 className="text-center text-sm m-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, vitae.
              </h5>
            </div>

            <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
              <img className="w-24 m-7" src={serviceImg} alt="" />
              <h2 className="font-bold text-2xl">Placement</h2>
              <h5 className="text-center text-sm m-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, vitae.
              </h5>
            </div>
          </div>
        </div>

        {/* Companies */}

        <div className="flex flex-col w-full items-center justify-around">
          <div className="flex flex-col items-center mt-16 mb-24">
            <h5 className="text-xs">Companies</h5>
            <h2 className="text-3xl text-center font-bold">
              Featured Companies actively hiring
            </h2>
          </div>

          <div className="snap-x  flex overflow-x-auto scroll-smooth scrollbar-hide w-4/5 m-8">
            {posts.map((post) => (
              <div className="flex flex-col items-center  snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
                <div className="flex items-center justify-center w-full h-20">
                  <img
                    className="w-12 m-3 rounded-full"
                    src={post.img}
                    alt="Company Icon"
                  />
                </div>
                <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                  <h1 className="text-xs font-bold mb-1">{post.title}</h1>
                  <div className="flex items-center justify-center">
                    <img className="w-4" src={star} alt="" />
                    <h1 className="text-sm">3.3</h1>
                    <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                    <h1 className="text-sm">1k Reviews</h1>
                  </div>
                </div>
                <h1 className="text-2xl font-bold m-1">{post.title}</h1>
                <div className="w-full h-12 overflow-hidden">
                  <h1 className="text-xs text-center px-9 ">{post.about}</h1>
                </div>
                <button className=" px-8 py-2 m-8 text-xs text-white rounded bg-[#946CC3] hover:cursor-pointer hover:border hover:border-[#946CC3] hover:bg-white hover:text-black active:bg-inherit">
                  View Jobs
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/Companies")}
            className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit"
          >
            View all Companies
          </button>
        </div>

        {/* Events */}

        <div className="flex flex-col bg-[#FFB2CA12] w-full items-center justify-around mb-24">
          <div className="flex flex-col items-center mt-16 mb-24">
            <h5 className="text-xs">Events</h5>
            <h2 className="text-3xl text-center font-bold">
              Upcoming Events and Challenges
            </h2>
          </div>

          <div className="snap-x  flex overflow-x-auto scroll-smooth scrollbar-hide w-4/5 m-8">
            <div className="flex flex-col items-center snap-start border-2 border-[#B092D3] rounded-2xl flex-shrink-0 w-96 h-80 mx-4 overflow-hidden">
              <div>
                <img className="h-32" src={contestImg} alt="" />
              </div>
              <div className="w-11/12 mt-2 mb-2">
                <div
                  className="flex justify-start
                 m-2"
                >
                  <div className="w-12 h-12 bg-[#FFE5ED] rounded-md mr-3"></div>
                  <div className="flex flex-col">
                    <h1 className="text-md font-bold">Beginner Contest 46</h1>
                    <h1>Coding Ninjas</h1>
                  </div>
                </div>
                <div className="mt-5 mb-2 border-2 rounded-lg p-1">
                  <h1 className="ml-1">Data Structure and Algorithm</h1>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img className="h-5 w-5" src={calender} alt="" />
                  <h1>1 Nov, 9:00 PM</h1>
                  <img className="h-5 w-5" src={profile} alt="" />
                  <h1>474 Enrolled</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center snap-start border-2 border-[#B092D3] rounded-2xl flex-shrink-0 w-96 h-80 mx-4 overflow-hidden">
              <div>
                <img className="h-32" src={contestImg} alt="" />
              </div>
              <div className="w-11/12 mt-2 mb-2">
                <div
                  className="flex justify-start
                 m-2"
                >
                  <div className="w-12 h-12 bg-[#FFE5ED] rounded-md mr-3"></div>
                  <div className="flex flex-col">
                    <h1 className="text-md font-bold">Beginner Contest 46</h1>
                    <h1>Coding Ninjas</h1>
                  </div>
                </div>
                <div className="mt-5 mb-2 border-2 rounded-lg p-1">
                  <h1 className="ml-1">Data Structure and Algorithm</h1>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img className="h-5 w-5" src={calender} alt="" />
                  <h1>1 Nov, 9:00 PM</h1>
                  <img className="h-5 w-5" src={profile} alt="" />
                  <h1>474 Enrolled</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center snap-start border-2 border-[#B092D3] rounded-2xl flex-shrink-0 w-96 h-80 mx-4 overflow-hidden">
              <div>
                <img className="h-32" src={contestImg} alt="" />
              </div>
              <div className="w-11/12 mt-2 mb-2">
                <div
                  className="flex justify-start
                 m-2"
                >
                  <div className="w-12 h-12 bg-[#FFE5ED] rounded-md mr-3"></div>
                  <div className="flex flex-col">
                    <h1 className="text-md font-bold">Beginner Contest 46</h1>
                    <h1>Coding Ninjas</h1>
                  </div>
                </div>
                <div className="mt-5 mb-2 border-2 rounded-lg p-1">
                  <h1 className="ml-1">Data Structure and Algorithm</h1>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img className="h-5 w-5" src={calender} alt="" />
                  <h1>1 Nov, 9:00 PM</h1>
                  <img className="h-5 w-5" src={profile} alt="" />
                  <h1>474 Enrolled</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center snap-start border-2 border-[#B092D3] rounded-2xl flex-shrink-0 w-96 h-80 mx-4 overflow-hidden">
              <div>
                <img className="h-32" src={contestImg} alt="" />
              </div>
              <div className="w-11/12 mt-2 mb-2">
                <div
                  className="flex justify-start
                 m-2"
                >
                  <div className="w-12 h-12 bg-[#FFE5ED] rounded-md mr-3"></div>
                  <div className="flex flex-col">
                    <h1 className="text-md font-bold">Beginner Contest 46</h1>
                    <h1>Coding Ninjas</h1>
                  </div>
                </div>
                <div className="mt-5 mb-2 border-2 rounded-lg p-1">
                  <h1 className="ml-1">Data Structure and Algorithm</h1>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img className="h-5 w-5" src={calender} alt="" />
                  <h1>1 Nov, 9:00 PM</h1>
                  <img className="h-5 w-5" src={profile} alt="" />
                  <h1>474 Enrolled</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
