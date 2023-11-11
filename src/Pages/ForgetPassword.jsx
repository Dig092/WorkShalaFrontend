import React from 'react'

import ResetPasswordImage from '../assets/images/ResetPasswordImage.png';
import './ForgetPassword.css';

const ForgetPassword=() =>{
  return (
    <div className="loginPage">
        <div className="loginPageImage">
    <img src={ResetPasswordImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div className="loginContentContainer">
       <span id="forgetContentHeading"> Reset Password</span>
        <div className="loginPageContent">
         New Password
        <div className="inputForLogin">
        <input type='password' placeholder='Enter your New Password'/>
        </div><br />
        Confirm Password
        <div className="inputForLogin">
        <input type='password' placeholder='Re-write your New Password'/>
        </div><br />
        <br />
     


        <div className="inputForLogin">
        <input type='email' placeholder='Enter your email' />
        </div><br />
        OTP
        <div className="inputForLogin">
        <input type='password' placeholder='Enter your password'/>
        </div><br />
        <button id="SignInButton">Send OTP</button>
        </div><br />
        
        </div>
    </div>
    
  )
}
export default ForgetPassword
