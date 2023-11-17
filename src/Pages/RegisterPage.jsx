// import React, { useState } from 'react';
// import RegisterPageImage from '../assets/images/RegisterPageImage.png'
// import ShowPasswordImage from '../assets/icons/EyeImageForShowPassword1.png'; 
// import HidePasswordImage from '../assets/icons/EyeImageForNotShowPassword.png'; 
// import { Link, useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const nav=useNavigate();
//   const [name,setName]=useState("")
//   const [phonenumber,setPhonenumber]=useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")


//   async function signUp() {
//     let item = { name, phonenumber, email, password };
//     console.warn(item);

//     let result= await fetch("https://workshala-7v7q.onrender.com/register",{
//       method:'POST',
//       body:JSON.stringify(item),
//       headers:{
//         "Content-Type":'application/json',
//         "Accept":'application.json'
//       }
//     })
//     result =await result.json()
//     localStorage.setItem("user-info",JSON.stringify(result))
//     nav("/verify")
//   }

import React, { useState } from 'react';
import RegisterPageImage from '../assets/images/RegisterPageImage.png';
import ShowPasswordImage from '../assets/icons/EyeImageForShowPassword1.png';
import HidePasswordImage from '../assets/icons/EyeImageForNotShowPassword.png';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const nav = useNavigate();
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = name && phonenumber && email && password;

  const signUp = async () => {
    if (isFormValid) {
      let item = { name, phonenumber, email, password };
      // console.warn(item);
      localStorage.setItem('user-information', JSON.stringify(item))

      try {
        let result = await fetch('https://workshala-7v7q.onrender.com/register', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application.json',
          },
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        nav('/verify');
      } catch (error) {
        console.error('Registration failed', error);
        // Handle registration error here
      }
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <div class="flex justify-center items-center">
      <div class="w-2/4">
        <img src={RegisterPageImage} alt="" />
      </div>
      {/* <div className="loginPageContentHeading"> */}
      <div class="pl-16 pt-10">
        <span class="font-sans text-left text-3xl font-bold">Register</span>
        <div class="font-sans text-1x1 pt-10">
          Name
          <br />
          <div class="w-full pt-1 pb-2">
            <input
              class="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
          </div>
          Phone Number
          <div class="w-full pt-1 pb-2">
            <input
              class="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type="tel"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          Email
          <br />
          <div class="w-full pt-1 pb-2">
            <input
              class="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          Password
          <div class="w-full pt-1">
            <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <img
              src={showPassword ? HidePasswordImage : ShowPasswordImage}
              alt="Toggle Password Visibility"
              className="absolute pb-10 right-1/4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          <br />
          {/* <button
            class="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md"
            onClick={signUp}
          >
            Sign In
          </button> */}
           <button
        className={`bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md ${isFormValid ? '' : 'cursor-not-allowed opacity-50'}`}
        onClick={signUp}
        disabled={!isFormValid}
      >
        Sign Up
      </button>
        </div>
        <div class="text-center pt-2">
          Already Registered!{" "}
          <Link to="/login" class="text-[#946CC3]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
