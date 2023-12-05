import React from "react";

import footerLinks from "../assets/images/footerLinks.png";
import logo2 from "../assets/images/logo2.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linkedin.png";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#946CC3]">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col m-4 md:m-12">
          <h1 className="text-lg font-semibold mb-4">Important links</h1>
          <div className="flex flex-col md:flex-row  gap-7">
            <ul className="mb-4 md:mb-0">
              <a href="#">
                <li className="mb-1">About Us</li>
              </a>
              <a href="#">
                <li className="mb-1">Careers</li>
              </a>
              <a href="#">
                <li className="mb-1">Employers Home</li>
              </a>
              <a href="#">
                <li className="mb-1">Sitemap</li>
              </a>
            </ul>
            <ul className="mb-4 md:mb-0">
              <a href="#">
                <li className="mb-1">Help Center</li>
              </a>
              <a href="#">
                <li className="mb-1">Summons/Notices</li>
              </a>
              <a href="#">
                <li className="mb-1">Grievances</li>
              </a>
              <a href="#">
                <li className="mb-1">Report issue</li>
              </a>
            </ul>
            <ul>
              <a href="#">
                <li className="mb-1">Privacy Policy</li>
              </a>
              <a href="#">
                <li className="mb-1">Terms & condition</li>
              </a>
              <a href="#">
                <li className="mb-1">Fraud alerts</li>
              </a>
              <a href="#">
                <li className="mb-1">Trust & safety</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center m-4 md:m-7">
          <h1 className="text-lg font-semibold">E-mail your Query</h1>
          <input className="p-2 rounded bg-[#DEC1FF]" type="email" placeholder="Enter your e-mail here" />

          <div className="bg-[#DEC1FF] mt-4 p-4 rounded">
            <h1 className="text-xl font-bold">Apply on the go</h1>
            <h1 className="text-sm">Get real-time job updates on our App</h1>
            <img className="w-full mt-2" src={footerLinks} alt="Footer Links" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-[#251636] p-4 md:p-8 gap-4 md:gap-12">
        <img className="w-48 h-12 mx-auto md:mx-32" src={logo2} alt="Logo" />

        <div className="flex flex-col text-white text-center md:text-left mr-4 md:mr-48">
          <h1>Join with us</h1>
          <div className="flex justify-center md:justify-start">
            <img className="w-5 h-5 mx-2" src={instagram} alt="Instagram" />
            <img className="w-5 h-5 mx-2" src={twitter} alt="Twitter" />
            <img className="w-5 h-5 mx-2" src={facebook} alt="Facebook" />
            <img className="w-5 h-5 mx-2" src={linkedin} alt="LinkedIn" />
          </div>
        </div>

        <div className="text-white text-center md:text-left">
          <h1>Help line number</h1>
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-1 h-1 bg-white rounded"></div>
            <h1 className="mx-2">1900-2000-4992</h1>
            <div className="w-1 h-1 bg-white rounded"></div>
            <h1>1900-2000-4992</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
