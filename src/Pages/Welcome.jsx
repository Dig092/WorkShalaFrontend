
import React, { useState } from "react";
import axios from "axios"; // Import Axios
import NavBar from "../Components/NavBar";
import welcome from "../assets/images/Welcome.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [workStatus, setWorkStatus] = useState("");

  const handleSkillClick = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills((prevSkills) =>
        prevSkills.filter((s) => s !== skill)
      );
    } else {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  const handleWorkStatusClick = (status) => {
    setWorkStatus(status);
  };

  const handleSubmit = () => {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const requestData = {
      workStatus: workStatus,
      skills: selectedSkills,
    };

    axios
      .post("https://workshala-7v7q.onrender.com/welcome", requestData,{withCredentials:true})
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => console.error("Error submitting skills:", error));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row w-full h-full bg-[#FFAEB612]">
        <div className="w-full md:w-1/4 m-4 md:m-12">
          <img src={welcome} alt="" className="w-full" />
        </div>
        <div className="flex flex-col w-full md:w-3/4 mt-4 md:mt-12 md:ml-12 bg-white rounded-3xl shadow-xl p-4 md:p-6">
          <div className="font-semibold text-xl md:text-3xl">Welcome</div>
          <div className="flex mt-2 md:mt-4 bg-[#FFAEB620] p-2 md:p-3 rounded-lg">
            <div></div>
            <div>Your account is created successfully. Let's get started</div>
          </div>
          <div className="mt-4 font-semibold text-lg md:text-2xl">Work Status</div>
          <div className="flex mt-2 md:mt-4 gap-2 md:gap-4">
            <div
              className={`flex flex-col cursor-pointer w-full md:w-56 items-center border p-2 md:p-4 rounded-xl ${
                workStatus === "Experienced" ? "bg-[#9747FF90]" : ""
              }`}
              onClick={() => handleWorkStatusClick("Experienced")}
            >
              <div className="font-medium text-md md:text-lg">I'm Experienced</div>
              <div className="text-xs md:text-sm">I have work experience</div>
              <div className="text-xs md:text-sm">(Excluding Internships)</div>
            </div>
            <div
              className={`flex flex-col cursor-pointer items-center w-full md:w-60 border p-2 md:p-4 rounded-xl ${
                workStatus === "Fresher" ? "bg-[#9747FF90]" : ""
              }`}
              onClick={() => handleWorkStatusClick("Fresher")}
            >
              <div className="font-medium text-md md:text-lg">I'm Fresher</div>
              <div className="text-xs md:text-sm"> I am a Student</div>
              <div className="text-xs md:text-sm">Haven’t worked after Graduation</div>
            </div>
          </div>
          <div className="mt-4 font-semibold text-lg md:text-2xl">Your Skills</div>
          <div className="mt-2 md:mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {["Blockchain", "Architecture", "Javascript", "Design", "IT and Software", "Database", "Marketing", "Writing", "Web development"].map((skill, id) => (
                <button
                  key={id}
                  className={`${
                    selectedSkills.includes(skill)
                      ? "bg-[#9747FF90] text-white"
                      : "bg-[#CAB7E150]"
                  } py-2 rounded-lg`}
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="font-semibold mt-4 md:mt-8 w-full md:w-28 py-1 rounded border border-[#9747FF] hover:bg-[#9747FF90] hover:text-white active:bg-white"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
