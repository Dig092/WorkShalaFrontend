import React, { useState} from 'react'; 
import SignInPageImage from '../assets/images/SignInPageImage.png'; 
import ShowPasswordImage from '../assets/icons/EyeImageForShowPassword1.png';  
import HidePasswordImage from '../assets/icons/EyeImageForNotShowPassword.png';  
import { Link, useNavigate } from 'react-router-dom'; 
import {useAuth} from "../Components/AuthContext";
 
const LoginPage = () => { 
  const {login} = useAuth()
  const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => { 
    setShowPassword(!showPassword); 
  }; 
 
  const [email,setEmail]=useState("") 
  const [password,setPassword]=useState("") 
  const nav=useNavigate(); 
 
  async function signIn() 
  { 
     
    let item={email,password} 
    console.warn(item); 
 
    let result= await fetch("https://workshala-7v7q.onrender.com/login",{ 
      method:'POST', 
      body:JSON.stringify(item), 
      headers:{ 
        "Content-Type":'application/json', 
        "Accept":'application.json' 
      } 
    }); 
    result =await result.json() 
    if (result.ok) {
      localStorage.setItem("user-info", JSON.stringify(result));
      login();
      nav("/");
    }
   
  }


  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-2/4">
        <img className='' src={SignInPageImage} alt='' />
      </div>
      <div className="w-1/4 pl-24">
        <span className="font-sans text-left text-4xl font-bold">Login</span><br />
        <div className="font-sans text-base pt-12">
          Email<br />
          <div className="w-full pt-2 pb-3">
            <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
            />
          </div>
          Password
          <div className="w-full pt-2 relative">
            <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
            />
            <img
              src={showPassword ? HidePasswordImage : ShowPasswordImage}
              alt="Toggle Password Visibility"
              className="absolute top-7 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="flex">
            <label className="text-sm pt-2">
              <input type="checkbox" /> Remember me
            </label>
            <p className="text-sm pl-24 pt-2 pb-4"><Link to="/forgetpassword">Forget Password?</Link></p>
          </div><br />
          <button className="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md" onClick={signIn}>Sign In</button>
         
        </div><br />
        <div className="text-center pt-2 font-bold">Haven't Registered Yet! <Link to="/register" className="text-[#946CC3]">Register Now</Link></div>
      </div>
    </div>
  );
};

export default LoginPage;
