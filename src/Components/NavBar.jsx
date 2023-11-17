import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "./AuthContext";

import logo from "../assets/images/logo.png"
import profile from "../assets/icons/Profile.png";
import message from "../assets/icons/message.png";

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
    <>
      <div className='w-full h-16 flex justify-between px-7 align-middle'>
        <div className='flex items-center gap-7'>
          <div className='w-44'>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <Link to="/" className='hover:text-[#946CC3]'>Home</Link>
          <Link to="/Courses" className='hover:text-[#946CC3]'>Courses</Link>
          <Link to="/Companies" className='hover:text-[#946CC3]'>Companies</Link>
          <Link to="/Jobs" className='hover:text-[#946CC3]'>Jobs</Link>
        </div>
        <div className='flex items-center gap-7'>
          {!isAuthenticated ? (
            <>
              <button className='px-3 py-2 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit'>
                <Link to="/login">Sign in</Link>
              </button>
              <button className='px-3 py-2 text-xs text-white bg-[#946CC3] rounded border border-[#946CC3]  hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>
                <Link to="/register">Register</Link>
              </button>
            </>
          ) : (
            <>
              <button className='px-3 py-2 text-xs rounded border border-[#946CC3] text-black hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>
                <Link to="/register">Your Tasks</Link>
              </button>
              <button className='px-3 py-2 text-xs hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit'>
                <Link to="/login">
                  <img className="w-10" src={message} alt="Message" />
                </Link>
              </button>
              <button className='px-3 py-2 text-xs text-white hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>
                <Link to="/Profile">
                  <img className="w-10" src={profile} alt="Profile" />
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
