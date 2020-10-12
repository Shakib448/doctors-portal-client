import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const infoData = [
    {
      title: "Opening Hours",
      icon: faClock,
      description: "We are open 7days",
      bgColor: "primary",
    },
    {
      title: "Visit Our Location",
      icon: faMapMarker,
      description: "Brooklyn, NY 10004 USA",
      bgColor: "dark",
    },
    {
      title: "Call Us",
      icon: faPhone,
      description: "We are open 7days",
      bgColor: "primary",
    },
  ];

  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {infoData.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
