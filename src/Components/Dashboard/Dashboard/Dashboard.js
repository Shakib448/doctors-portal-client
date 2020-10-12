import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import AppointmentsByDate from "../AppoinmentsByDate/AppointmentsByDate";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const handleDateFilter = async () => {
      try {
        const res = await AxiosConfig.post("/appointmentsByDate", {
          data: selectedDate,
        });
        setAppointments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleDateFilter();
  }, [selectedDate]);

  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };

  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
