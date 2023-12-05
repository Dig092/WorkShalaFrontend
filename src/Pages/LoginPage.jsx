import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { toast } from 'react-toastify';

import SignInPageImage from '../assets/images/SignInPageImage.png';
import ShowPasswordImage from '../assets/icons/EyeImageForShowPassword1.png';
import HidePasswordImage from '../assets/icons/EyeImageForNotShowPassword.png';

const LoginPage = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const signIn = async () => {
    try {
      let item = { email, password };
      console.warn(item);

      let result = await fetch('https://workshala-7v7q.onrender.com/login', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application.json',
        },
      });

      if (result.ok) {
        const data = await result.json();
      const { accessToken } = data; // Retrieve accessToken from response data

      // Store the access token in localStorage
      localStorage.setItem('access-token', accessToken);

      // Set the access token in the headers for subsequent requests
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      // Use the headers in the fetch request
      let result2 = await fetch('https://workshala-7v7q.onrender.com/login', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: headers,
      });

        login(accessToken);
        nav('/');
        console.log(accessToken);
        toast.success('Login successful!', { position: 'top-right' });
      } else {
        toast.error('Invalid Credentials');
        console.error('Login failed');
      }
    } catch (error) {
      // Handle other errors (network issues, etc.)
      console.error('An error occurred during login', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={SignInPageImage}  height="540rem" width="540rem" alt="" />
      </div>
      <div>
        <span className="font-sans text-left text-4xl font-bold">Login</span>
        <br />
        <div className="font-sans text-base pt-4 md:pt-12">
          Email
          <br />
          <div className="w-full pt-2 pb-3">
            <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          Password
          <div className="w-full pt-2 relative">
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
              className="absolute top-7 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 md:pt-2">
            <label className="text-sm pt-2 md:pt-0">
              <input type="checkbox" /> Remember me
            </label>
            <p className="text-sm md:pl-24 pt-2 pb-4">
              <Link to="/forgetpassword">Forget Password?</Link>
            </p>
          </div>
          <br />
          <button
            className="bg-[#946CC3] text-white w-full md:w-80 p-2.5 mb-2 rounded-md"
            onClick={signIn}
          >
            Sign In
          </button>
        </div>
        <div className="text-center pt-2 font-bold">
          Haven't Registered Yet!{" "}
          <Link to="/register" className="text-[#946CC3]">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
