// import React from "react";
import NavBar from "./Components/NavBar";

import heroImg from "./assets/images/heroImg.png";
import wave from "./assets/icons/wave.png";
import serviceImg from "./assets/images/servicecardImg.png";
import CogLogo from "./assets/icons/cognizantLogo.png";
import star from "./assets/icons/star.png";

export default function HomePage() {
  return (
    <>
      <div className="w-full">
        <NavBar />

        {/* heroSection */}

        <div className="w-full h-full flex">
          <div className="w-2/5 flex items-center justify-center">
            <div className="w-3/4">
              <div className="flex gap-2 mb-2">
                <img className="w-5" src={wave} />
                <h5 className="text-[#B092D3]">WELCOME TO WORKSHALA</h5>
              </div>

              <h1 className="font-bold text-5xl w-96 mb-2">
                Best Place To Get You Placed
              </h1>
              <h6 className="mb-4 w-112">
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
          <div className="w-3/5">
            <img className="w-4/5" src={heroImg} alt="" />
          </div>
        </div>

        {/* Services */}

        <div className="flex flex-col bg-[#FFB2CA12] w-full justify-around">
          <div className="flex flex-col items-center mt-16 mb-24">
            <h5 className="text-xs">Services</h5>
            <h2 className="text-3xl font-bold">Our Services</h2>
          </div>

          <div className="flex mb-24 justify-evenly mx-16">
            <div className="flex flex-col items-center w-1/6 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
              <img className="w-24 m-7" src={serviceImg} alt="" />
              <h2 className="font-bold text-2xl">Internships</h2>
              <h5 className="text-center text-sm m-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, vitae.
              </h5>
            </div>

            <div className="flex flex-col items-center w-1/6 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
              <img className="w-24 m-7" src={serviceImg} alt="" />
              <h2 className="font-bold text-2xl">Jobs</h2>
              <h5 className="text-center text-sm m-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, vitae.
              </h5>
            </div>

            <div className="flex flex-col items-center w-1/6 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
              <img className="w-24 m-7" src={serviceImg} alt="" />
              <h2 className="font-bold text-2xl">Courses</h2>
              <h5 className="text-center text-sm m-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, vitae.
              </h5>
            </div>

            <div className="flex flex-col items-center w-1/6 bg-white rounded hover:shadow-[-5px_4px_20px_0px_rgba(0,131,255,0.15)] hover:text-[#0083E1]">
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
            <h2 className="text-3xl font-bold">
              Featured Companies actively hiring
            </h2>
          </div>

          <div className="snap-x  flex overflow-x-auto scroll-smooth scrollbar-hide w-4/5 m-8">
            <div className="flex flex-col items-center  snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <img className="w-12 m-3" src={CogLogo} alt="" />
              <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                <h1 className="text-xs font-bold mb-1">Cognizant</h1>
                <div className="flex items-center justify-center">
                  <img className="w-4" src={star} alt="" />
                  <h1 className="text-sm">3.3</h1>
                  <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                  <h1 className="text-sm">1k Reviews</h1>
                </div>
              </div>
              <h1 className="text-3xl font-bold m-1">Cognizant</h1>
              <h1 className="text-sm text-center px-9 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <button className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                View Jobs
              </button>
            </div>

            <div className="flex flex-col items-center  snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <img className="w-12 m-3" src={CogLogo} alt="" />
              <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                <h1 className="text-xs font-bold mb-1">Cognizant</h1>
                <div className="flex items-center justify-center">
                  <img className="w-4" src={star} alt="" />
                  <h1 className="text-sm">3.3</h1>
                  <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                  <h1 className="text-sm">1k Reviews</h1>
                </div>
              </div>
              <h1 className="text-3xl font-bold m-1">Cognizant</h1>
              <h1 className="text-sm text-center px-9 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <button className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                View Jobs
              </button>
            </div>

            <div className="flex flex-col items-center  snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <img className="w-12 m-3" src={CogLogo} alt="" />
              <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                <h1 className="text-xs font-bold mb-1">Cognizant</h1>
                <div className="flex items-center justify-center">
                  <img className="w-4" src={star} alt="" />
                  <h1 className="text-sm">3.3</h1>
                  <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                  <h1 className="text-sm">1k Reviews</h1>
                </div>
              </div>
              <h1 className="text-3xl font-bold m-1">Cognizant</h1>
              <h1 className="text-sm text-center px-9 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <button className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                View Jobs
              </button>
            </div>

            <div className="flex flex-col items-center  snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <img className="w-12 m-3" src={CogLogo} alt="" />
              <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                <h1 className="text-xs font-bold mb-1">Cognizant</h1>
                <div className="flex items-center justify-center">
                  <img className="w-4" src={star} alt="" />
                  <h1 className="text-sm">3.3</h1>
                  <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                  <h1 className="text-sm">1k Reviews</h1>
                </div>
              </div>
              <h1 className="text-3xl font-bold m-1">Cognizant</h1>
              <h1 className="text-sm text-center px-9 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <button className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                View Jobs
              </button>
            </div>

            <div className="flex flex-col items-center  snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <img className="w-12 m-3" src={CogLogo} alt="" />
              <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                <h1 className="text-xs font-bold mb-1">Cognizant</h1>
                <div className="flex items-center justify-center">
                  <img className="w-4" src={star} alt="" />
                  <h1 className="text-sm">3.3</h1>
                  <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                  <h1 className="text-sm">1k Reviews</h1>
                </div>
              </div>
              <h1 className="text-3xl font-bold m-1">Cognizant</h1>
              <h1 className="text-sm text-center px-9 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <button className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                View Jobs
              </button>
            </div>

            <div className="flex flex-col items-center  snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <img className="w-12 m-3" src={CogLogo} alt="" />
              <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                <h1 className="text-xs font-bold mb-1">Cognizant</h1>
                <div className="flex items-center justify-center">
                  <img className="w-4" src={star} alt="" />
                  <h1 className="text-sm">3.3</h1>
                  <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                  <h1 className="text-sm">1k Reviews</h1>
                </div>
              </div>
              <h1 className="text-3xl font-bold m-1">Cognizant</h1>
              <h1 className="text-sm text-center px-9 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <button className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
                View Jobs
              </button>
            </div>
          </div>

          <button className=" px-3 py-2 m-8 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit">
            View all Companies
          </button>
        </div>

        {/* Events */}

        <div className="flex flex-col w-full items-center justify-around">
          <div className="flex flex-col items-center mt-16 mb-24">
            <h5 className="text-xs">Events</h5>
            <h2 className="text-3xl font-bold">
              Upcoming Events and Challenges
            </h2>
            <h2 className="text-3xl font-bold">
              Upcoming Events and Challenges
            </h2>
          </div>

          <div className="snap-x  flex overflow-x-auto scroll-smooth scrollbar-hide w-4/5 m-8">
            <div className="flex flex-col items-center snap-start border-4 rounded-2xl flex-shrink-0 w-96 h-72 mx-4">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                  <div>
                    <h1>Beginner Contest 46</h1>
                    <h1>Coding Ninjas</h1>
                  </div>
                </div>
                <div>
                  <h1>Data Structure and Algorithm</h1>
                </div>
                <div>
                  <img src="" alt="" />
                  <h1>1 Nov, 9:00 PM</h1>
                  <img src="" alt="" />
                  <h1>474 Enrolled</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
