import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = ({ onAdd }) => {
  const [formData, setFormData] = useState ({
    name: "",
    date: "",
    time: "",
    service: "",
    location: "",
    notes: ""
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
      service: "",
      location: "",
      notes: ""
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
    
    <div>
      <label>Location:</label>
      <select
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      >
        <option value="">Select Location</option>
        <option value="Brandon">Brandon</option>
        <option value="Flowood">Flowood</option>
      </select>
    </div>

    <div>
      <label>Service:</label>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Select Service</option>
        <option value="Manicure">Manicure</option>
        <option value="French Manicure">French Manicure</option>
        <option value="Gel Manicure">Gel Manicure</option>
        <option value="Volcano Manicure">Volcano Manicure</option>
        <option value="Deluxe Manicure">Deluxe Manicure</option>
        <option value="Pedicure">Pedicure</option>
        <option value="Deluxe Pedicure">Deluxe Pedicure</option>
        <option value="Acrylic Nails">Acrylic Nails</option>
        <option value="Ombre Set">Ombre Set</option>
        <option value="Powder Dip">Powder Dip</option>
      </select>
    </div>

    <div>
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label>Time:</label>
      <select
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select Time</option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
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
