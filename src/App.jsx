import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import NavBar from "./Components/NavBar";
import ForgetPassword from "./Pages/ForgetPassword";
import RegisterPage from "./Pages/RegisterPage";
import ForgetPasswordVerify from "./Pages/ForgetPasswordVerify";
import HomePage from "./HomePage";
import Companies from "./Companies";
import Courses from "./Courses";
import CoursesFull from "./CoursesFull";
import Jobs from "./Jobs";
import VerificationPage from "./Pages/VerificationPage";
import Profile from "./Pages/Profile";
import Welcome from "./Pages/Welcome";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./Components/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="forgetpassword" element={<ForgetPassword />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route
              path="forgetpasswordverify"
              element={<ForgetPasswordVerify />}
            ></Route>
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Companies" element={<Companies />}></Route>
            <Route path="/Courses" element={<Courses />}></Route>
            <Route path="/CoursesFull" element={<CoursesFull />}></Route>
            <Route path="/Jobs" element={<Jobs />}></Route>
            <Route path="verify" element={<VerificationPage />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};
export default App;
