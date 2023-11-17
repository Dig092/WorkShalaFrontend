import React, { useState } from 'react';
import ResetPasswordImage from '../assets/images/ResetPasswordImage.png';
import ShowPasswordImage from '../assets/icons/EyeImageForShowPassword1.png'; 
import HidePasswordImage from '../assets/icons/EyeImageForNotShowPassword.png'; 
import { Link, useNavigate } from 'react-router-dom';  

const ForgetPassword=() =>{

  const [showPassword, setShowPassword] = useState(false);
  const nav=useNavigate(); 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function sendotp() {
    let item = { name, phonenumber, email, password };
    console.warn(item);

    let result= await fetch("https://workshala-7v7q.onrender.com/register",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application.json'
      }
    })
    result =await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    nav("/forgetpasswordverify");
  }

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
        <div class="w-full pt-1 pb-2">
        value={newpassword}
              onChange={(e) => setEmail(e.target.value)}
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Enter your New Password'/>
        </div>
        Confirm Password
        <div class="w-full pt-1 pb-2">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' 
         value={confirmpassword}
         onChange={(e) => setEmail(e.target.value)}
        placeholder='Re-write your New Password'/>
        </div>
        Email
        <div class="w-full pt-1 pb-2">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='email' placeholder='Enter your email' />
        </div>
        OTP
        <div class="w-full pt-1 pb-10">
        <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type={showPassword ? 'text' : 'password'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your OTP'
            />
             <img
              src={showPassword ? HidePasswordImage : ShowPasswordImage}
              alt="Toggle Password Visibility"
              className="absolute pb-10 right-1/4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
        </div>
        <button class="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md" onClick={sendotp}>
          Send OTP</button>
        </div>
        
        </div>
    </div>
    
  )
}
export default ForgetPassword
