import React from "react";
import img1 from "../../../images/foluride.png";
import img2 from "../../../images/cavity.png";
import img3 from "../../../images//whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
const Services = () => {
  const serviceData = [
    {
      name: "Fluoride Treatment",
      img: img1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla nostrum laborum quos corporis. Alias?",
    },
    {
      name: "Cavity Filling",
      img: img2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla nostrum laborum quos corporis. Alias?",
    },
    {
      name: "Teeth Whitening",
      img: img3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla nostrum laborum quos corporis. Alias?",
    },
  ];
  return (
    <section className="services__container mt-5 mb-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>Our Services</h5>
        <h2 style={{ color: "#3a4256" }}>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-4">
          {serviceData.map((service) => (
            <ServiceDetail service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
