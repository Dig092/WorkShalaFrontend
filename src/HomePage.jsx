// import React from "react";
import NavBar from "./Components/NavBar";

import heroImg from "./assets/images/heroImg.png";
import wave
export default function HomePage() {
  return (
    <>
      <div className="w-full">
        <NavBar />

        <div className="w-full h-full flex bg-blue-100">
          <div className="w-2/4 flex items-center justify-center">
            <div className='w-3/4'>
                <div>
                    <img src={} alt="" />
                    <h5>WELCOME TO WORKSHALA</h5>
                    </div>
              
              <h1>Best Place To Get You Placed</h1>
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h6>
              <div className='flex gap-3'>
                <button className=' px-3 py-2 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit'>Read More</button>
                <button className=' px-3 py-2 text-xs text-white bg-[#946CC3] rounded border border-[#946CC3]  hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>Start Today</button>
              </div>
            </div>
          </div>
          <div className="w-2/4">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
