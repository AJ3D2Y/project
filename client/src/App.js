import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import './styles/App.css'; // Import the custom styles
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
const App = () => {
  
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointment />} />
      </Routes>
      </>
  );
};
export default App;