import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext"; // Ensure this path is correct
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useGetProfile from '../../hooks/useUserFetchData'
import {BASE_URL} from "../../config";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab,setTab] = useState('bookings');

  const {data:userData,
     loading, error} 
  = useGetProfile(`${BASE_URL}/users/profile/me`);

  const navigate= useNavigate();
 // console.log(userData, "userdata");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm("Are you sure you want to delete your account? This action is irreversible.")) {
      return;
    }
  
    try {
      const res = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure token is sent
        },
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        throw new Error(result.message);
      }
  
      toast.success("Account deleted successfully!");
      dispatch({ type: "LOGOUT" }); // Clear user session
      navigate("/register"); // Redirect user after deletion
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  return (
    <section className="sec">
    <div className="max-w-[1170px] px-5 mx-auto">

{loading && !error  && <Loading/>}
{ error && !loading && <Error errMessage={error} />}

{
  !loading && !error && ( 
    <div className="grid md:grid-cols-3 gap-10">
        <div className="pb-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-gray-600">
             {userData.photo ? (
              <img
                src={userData.photo}
                alt=" "
                className="profile-image rounded-full"
              />
             ) : (
               <BiUser className="w-full h-full text-gray-600 bg-slate-300 rounded-full" />
             )}
           
            </figure>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
           {userData.name}
            </h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">
             {userData.email}
            </p>
            <p className="text-textColor text-[15px] leading-6 font-medium">
              Blood Type:
              <span className="ml-2 text-headingColor text-[22px] leading-8">
             {userData.bloodType}
              </span>
            </p>
          </div>

          <div className="mt-[50px] md:mt-[100px]">
            <button
              onClick={handleLogout}
              className="w-full bg-[#2e3138] p-3 text-[16px] leading-7 rounded-md text-white"
            >
              Logout
            </button>
            <button onClick={handleDeleteAccount}
            className="w-full bg-red-500 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
              Delete account
            </button>
          </div>
        </div>

        <div className="md:col-span-2 md:px-[30px]">
          <div>
            <button onClick={()=> setTab('bookings')}
              className={` ${tab === 'bookings' && 'bg-blue-500 text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7
    border border-solid border-primaryColor`}  >
              My Bookings
            </button>

            <button onClick={()=> setTab('settings')}
              className={` ${tab === 'settings' && "bg-blue-500 text-white font-normal"} py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7
    border border-solid border-primaryColor`} 
    >
              Profile Settings
            </button>
          </div>

          {tab === "bookings" && <MyBookings />}
          {tab === "settings" && <Profile user = {userData} />}
        </div>
      </div>
  )
}
    </div>
    </section>

  );
};

export default MyAccount;
