const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
  name: String,
  date: Date,
  time: String,
  description: String
 
  /*
  nailTech: { type: mongoose.Schema.Types.ObjectId, ref: 'NailTech' },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  customerInfo: { type: mongoose.Schema.Types.ObjectId, ref: 'CustomerInfo' },
  status: { type: String, enum: ['Booked', 'Completed', 'Cancelled', 'No-Show'] },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  startTime: Date,
  endTime: Date,
  totalPrice: Number,
  notes: String
  */
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
