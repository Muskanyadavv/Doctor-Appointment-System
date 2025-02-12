import useUserFetchData from "../../hooks/userUserFetchData"
import { BASE_URL , token} from "../../config"
import DoctorCard from '../../components/Doctors/DoctorCard';
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";


const MyBookings = () => {

  const {data:appointments,
     loading, error} = 
     useUserFetchData(`${BASE_URL}/users/appointments/my-appointments`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
     )

  return (
    <div>
      {loading  && !error && <Loading/>}
    { error && !loading && <Error errMessage={error} />} 

  {!loading && !error  && (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
    {appointments.map(doctor => (
      <DoctorCard doctor={doctor} key= {doctor._id} />
    ))}
    </div>
    )} 
 { !loading && !error && appointments.length === 0 && (
      <h2 className="mt-8 leading-7 text-[20px] font-semibold text-blue-600">
        You did not book any doctor yet!
      </h2>
    )} 
    </div>
  );
};

export default MyBookings;
