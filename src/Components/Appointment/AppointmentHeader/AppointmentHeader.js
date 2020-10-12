import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import chair from "../../../images/chair.png";

const AppointmentHeader = ({ handleDate }) => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4256" }}>Appointment</h1>
        <Calendar onChange={handleDate} value={new Date()} />
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
