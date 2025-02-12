import DoctorCard from "../../components/Doctors/DoctorCard";
import { BASE_URL } from "./../../config";
import useUserFetchData from "../../hooks/userUserFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());

    console.log("handle search");
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const {
    data: doctors,
    loading,
    error,
  } = useUserFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);


  return (
    <>
      <section className="sec bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading m-15">Find a Doctor</h2>
          <div
            className="max-w-[570px] m-[40px] mx-auto bg-[#0066ff2c] rounded-md flex items-center
           justify-between"
          >
            <input
              type="Search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
            placeholder:text-textColor"
              placeholder="Search Doctor by name or specification"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading mt-4 text-center">What our patient say</h2>
            <p className="text__para mt34 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
