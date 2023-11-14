import React from 'react'
import ResetPasswordImage from '../assets/images/ResetPasswordImage.png';
  
const ForgetPasswordVerify=() =>{
  return (
    <div class="flex p-1 ml-7">
        <div class="pl-24 pt-2">
    <img src={ResetPasswordImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div class="pl-16 pt-10">
       <span  class="font-sans text-left text-3xl font-bold"> Reset Password</span>
        <div class="font-sans text-1x1 pt-12">
         New Password
        <div class="w-full pt-1 pb-3">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Enter your New Password'/>
        </div>
        Confirm Password
        <div class="w-full pt-1">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Re-write your New Password'/>
        </div><br />
        <div class="w-full pt-1 pb-3">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='email' placeholder='Enter your email' />
        </div>
        OTP
        <div class="w-full pt-1 pb-10">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Enter your password'/>
        </div>
        <button class="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md">Reset my Password</button>
        </div>
        
        </div>
    </div>
    
  )
}
export default ForgetPasswordVerify
