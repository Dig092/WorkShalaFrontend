import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../Components/AuthContext';
import NavBar from "../Components/NavBar";

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [profileData, setProfileData] = useState({});

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    logout();
    navigate("/");
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://workshala-7v7q.onrender.com/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with the actual access token
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfileData(data); // Set the fetched profile data in state
        } else {
          console.error('Failed to fetch profile data');
        }
      } catch (error) {
        console.error('An error occurred during profile data fetch', error);
      }
    };

    fetchProfileData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts



  return (
    <>

    <NavBar />
      <div className="flex flex-col items-center">
        <div className="flex m-12 w-11/12 p-8 bg-[#946CC340]">
          <div className="w-24 h-24 bg-black rounded-md">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <div className="font-semibold text-xl pb-1">{profileData}</div>
            <div className="pb-1">UI/UX Designer . Web Developer</div>
            <div>Ajay Kumar Garg Engineering College</div>
          </div>
          <div className="flex w-3/5 items-center justify-end gap-8">
            <button className="text-white bg-[#B092D3] px-11 py-3 rounded-md">
              Edit
            </button>
            <button className="text-white bg-[#B092D3] px-11 py-3 rounded-md">
              Your Resume
            </button>
          </div>
        </div>
        <div className="flex-col border rounded-2xl w-11/12">
          <div className="font-semibold text-2xl m-4">Your Details</div>
          <div className="m-4 tracking-wider line-loose">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </div>
        </div>
      </div>
        <button
          className="text-white bg-[#B092D3] px-11 py-3 mx-16 my-5 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
    </>
  );
};

export default Profile;
