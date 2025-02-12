import heroImg from "../../assets/images/hero-img01.png";
import heroImg02 from "../../assets/images/hero-img02.png";
import heroImg03 from "../../assets/images/hero-img03.png";
import icon1 from "../../assets/images/icon01.png";
import icon2 from "../../assets/images/icon02.png";
import icon3 from "../../assets/images/icon03.png";
import featureImg from "../../assets/images/feature-img.png";
import video from "../../assets/images/video-icon.png";
import avatar from "../../assets/images/avatar-icon.png";
import faqimg from "../../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../../components/About/About";
import ServiceList from "../../components/Services/ServiceList";
import DoctorsList from "../../components/Doctors/DoctorsList";
import FaqList from "../../components/faq/FaqList";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* HERO Section*/}
      <section className=" sec hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* HERO CONTENT */}

            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[30px] leading-[40px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  we help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate repudiandae dignissimos repellat repellendus ipsum
                  sint deleniti recusandae adipisci vitae itaque soluta, odio
                </p>

                <button className="btn">Request an Appointment</button>

                {/* HERO COUNTER */}

                <div className="mt-[20px] lg:mt-[40px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[40px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-blue-400 rounded-full block mt-[-14px]"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO CONTENT */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION END */}

      <section className="sec">
        <div className="container">
          <div className="lg:w-[500px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para mt-5 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[30px] mt-[20px] lg:mt-[30px]">
            <div className="py-[13px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>

              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-5 text-textColor">
                  World-class care for eveyone. Our heatlth system offers
                  unmatched, experts health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E] 
    mt-[30px] mx-auto flex items-center justify-center group 
    hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-4 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[13px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
              </div>

              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-5 text-textColor">
                  World-class care for eveyone. Our heatlth system offers
                  unmatched, experts health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
    mt-[30px] mx-auto flex items-center justify-center group 
    hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-4 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[13px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>

              <div className="mt-[20px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-5 text-textColor">
                  {" "}
                  World-class care for eveyone. Our heatlth system offers
                  unmatched, experts health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
    mt-[30px] mx-auto flex items-center justify-center group 
    hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-3 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*============= About Section ==============*/}
      <About />

      {/* SERVICES SECTION*/}
      <section className="sec">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para mt-4 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* ==========Feature Section================== */}
      <section className="sec">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para mt-4">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div
                className="w-[100px] lg:w-[150px] bg-white absolute bottom-[50px] left-0 md:bottom-[50px] md:left-5 z-20
            p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                  font-[600]"
                    >
                      Tue, 25
                    </p>
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
                  font-[400]"
                    >
                      10:00AM
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
                bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"
                  >
                    <img src={video} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
            leading-[8px] lg:text-[12px] lg-leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full"
                >
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatar} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[12px] lg:leading-[16px] font-[500] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========Our Great Doctor================== */}
      <section className="sec">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h4 className="heading text-center">Our Great Doctors</h4>
            <p className="text__para mt-3 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>

      {/*=========== FAQ Section======================= */}

      <section className="sec">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-7">
            <div className="w-1/2 hidden md:block">
              <img src={faqimg} alt="/" />
            </div>
            <div className="w-full md:1/2">
              <h2 className="heading">Most asked questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section */}

      <section className="sec">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para mt-3 text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>

      {/* FOOTER SECTION  */}
    </>
  );
};

export default Home;
