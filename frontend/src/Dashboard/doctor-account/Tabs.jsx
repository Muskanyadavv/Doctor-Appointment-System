/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BiMenu } from "react-icons/bi"; // ✅ Correct
import { token, BASE_URL } from "../../config";
import { toast } from "react-toastify";

import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab, doctorData }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const handleDeleteAccount = async () => {
    try {
      const res = await fetch(`${API_URL}/doctors/${doctorData._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      toast.success("Account deleted successfully");
      dispatch({ type: "Logout" });
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>

      <div
        className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max
      rounded-md"
      >
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          }
        w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-priamaryColor"
              : "bg-transparent text-headingColor"
          }
        w-full btn mt=0 rounded-md`}
        >
          Appointments
        </button>

        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-priamaryColor"
              : "bg-transparent text-headingColor"
          }
        w-full btn mt=0 rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
          <button
            onClick={handleDeleteAccount}
            className="w-full bg-red-500 mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
