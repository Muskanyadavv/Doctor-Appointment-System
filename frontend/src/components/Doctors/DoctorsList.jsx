import DoctorCard from "./DoctorCard";
import { BASE_URL } from "./../../config";
import useUserFetchData from "../../hooks/useUserFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";


const API_URL = import.meta.env.VITE_API_URL;

const DoctorsList = () => {
  const {
    data: doctors,
    loading,
    error,
  } = useUserFetchData(`${API_URL}/doctors`);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
    lg:mt-[25px]"
        >
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorsList;
