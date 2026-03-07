import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = ({ onAdd }) => {
  const [formData, setFormData] = useState ({
    name: "",
    date: "",
    time: "",
    description: ""
  });
  const timeSlots = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00"
  ];

  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
  fetch("http://localhost:5000/api/appointments")
    .then(res => res.json())
    .then(data => setAppointments(data))
    .catch(err => console.error(err));
  }, []);

  const bookedTimes = appointments
    .filter(a => a.date === selectedDate?.toISOString().split("T")[0])
    .map(a => a.time);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prev => ({
    ...prev,
    [name]: value
    }));
  }
  async function handleSubmit(event) {
    event.preventDefault(); // prevents page reload
    console.log("Submitting appointment:", formData);
    try{
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newAppointment = await response.json();
      console.log("Appointment booked:", newAppointment);

      // Reset form
      setFormData({
      name: "",
      date: "",
      time: "",
      description: ""
      });
    } catch (error){
      console.error("Error submitting appointment:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <h2>Make an Appointment</h2>

    <div>
    <label>Name:</label>
    <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    />
    </div>
    {/*}
    <div>
    <label>Date:</label>
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
      setSelectedDate(date);
      setFormData(prev => ({
      ...prev,
      date: date.toISOString().split("T")[0]
      }));
      }}
      minDate={new Date()}
      dateFormat="yyyy-MM-dd"
    />
    </div>
    */}
      {/* 
    <div>
    <label>Time:</label>
    
    <select
      name="time"
      value={formData.time}
      onChange={handleChange}
      required
      >
      <option value="">Select Time</option>

      {timeSlots.map(time => (
      <option
      key={time}
      value={time}
      disabled={bookedTimes.includes(time)} // NEW
      >
      {time} {bookedTimes.includes(time) ? "(Booked)" : ""} 
      </option>
      ))}

    </select>
    </div>
    */}
    <div>
    <label>Notes:</label>
    <textarea
    name="notes"
    value={formData.notes}
    onChange={handleChange}
    />
    </div>

    <button type="submit">Book Appointment</button>
    </form>
  );
};
export default AppointmentForm;
