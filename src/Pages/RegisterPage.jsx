import React, { useState } from 'react';
import RegisterPageImage from '../assets/images/RegisterPageImage.png';
import ShowPasswordImage from '../assets/icons/EyeImageForShowPassword1.png';
import HidePasswordImage from '../assets/icons/EyeImageForNotShowPassword.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const { login } = useAuth();
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
  const isPhoneNumberValid = /^\d{10}$/.test(phonenumber);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const signUp = async () => {
    if (isFormValid && isPhoneNumberValid && isEmailValid) {
      let item = { name, phonenumber, email, password };
      console.warn(item);
      localStorage.setItem('user-information', JSON.stringify(item));

      try {
        let result = await fetch('https://workshala-7v7q.onrender.com/register', {
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
        let result2 = await fetch('https://workshala-7v7q.onrender.com/register', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: headers,
        });
          login();
          nav('/verify');
          toast.success('Registration successful!');
        }
      } catch (error) {
        console.error('Registration failed', error);
        // Handle registration error here
        toast.error('An error occurred during registration. Please try again.');
      }
    } else {
      alert('Please fill in all the details and enter a valid 10-digit phone number.');
    }
  };

          // Store the access token in localStorage
          localStorage.setItem('access-token', accessToken);

          // Set the access token in the headers for subsequent requests
          const headers = {
            'Content-Type': 'application/json',
            Accept: 'application.json',
            Authorization: `Bearer ${accessToken}`,
          };
          login();
          nav('/verify');
          toast.success('Registration successful!');
        } else {
          // Handle unsuccessful registration (e.g., show an error message to the user)
          console.error('Registration failed');
          toast.error('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Registration failed', error);
        // Handle registration error here
        toast.error('An error occurred during registration. Please try again.');
      }
    } else {
      alert('Please fill in all the details and enter a valid 10-digit phone number.');
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-2/4 mb-4 md:mb-0">
        <img src={RegisterPageImage} height="550rem" width="550rem" alt=""  />
      </div>
      <div>
        <span className="font-sans text-left text-3xl md:text-4xl font-bold">Register</span>
        <div className="font-sans text-1x1 pt-6 md:pt-10">
          Name
          <br />
          <div className="w-full pt-1 pb-2">
            <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
          </div>
          Phone Number
          <div className="w-full pt-1 pb-2">
            <input
              className={`w-full p-3 pl-4 border rounded-md text-xs ${
                isPhoneNumberValid ? '' : 'border-red-500'
              }`}
              type="tel"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              placeholder="Enter your phone number"
            />
            {!isPhoneNumberValid && (
              <p className="text-red-500 text-xs">Please enter a valid 10-digit phone number.</p>
            )}
          </div>
          Email
          <br />
          <div className="w-full pt-1 pb-2">
            <input
              className={`w-full p-3 pl-4 border rounded-md text-xs ${
                isEmailValid ? '' : 'border-red-500'
              }`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {!isEmailValid && (
              <p className="text-red-500 text-xs">Please enter a valid email address.</p>
            )}
          </div>
          Password
          <div className="w-full pt-1">
            <input
              className="w-full p-3 pl-4 border border-black rounded-md text-xs"
              type={showPassword ? 'text' : 'password'}
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
          <button
            className={`bg-[#946CC3] text-white w-full md:w-80 p-2.5 mb-2 rounded-md ${
              isFormValid && isPhoneNumberValid && isEmailValid
                ? ''
                : 'cursor-not-allowed opacity-50'
            }`}
            onClick={signUp}
            disabled={!isFormValid || !isPhoneNumberValid || !isEmailValid}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center pt-2">
          Already Registered!{' '}
          <Link to="/login" className="text-[#946CC3]">
            Login
          </Link>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default RegisterPage;
