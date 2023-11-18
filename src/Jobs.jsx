import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Components/Modal";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import work from "./assets/icons/Workfromhome.png";
import shuttle from "./assets/icons/Shuttle.png";
import salary from "./assets/icons/Salary.png";
import time from "./assets/icons/time.png";
import logo from "./assets/icons/kraftbaseLogo.png";

export default function Jobs() {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [internships, setInternships] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (internship) => {
    setSelectedInternship(internship);
    setModalOpen(true);
  }
  const closeModal = () => {
    setSelectedInternship(null);
    setModalOpen(false);
  }

  const getData = async () => {
    try {
      const response = await fetch("https://intrship.onrender.com/internship/javascript", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setInternships(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />

      <div className="w-full px-16 py-8 text-3xl font-semibold bg-[#FFF6F9]">
        Jobs For You
      </div>
      <div className="flex items-center justify-center">
        <div className=" h-full grid grid-cols-3 gap-20 mt-16 mb-16 ">
        {internships.map((internship, index) => (
          <div className="flex flex-col rounded-md shadow-lg w-96 h-84">
            <div className="flex w-36 mt-4 mx-6 items-center justify-center border gap-2">
              <div className="bg-green-200 rounded-full w-4 h-4"></div>
              <div>Actively hiring</div>
            </div>
            <div className="flex mx-6 items-center justify-between">
              <div className="font-bold text-lg w-36 mt-2">
                {internship.Internship}
              </div>
              <div className="w-16 h-16 bg-black rounded-lg"></div>
            </div>
            <div className="text-sm w-40 mx-6">
              {internship.state}
            </div>
            <div className="flex items-center justify-between mx-6 my-4">
              <div className="flex flex-col  ">
                <div className="flex items-center gap-2">
                  <img className="w-4" src={work} alt="" />
                  <h1>Work from Home</h1>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-4" src={time} alt="" />
                  <h1>{internship.state}</h1>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <img className="w-4" src={shuttle} alt="" />
                  <h1>Starts immediately</h1>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-4" src={salary} alt="" />
                  <h1>{internship.salary}</h1>
                </div>
              </div>
            </div>
            <div className="flex mx-6 my-4 gap-4">
              <div className="bg-[#946CC360] text-sm px-3 py-1 rounded">
                Internship
              </div>
              <div className="bg-[#946CC360] text-sm px-3 py-1 rounded">
                Part time
              </div>
            </div>
            <div className="mx-6 my-2 text-sm text-blue-400">5 days ago</div>
            <div className="w-80 h-0.5 bg-[#946CC360] mx-7 my-3"></div>
            <button onClick={() => openModal(internship)} className="text-blue-400 m-2">
              View details
            </button>
          </div>
          ))}
        </div>
      </div>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedInternship && (
        <div>
          <div className="flex items-center justify-between m-8">
            <div className="flex gap-4">
              <img className="w-20" src={logo} alt="" />
              <div className="flex flex-col">
                <div className="font-semibold text-lg">{selectedInternship.company}</div>
                <div className="text-sm">
                  A Full-Service , Design-Driven Studio, For Early And Growing
                  Startups
                </div>
                <div>{selectedInternship.Internship}</div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="border px-4 py-1 border-black rounded-lg">
                Apply
              </div>
              <div className="border px-4 py-1 border-black rounded-lg">
                Save
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-8 my-4">
            <div className="font-semibold text-xl">Skills</div>
            <div className="bg-[#946CC320] w-fit text-sm px-4 py-2 rounded-md mt-4 ">
              HTML5, CSS3, JavaScript, SASS, ReactJS, NextJS, Shopify, MongoDB,
              Firebase, ExpressJS
            </div>
          </div>
          <div className="flex flex-col mx-8 my-4">
            <div className="font-semibold text-xl">About the Job</div>
            <div className="mt-3">
              Kraftbase is a dynamic full-service studio renowned for its
              commitment to excellence in Website Development, App Development,
              and Custom Software Development. We are currently seeking a
              talented and enthusiastic Full Stack Developer intern to join our
              innovative team.
            </div>
          </div>
        </div>
        )}
      </Modal>
    </>
  );
}
