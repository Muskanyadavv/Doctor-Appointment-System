import { Routes, Route } from "react-router-dom";
import Home from "../pages/Doctors/Home.jsx";
import Doctors from "../pages/Doctors/Doctors.jsx";
import Login from "../pages/Doctors/Login.jsx";
import DoctorDetails from "../pages/Doctors/DoctorDetails.jsx";
import Signup from "../pages/Doctors/Signup.jsx";
import Contact from "../pages/Doctors/Contact.jsx";
import Services from "../pages/Doctors/Services.jsx";
import MyAccount from "../Dashboard/user-account/MyAccount.jsx";
import Dashboard from "../Dashboard/doctor-account/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/users/profile/me"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors/profile/me"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Routers;
