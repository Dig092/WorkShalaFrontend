import React, { useState } from 'react';
import SignInPageImage from '../assets/images/SignInPageImage.png';
import ShowPasswordImage from '../assets/icons/EyeImageForShowPassword1.png';
import HidePasswordImage from '../assets/icons/EyeImageForNotShowPassword.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerificationPage = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const nav = useNavigate();

  async function verify() {
    try {
      let item = { email, otp };
      console.warn(item);

      let result = await fetch('https://workshala-7v7q.onrender.com/verifyEmail', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application.json',
        },
      });

      if (result.ok) {
        login();
        nav('/Welcome');
        toast.success('Verification successful!');
      } else {
        // Handle unsuccessful verification (e.g., show an error message to the user)
        console.error('Verify failed');
        toast.error('Verification failed. Please try again.');
      }
    } catch (error) {
      // Handle other errors (network issues, etc.)
      console.error('An error occurred during verification', error);
      toast.error('An error occurred during verification. Please try again.');
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-1 ml-7">
      <div>
        <img src={SignInPageImage} height="500rem" width="500rem" alt='' />
      </div>
      <div className="md:pl-20 pt-16">
        <span className="font-sans text-left text-4xl font-bold">Verify It's You</span><br />
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
          OTP
          <div className="w-full pt-2 relative">
            <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type={showPassword ? 'text' : 'password'}
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder='Enter your OTP'
            />
            <img
              src={showPassword ? HidePasswordImage : ShowPasswordImage}
              alt="Toggle Password Visibility"
              className="absolute top-7 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          <br />
          <button
            className="bg-[#946CC3] text-white w-80 p-2.5 mb-2 rounded-md"
            onClick={verify}
          >
            Sign In
          </button>
        </div><br />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default VerificationPage;
