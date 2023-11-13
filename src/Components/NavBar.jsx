// import React from "react";

import logo from "../assets/images/logo.png"

export default function NavBar(){
    
    return(
        <>
        <div className='w-full h-16 flex justify-between px-7 align-middle'>
            <div className='flex items-center gap-7'>
                <div className='w-44'>
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                <a className='hover:text-[#946CC3]' href="/">Home</a>
                <a className='hover:text-[#946CC3]' href="">Courses</a>
                <a className='hover:text-[#946CC3]' href="/Companies">Companies</a>
                <a className='hover:text-[#946CC3]' href="">Jobs</a>
            </div>
            <div className='flex items-center gap-7 '>
                <button className=' px-3 py-2 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit'>Sign in</button>
                <button className=' px-3 py-2 text-xs text-white bg-[#946CC3] rounded border border-[#946CC3]  hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>Register</button>
            </div>
        </div>
        </>
    )
}