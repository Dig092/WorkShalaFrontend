import React from 'react'
import ResetPasswordImage from '../assets/images/ResetPasswordImage.png';
import { Link, useNavigate } from 'react-router-dom';  

const ForgetPasswordVerify=() =>{
  return (
    <div className="flex p-1 ml-7">
        <div class="pl-24 pt-2">
    <img src={ResetPasswordImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div className="pl-16 pt-10">
       <span  className="font-sans text-left text-3xl font-bold"> Reset Password</span>
        <div className="font-sans text-1x1 pt-12">
         New Password
        <div className="w-full pt-1 pb-3">
        <input className="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Enter your New Password'/>
        </div>
        Confirm Password
        <div className="w-full pt-1">
        <input className="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Re-write your New Password'/>
        </div><br />
        <div className="w-full pt-1 pb-3">
        <input className="w-full p-3 pl-4 border border-black rounded-md text-xs" type='email' placeholder='Enter your email' />
        </div>
        OTP
        <div className="w-full pt-1 pb-10">
        <input className="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Enter your OTP'/>
        </div>
        <button className="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md">Reset my Password</button>
        </div>
        
        </div>
    </div>
    
  )
}
export default ForgetPasswordVerify
