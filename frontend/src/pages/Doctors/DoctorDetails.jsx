import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "./../../config";
import useUserFetchData from "./../../hooks/useUserFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();


  const API_URL = import.meta.env.VITE_API_URL;

  const {
    data: doctor,
    loading,
    error,
  } = useUserFetchData(`${API_URL}/doctors/${id}`);
  const {
    name = "",
    qualifications = [],
    experiences = [],
    timeSlots = [],
    reviews = [],
    bio = "",
    about = "",
    averageRating = 0,
    totalRating = 0,
    specialization = "",
    ticketPrice = 0,
    photo = "",
  } = doctor || {};
  

  return (
    <section className="sec">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && doctor ? (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className=" profile-image max-w-[200px] max-h-[200px]">
                  {/* <img src={photo} alt="" /> */}
                  <img src={photo || "/default-doctor.png"} alt="Doctor" />
                </figure>
                <div>
                  <span
                    className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]
          leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
                  >
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 dont-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span
                      className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
            lg:leading-7 font-semibold text-headingColor"
                    >
                      <img src={starIcon} alt="" /> {averageRating}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColo">
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] 
        leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] 
          leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab == "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab == "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>
            <SidePanel
              doctorId={doctor._id}
              ticketPrice={ticketPrice}
              timeSlots={timeSlots}
            />
          </div>
        ) : 
        (
          !loading && <p className="text-center text-textColor">
          Doctor details not available.</p>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
