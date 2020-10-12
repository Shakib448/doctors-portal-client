import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const BookAppointment = ({ date }) => {
  const availableData = [
    {
      title: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      sets: "10 SPACE AVAILABLE",
    },
    {
      title: "Cosmetic Dentistry",
      time: "10:05 AM - 11:30 AM",
      sets: "10 SPACE AVAILABLE",
    },
    {
      title: "Teeth Cleaning",
      time: "5:00 PM - 6:30 AM",
      sets: "10 SPACE AVAILABLE",
    },
    {
      title: "Cavity Protection",
      time: "7:00 AM - 8:30 AM",
      sets: "10 SPACE AVAILABLE",
    },
    {
      title: "Teeth Root Canal",
      time: "9:00 AM - 10:00 AM",
      sets: "10 SPACE AVAILABLE",
    },
    {
      title: "Teeth Transference",
      time: "2:00 PM - 4:00 PM",
      sets: "10 SPACE AVAILABLE",
    },
  ];
  return (
    <section>
      <h2 className="text-center mb-5 text-brand">
        Available appointment on, {date.toDateString()}{" "}
      </h2>
      <div className="row ">
        {availableData.map((appointment, id) => (
          <BookingCard appointment={appointment} key={id} date={date} />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
