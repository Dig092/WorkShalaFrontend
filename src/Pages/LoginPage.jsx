import React from 'react'
import SignInPageImage from '../assets/images/SignInPageImage.png'
import { Link } from 'react-router-dom'

const LoginPage=() =>{
  return (
    <div class="flex p-1 ml-7">
        <div class="pl-24">
    <img src={SignInPageImage} height="500rem" width="500rem"  alt='' />
    </div>
    <div class="pl-20 pt-16">
        
        <span class="font-sans text-left text-4xl font-bold">Login</span><br />
        <div class="font-sans text-base pt-12">
        Email<br />
        <div class="w-full pt-2 pb-3">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='email' placeholder='Enter your email' />
        </div>
        Password
        <div class="w-full pt-2">
        <input class="w-full p-3 pl-4 border border-black rounded-md text-xs" type='password' placeholder='Enter your password'/>
        </div>
        <div class="flex">
        <label class=" text-sm pt-2">
        <input type="checkbox" /> Remember me
        
        </label>
        <p class="text-sm pl-24 pt-2 pb-4"><Link to="/forgetpassword" >Forget Password?</Link></p>
        </div><br />
        <button class="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md">Sign In</button>
        </div><br />
        <div class="text-center pt-2 font-bold">Haven't Registered Yet! <Link to="/register" class="text-[#946CC3]">Register Now</Link></div>
        </div>
    </div>
    
  )
}
export default LoginPage
