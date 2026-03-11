import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Manicure and Pedicure",
    items: [
      { name: "Manicure", price: 25 },
      { name: "French Manicure", price: 30 },
      { name: "Gel Manicure", price: 45 },
      { name: "Volcano Manicure", price: 45 },
      { name: "Deluxe Manicure", price: 35 },
      { name: "Manicure/Pedicure", price: 65 },
      { name: "Pedicure", price: 40 },
      { name: "Deluxe Pedicure", price: 53 },
      { name: "Jelly Spa Pedicure", price: 58 },
      { name: "Volcano/Collagen", price: 63 },
      { name: "French Pedicure", price: 45 },
      { name: "CBD Volcano Spa", price: 70 },
    ],
  },
  {
    category: "Full Set and Fill In",
    items: [
      { name: "Acrylic Nails", price: 40 },
      { name: "Acrylic Nails French", price: 45 },
      { name: "Acrylic Refill w/ Gel Polish", price: 55 },
      { name: "Solar Full Set w/ Gel Polish", price: 70 },
      { name: "Solar Nails French", price: 55 },
      { name: "Solar Refill w/ Gel Polish", price: 57 },
      { name: "Solar Backfill", price: 45 },
      { name: "Solar Color", price: 52 },
      { name: "Ombre Set", price: 65 },
      { name: "Powder Dip", price: 50 },
      { name: "Powder Dip French", price: 55 },
      { name: "Dip with Soak Off", price: 57 },
    ],
  },
  {
    category: "Additional Services",
    items: [
      { name: "Polish Change Hands", price: 15 },
      { name: "Polish Change Feet", price: 20 },
      { name: "Gel Polish Change Hands", price: 30 },
      { name: "Gel Polish Change Feet", price: 30 },
      { name: "Child Pedicure", price: 26 },
      { name: "Tips", price: 6 },
      { name: "Soak Off With Service", price: 7 },
      { name: "Soak Off Without Service", price: 15 },
      { name: "Lotion", price: 8 },
      { name: "Cuticle Oil", price: 2 },
      { name: "Add Gel Polish with Service", price: 20 },
    ],
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h1>✨ Our Services</h1>

      <div className="services-grid">
        {services.map((section, index) => (
          <div key={index} className="service-card">
            <h2>{section.category}</h2>

            {section.items.map((item, i) => (
              <div key={i} className="service-row">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="book-btn-container">
        <Link to="/appointments" style={{ textDecoration: 'none' }}>
          <button className="book-btn">💅 Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;