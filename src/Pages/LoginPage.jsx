import React from 'react'
import SignInPageImage from '../assets/images/SignInPageImage.png'

import './LoginPage.css'

const LoginPage=() =>{
  return (
    <div className="loginPage">
        <div className="loginPageImage">
    <img src={SignInPageImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div className="loginContentContainer">
        <span id="loginContentHeading">Login</span><br />
        <div className="loginPageContent">
        Email<br />
        <div className="inputForLogin">
        <input type='email' placeholder='Enter your email' />
        </div><br />
        Password
        <div className="inputForLogin">
        <input type='password' placeholder='Enter your password'/>
        </div>
        <div className="rememberMe">
        <label class="checkBoxForRememberMe">Remember me
        <input type="checkbox" />
        
        </label>
        <p id="ForgetPasswordText"><a href=''>Forget Password?</a></p>
        </div><br />
        <button id="SignInButton">Sign In</button>
        </div><br />
        <center>Haven't Registered Yet! <a href="">Register Now</a></center>
        </div>
    </div>
    
  )
}
export default LoginPage
