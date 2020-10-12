import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../Dashboard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import AxiosConfig from "../AxiosConfig/AxiosConfig";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const handleAllPatients = async () => {
      try {
        const res = await AxiosConfig.get("/appointments");
        setAppointments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAllPatients();
  }, []);

  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">All Patients</h5>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  );
};

export default AllPatients;
