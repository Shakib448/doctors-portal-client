import React, { useState } from "react";
// import Appointment from "../Appointment/Appointment";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ appointment, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{appointment.title}</h5>
          <h6>{appointment.time}</h6>
          <p>{appointment.sets}</p>
          <button onClick={openModal} className="btn btn-brand text-uppercase">
            {" "}
            Book Appointment{" "}
          </button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            appointmentOn={appointment.title}
            closeModal={closeModal}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
