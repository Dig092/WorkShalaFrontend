import React from 'react'
import RegisterPageImage from '../assets/images/RegisterPageImage.png'
import './RegisterPage.css'

const RegisterPage=() =>{
  return (
    <div className="loginPage">
        <div className="loginPageImage">
    <img src={RegisterPageImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div className="loginContentContainer">
        <span id="loginContentHeading">Register</span>
        <div className="loginPageContent">
        Name<br />
        <div className="inputForLogin">
        <input type='text' placeholder='Enter your Name' />
        </div>
        Phone Number
        <div className="inputForLogin">
        <input type="tel" placeholder='Enter your phone number'/>
        </div>
        Email<br />
        <div className="inputForLogin">
        <input type='email' placeholder='Enter your email' />
        </div>
        Password
        <div className="inputForLogin">
        <input type='password' placeholder='Enter your password'/>
        </div><br /><br />
        <button id="SignInButton">Sign In</button>
        </div><br />
        <center>Already Registered! <a href="">Login</a></center>
        </div>
    </div>
    
  )
}
export default RegisterPage
