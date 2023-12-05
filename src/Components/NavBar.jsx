import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "./AuthContext";

import logo from "../assets/images/logo.png";
import profile from "../assets/icons/Profile.png";
import message from "../assets/icons/message.png";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=' text-black'>
      <div className='container flex mx-4 justify-between items-center py-4'>
        <div className='flex  items-center gap-4'>
          <div className='w-32 mr-4'>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          {/* Navigation links for larger screens */}
          <div className='hidden md:flex gap-6'>
            <Link to="/" className='hover:text-[#946CC3]'>Home</Link>
            <Link to="/Courses" className='hover:text-[#946CC3]'>Courses</Link>
            <Link to="/Companies" className='hover:text-[#946CC3]'>Companies</Link>
            <Link to="/Jobs" className='hover:text-[#946CC3]'>Jobs</Link>
          </div>
        </div>
        
        <div className='flex items-center mr-4 gap-4'>
          {/* Authentication buttons for larger screens */}
          {!isAuthenticated ? (
            <>
              <button className='hidden md:block px-3 py-2 text-xs rounded border border-[#946CC3] hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit'>
                <Link to="/login">Sign in</Link>
              </button>
              <button className='hidden md:block px-3 py-2 text-xs text-white bg-[#946CC3] rounded border border-[#946CC3] hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>
                <Link to="/register">Register</Link>
              </button>
            </>
          ) : (
            <>
              <button className='hidden md:block px-3 py-2 text-xs rounded border border-[#946CC3] text-black hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>
                <Link to="/register">Your Tasks</Link>
              </button>
              <button className='hidden md:block px-3 py-2 text-xs hover:cursor-pointer hover:text-white hover:bg-[#946CC3] active:bg-inherit'>
                <Link to="/login">
                  <img className="w-6" src={message} alt="Message" />
                </Link>
              </button>
              <button className='hidden md:block px-3 py-2 text-xs text-white hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]'>
                <Link to="/Profile">
                  <img className="w-6" src={profile} alt="Profile" />
                </Link>
              </button>
            </>
          )}

          {/* Mobile menu button */}
          <button
            className='md:hidden px-3 py-2 text-xs focus:outline-none'
            onClick={toggleMobileMenu}
          >
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='black'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col items-center'>
          <Link to="/" className='py-2 hover:text-[#946CC3]' onClick={toggleMobileMenu}>Home</Link>
          <Link to="/Courses" className='py-2 hover:text-[#946CC3]' onClick={toggleMobileMenu}>Courses</Link>
          <Link to="/Companies" className='py-2 hover:text-[#946CC3]' onClick={toggleMobileMenu}>Companies</Link>
          <Link to="/Jobs" className='py-2 hover:text-[#946CC3]' onClick={toggleMobileMenu}>Jobs</Link>

          {/* Authentication buttons for mobile */}
          {!isAuthenticated ? (
            <>
              <Link to="/login" className='py-2 hover:text-white hover:bg-[#946CC3] active:bg-inherit' onClick={toggleMobileMenu}>Sign in</Link>
              <Link to="/register" className='py-2 text-white bg-[#946CC3] hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]' onClick={toggleMobileMenu}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/register" className='py-2 hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]' onClick={toggleMobileMenu}>Your Tasks</Link>
              <Link to="/login" className='py-2 hover:text-white hover:bg-[#946CC3] active:bg-inherit' onClick={toggleMobileMenu}>
                <img className="w-6" src={message} alt="Message" />
              </Link>
              <Link to="/Profile" className='py-2 text-white hover:text-black hover:bg-white hover:border hover:border-[#946CC3] active:bg-[#946CC3]' onClick={toggleMobileMenu}>
                <img className="w-6" src={profile} alt="Profile" />
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
