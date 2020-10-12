import React from "react";
import doctor from "../../../images/doctor.png";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="" />
          </div>
          <div className="col-md-7 text-white py-5">
            <h5 className="text-primary text-uppercase ">Appointment</h5>
            <h1 className="my-4">
              Make an Appointment <br /> Today
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
            </p>
            <button className="btn btn-brand">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
