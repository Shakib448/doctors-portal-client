import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar />
      <AppointmentHeader handleDate={handleDate} />
      <BookAppointment date={selectedDate} />
    </div>
  );
};

export default Appointment;
