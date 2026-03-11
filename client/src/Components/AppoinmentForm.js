import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AppointmentForm.css';

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
    event.preventDefault();
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

      // Show success message
      alert("✨ Appointment booked successfully!");
    } catch (error){
      console.error("Error submitting appointment:", error);
      alert("❌ Error booking appointment. Please try again.");
    }
  }

  return (
    <div className="appointment-form-card">
      <form onSubmit={handleSubmit}>
        <h2>💅 Book Your Appointment</h2>

        {/* NAME INPUT */}
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* LOCATION SELECT */}
        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select a Location</option>
            <option value="Brandon">Brandon</option>
            <option value="Flowood">Flowood</option>
          </select>
        </div>

        {/* SERVICE SELECT */}
        <div className="form-group">
          <label htmlFor="service">Service *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
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

        {/* DATE INPUT */}
        <div className="form-group">
          <label htmlFor="date">Preferred Date *</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* TIME SELECT */}
        <div className="form-group">
          <label htmlFor="time">Preferred Time *</label>
          <select
            id="time"
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

        {/* NOTES TEXTAREA */}
        <div className="form-group">
          <label htmlFor="notes">Special Notes (Optional)</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Any special requests or notes for your appointment..."
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="submit-button">
          ✨ Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
