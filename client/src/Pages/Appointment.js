import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentForm from "../Components/AppoinmentForm";
import '../styles/Appointment.css';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch data from the Express server
    axios.get('http://localhost:5000/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error(error));
  }, []);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">
        <div className="form-section">
          <AppointmentForm onAdd={addAppointment} />
        </div>

        <div className="appointments-section">
          <h2>📅 Upcoming Appointments</h2>
          {appointments.length === 0 ? (
            <p className="no-appointments">No appointments booked yet. Create your first one!</p>
          ) : (
            <ul className="appointments-list">
              {appointments.map(appointment => (
                <li key={appointment._id} className="appointment-item">
                  <div className="appointment-info">
                    <p className="appointment-name">{appointment.name}</p>
                    <p className="appointment-details">
                      📍 {appointment.location} • 📞 {appointment.service}
                    </p>
                  </div>
                  <div className="appointment-time">
                    <p className="date">{appointment.date}</p>
                    <p className="time">{appointment.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;