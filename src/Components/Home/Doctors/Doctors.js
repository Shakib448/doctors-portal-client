import { faVestPatches } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const handleDoctors = async () => {
      try {
        const res = await AxiosConfig.get("/doctors");
        setDoctors(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleDoctors();
  }, []);

  return (
    <section className="doctors">
      <div className="container">
        <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
        <div className="row">
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
