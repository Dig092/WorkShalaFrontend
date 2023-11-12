// import React from "react";
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import Companies from "./Companies";

export default function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Companies" element={<Companies />}></Route>
        </Routes>
      </Router>
    </>
  )
}