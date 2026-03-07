import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentForm from '../Components/AppoinmentForm';
import '../styles/App.css'; // Import the custom styles
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
    <div>
      <h1>Nail Salon Management System </h1>
      <AppointmentForm onAdd={addAppointment} />
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>{appointment.name} - {appointment.date} at {appointment.time}</li>
        ))}
      </ul>
    </div>
  );
};
export default Appointment;