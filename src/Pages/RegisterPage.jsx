import React from 'react'
import RegisterPageImage from '../assets/images/RegisterPageImage.png'
import { Link } from 'react-router-dom'

const RegisterPage=() =>{
  return (
    <div  class="flex p-1 ml-7">
        <div class="pl-24">
    <img src={RegisterPageImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div class="pl-16 pt-10">
        <span class="font-sans text-left text-3xl font-bold">Register</span>
        <div class="font-sans text-1x1 pt-10">
        Name<br />
        <div class="w-full pt-1 pb-2">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='text' placeholder='Enter your Name' />
        </div>
        Phone Number
        <div class="w-full pt-1 pb-2">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type="tel" placeholder='Enter your phone number'/>
        </div>
        Email<br />
        <div class="w-full pt-1 pb-2">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='email' placeholder='Enter your email' />
        </div>
        Password
        <div class="w-full pt-1">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Enter your password'/>
        </div><br />
        <button class="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md">Sign In</button>
        </div>
        <div class="text-center pt-2">Already Registered! <Link to="/login" class="text-[#946CC3]">Login</Link></div>
        </div>
    </div>
    
  )
}
export default RegisterPage
