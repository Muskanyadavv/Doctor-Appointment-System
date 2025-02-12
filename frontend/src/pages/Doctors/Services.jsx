
import {services} from "../../assets/data/services.crdownload";
import ServiceCard from "../../components/Services/ServiceCard"

const Services = () => {
  return (
   <section className="sec">
    <div className="container">
    <h2 className="text-[35px] font-[700] leading-6 text-center lg:mt-3">Available Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5lg:grid-[30px] mt-[30px]
      lg:mt-[55px]">
        {services.map((item,index) =>(
          <ServiceCard item = {item} index= {index} key={index} />
        ))}
      </div>
    </div>
   </section>
  )
}

export default Services;
