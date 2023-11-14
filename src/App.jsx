// import React from "react";
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import LoginPage from './Pages/LoginPage';
import ForgetPassword from './Pages/ForgetPassword';
import RegisterPage from './Pages/RegisterPage';
import ForgetPasswordVerify from './Pages/ForgetPasswordVerify';

export default function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="forgetpasswordverify" element={<ForgetPasswordVerify />}></Route>
        </Routes>
      </Router>
    </>
  )
}