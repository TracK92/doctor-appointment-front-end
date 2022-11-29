/* eslint-disable */

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { fetchDoctors, doctorSelector } from "../../Redux/doctorSlice";

import "./doctors.css";

const DoctorsList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(doctorSelector);

  // Fetch doctors on mount
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  // scroll to the right
  const scrollRight = () => {
    const container = document.querySelector(".scroll_content");
    container.scrollLeft += container.offsetWidth;
  };

  // scroll to the left
  const scrollLeft = () => {
    const container = document.querySelector(".scroll_content");
    container.scrollLeft -= container.offsetWidth;
  };


  return (
    <div className="doctors_sect">
      {/* loading main page */}
      {doctors.loading && <div className="loading">Loading...</div>}
      {/* error main page */}
      {doctors.hasErrors && (
        <div className="error">Unable to display doctors.</div>
      )}
      {/* doctors list */}
      <div className="content_div">
        {/* scroll left arrow */}
        <div className="arrow_div">
          <button className="arrow left" onClick={scrollLeft}>
            <BiLeftArrow />
          </button>
        </div>
        <div className="cover_div">
          <div className="scroll_content">
            {doctors.doctors.map((doctor) => (
              <div key={doctor.id} className="doctors_div">
                <img
                  className="doctors_img"
                  src={doctor.photo}
                  alt={doctor.name}
                />
                <h2 className="doctors_name">{doctor.name}</h2>
                <p className="specialization">{doctor.specialization}</p>
              </div>
            ))}
          </div>
        </div>
        {/* scroll right arrow */}
        <div>
          <button className="arrow" onClick={scrollRight}>
            <BiRightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
