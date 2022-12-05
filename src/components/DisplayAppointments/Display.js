/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import './Display.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAppointments, selectAppointments } from '../../Redux/AppointmentsSlice';
import { fetchDoctors, selectDoctors, selectDoctorsFulfilled } from '../../Redux/doctorSlice';

const Display = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(selectAppointments);
  const doctorsFulfilled  = useSelector(selectDoctorsFulfilled)
  // Fetch the appointments for the curent user:
  // loop through the appointments and render each appointment
  
  useEffect(() => {
    dispatch(fetchAppointments());
    dispatch(fetchDoctors());
  }, [dispatch]);
  
  const allDoctors = useSelector(selectDoctors);

  return (

    <div className="display">
      <h1 className="display__header">Booked Appointments</h1>

      {
        (appointments && doctorsFulfilled) && appointments.map((appointment, index) => (
          <div className="appointment__card" key={index}>
            <div className="top">
              <div className="left">
                <p>Appointment Date:</p>
                {/* should destroy the appointment */}
                <p>Delete</p>
              </div>
              <div className="time">
                {appointment.date_of_appointment}
                {' '}
                at
                {' '}
                {appointment.time_of_appointment}
              </div>
            </div>
            <div className="bottom">
              <p>
                {allDoctors[appointment.doctor_id].name}
                <br />
                {allDoctors[appointment.doctor_id].specialization}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Display;
