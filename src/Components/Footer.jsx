import React from "react";

import footerLinks from "../assets/images/footerLinks.png";
import logo2 from "../assets/images/logo2.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-[#946CC3]">
        <div className="flex justify-center">
          <div className="flex flex-col items-start justify-center m-12">
            <h1 className="text-lg font-semibold mb-4">Important links</h1>
            <div className="flex gap-6">
              <ul className="">
                <a href="">
                  <li className="mb-1">About Us</li>
                </a>
                <a href="">
                  <li className="mb-1">Careers</li>
                </a>
                <a href="">
                  <li className="mb-1">Employers Home</li>
                </a>
                <a href="">
                  <li className="mb-1">Sitemap</li>
                </a>
              </ul>
              <ul>
                <a href="">
                  <li className="mb-1">Help Center</li>
                </a>
                <a href="">
                  <li className="mb-1">Summons/Notices</li>
                </a>
                <a href="">
                  <li className="mb-1">Grievances</li>
                </a>
                <a href="">
                  <li className="mb-1">Report issue</li>
                </a>
              </ul>
              <ul>
                <a href="">
                  <li className="mb-1">Privacy Policy</li>
                </a>
                <a href="">
                  <li className="mb-1">Terms & condition</li>
                </a>
                <a href="">
                  <li className="mb-1">Fraud alerts</li>
                </a>
                <a href="">
                  <li className="mb-1">Trust & safety</li>
                </a>
              </ul>
            </div>
          </div>

          <div>
            <label htmlFor="E-mail your Query"></label>
            <input type="email" placeholder="Enter your e-mail here" />

            <div>
              <h1>Apply on the go</h1>
              <h1>Get real-time job updates on our App</h1>
              <img src={footerLinks} />
            </div>
          </div>
        </div>

        <div className="flex bg-[#251636] p-8 gap-12">
          <img className="w-48 h-12 mx-32" src={logo2} />

          <div className="flex flex-col text-white mr-48">
            <h1>Join with us</h1>
            <div className="flex">
              <img className="w-5 h-5 mr-4" src={instagram} alt="" />
              <img className="w-5 h-5 mr-4" src={twitter} alt="" />
              <img className="w-5 h-5 mr-4" src={facebook} alt="" />
              <img className="w-5 h- mr-4" src={linkedin} alt="" />
            </div>
          </div>

          <div className="text-white">
            <h1>Help line number</h1>
            <div className="flex items-center">
              <div className="w-1 h-1 bg-white rounded"></div>
              <h1 className="mr-3">1900-2000-4992</h1>
            
              <div className="w-1 h-1 bg-white rounded"></div>
              <h1>1900-2000-4992</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
