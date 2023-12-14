// import React, { useState } from "react";
// import NavBar from "../Components/NavBar";

// import welcome from "../assets/images/Welcome.png";
// import { useNavigate } from "react-router-dom";

// const Welcome = () => {
//   const navigate = useNavigate();
//   const [selectedSkills, setSelectedSkills] = useState([]);

//   const handleSkillClick = (skill) => {
//     if (selectedSkills.includes(skill)) {
//       setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
//     } else {
//       setSelectedSkills((prevSkills) => [...prevSkills, skill]);
//     }
//   };

//   const handleSubmit = () => {
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ skills: selectedSkills }),
//     };

//     fetch("https://workshala-7v7q.onrender.com/welcome", requestOptions)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         navigate("/");
//       })
//       .catch((error) => console.error("Error submitting skills:", error));
//   };
//   return (
//     <>
//       <NavBar />

//       <div className="flex w-full h-full bg-[#FFAEB612]">
//         <div className="w-1/4 m-12">
//           <img src={welcome} alt="" />
//         </div>
//         <div className="flex flex-col w-3/4 mt-12 ml-12 bg-white rounded-3xl shadow-xl px-16 py-6">
//           <div className="font-semibold text-3xl">Welcome</div>
//           <div className="flex mt-6 bg-[#FFAEB620] p-3 rounded-lg">
//             <div></div>
//             <div>Your account is created successfully. Let's get started</div>
//           </div>
//           <div className="mt-6 font-semibold text-2xl">Work Status</div>
//           <div className="flex mt-6 gap-12">
//             <div className="flex flex-col cursor-pointer w-56 items-center border border-black p-4 rounded-xl">
//               <div className="font-medium text-lg">I'm Experienced</div>
//               <div className="text-sm">I have work experience</div>
//               <div className="text-sm">(Excluding Internships)</div>
//             </div>
//             <div className="flex flex-col cursor-pointer items-center w-60  border border-black p-4 rounded-xl">
//               <div className="font-medium text-lg">I'm Fresher</div>
//               <div className="text-sm"> I am a Student</div>
//               <div className="text-sm">Haven’t worked after Graduation</div>
//             </div>
//           </div>
//           <div className="mt-10 font-semibold text-2xl">Your Skills</div>
//           <div className="mt-8">
//             <div className="grid grid-cols-3 gap-8">
//               <button
//                 className={`${
//                   selectedSkills.includes("Blockchain")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Blockchain")}
//               >
//                 Blockchain
//               </button>
//               <button
//                 className={`${
//                   selectedSkills.includes("Architecture")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Architecture")}
//               >
//                 Architecture
//               </button>
//               <button
//                 className={`${
//                   selectedSkills.includes("Javascript")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Javascript")}
//               >
//                 Javascript
//               </button>
//               <button
//                 className={`${
//                   selectedSkills.includes("Design")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Design")}
//               >
//                 Design
//               </button> 
//               <button
//                 className={`${
//                   selectedSkills.includes("IT and Software")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("IT and Software")}
//               >
//                 IT and Software
//               </button>
//               <button
//                 className={`${
//                   selectedSkills.includes("Database")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Database")}
//               >
//                 Database
//               </button>
//               <button
//                 className={`${
//                   selectedSkills.includes("Marketing")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Marketing")}
//               >
//                 Marketing
//               </button>
//               <button
//                 className={`${
//                   selectedSkills.includes("Writing")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Writing")}
//               >
//                 Writing
//               </button>
//               <button
//                 className={`${
//                   selectedSkills.includes("Web development")
//                     ? "bg-[#9747FF90] text-white"
//                     : "bg-[#CAB7E150]"
//                 } py-2 rounded-lg`}
//                 onClick={() => handleSkillClick("Web development")}
//               >
//                 Web development
//               </button>
//             </div>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="font-semibold mt-8 w-28 py-1 rounded border border-[#9747FF] hover:bg-[#9747FF90] hover:text-white active:bg-white"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Welcome;
import React, { useState } from "react";
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
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skills: selectedSkills,
        workStatus: workStatus,
      }),
    };

    fetch("https://workshala-7v7q.onrender.com/welcome", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => console.error("Error submitting skills:", error));
  };

  return (
    <>
      <NavBar />
      <div className="flex w-full h-full bg-[#FFAEB612]">
        <div className="w-1/4 m-12">
          <img src={welcome} alt="" />
        </div>
        <div className="flex flex-col w-3/4 mt-12 ml-12 bg-white rounded-3xl shadow-xl px-16 py-6">
          <div className="font-semibold text-3xl">Welcome</div>
          <div className="flex mt-6 bg-[#FFAEB620] p-3 rounded-lg">
            <div></div>
            <div>Your account is created successfully. Let's get started</div>
          </div>
          <div className="mt-6 font-semibold text-2xl">Work Status</div>
          <div className="flex mt-6 gap-12">
            <div
              className={`flex flex-col cursor-pointer w-56 items-center border border-black p-4 rounded-xl ${
                workStatus === "Experienced" ? "bg-[#9747FF90]" : ""
              }`}
              onClick={() => handleWorkStatusClick("Experienced")}
            >
              <div className="font-medium text-lg">I'm Experienced</div>
              <div className="text-sm">I have work experience</div>
              <div className="text-sm">(Excluding Internships)</div>
            </div>
            <div
              className={`flex flex-col cursor-pointer items-center w-60 border border-black p-4 rounded-xl ${
                workStatus === "Fresher" ? "bg-[#9747FF90]" : ""
              }`}
              onClick={() => handleWorkStatusClick("Fresher")}
            >
              <div className="font-medium text-lg">I'm Fresher</div>
              <div className="text-sm"> I am a Student</div>
              <div className="text-sm">Haven’t worked after Graduation</div>
            </div>
          </div>
          <div className="mt-10 font-semibold text-2xl">Your Skills</div>
          <div className="mt-8">
          <div className="grid grid-cols-3 gap-8">
               <button
                className={`${
                  selectedSkills.includes("Blockchain")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Blockchain")}
              >
                Blockchain
              </button>
              <button
                className={`${
                  selectedSkills.includes("Architecture")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Architecture")}
              >
                Architecture
              </button>
              <button
                className={`${
                  selectedSkills.includes("Javascript")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Javascript")}
              >
                Javascript
              </button>
              <button
                className={`${
                  selectedSkills.includes("Design")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Design")}
              >
                Design
              </button> 
              <button
                className={`${
                  selectedSkills.includes("IT and Software")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("IT and Software")}
              >
                IT and Software
              </button>
              <button
                className={`${
                  selectedSkills.includes("Database")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Database")}
              >
                Database
              </button>
              <button
                className={`${
                  selectedSkills.includes("Marketing")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Marketing")}
              >
                Marketing
              </button>
              <button
                className={`${
                  selectedSkills.includes("Writing")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Writing")}
              >
                Writing
              </button>
              <button
                className={`${
                  selectedSkills.includes("Web development")
                    ? "bg-[#9747FF90] text-white"
                    : "bg-[#CAB7E150]"
                } py-2 rounded-lg`}
                onClick={() => handleSkillClick("Web development")}
              >
                Web development
              </button>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="font-semibold mt-8 w-28 py-1 rounded border border-[#9747FF] hover:bg-[#9747FF90] hover:text-white active:bg-white"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;

