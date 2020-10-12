import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white info__card">
      <div
        className={`d-flex justify-content-center info__container info__${info.bgColor} `}
      >
        <div className="mr-3">
          <FontAwesomeIcon className="info__icon" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
