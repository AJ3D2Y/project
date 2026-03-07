const mongoose = require('mongoose');
const customerInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },        // "Gel Manicure"
  price: { type: Number, required: true },
  durationMin: { type: Number, required: true }, // 60
  isActive: { type: Boolean, default: true }}, 
  { timestamps: true });

const ServiceInfo = mongoose.model('ServiceInfo', customerInfoSchema);
module.exports = ServiceInfo;
