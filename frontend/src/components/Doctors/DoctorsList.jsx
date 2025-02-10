import DoctorCard from "./DoctorCard";
import { BASE_URL } from "./../../config";
import useUserFetchData  from "../../hooks/userUserFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorsList = () => {
  const { data: doctors, loading, error } = useUserFetchData(`${BASE_URL}/doctors`);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
    lg:mt-[55px]"
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
