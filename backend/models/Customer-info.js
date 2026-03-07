const mongoose = require('mongoose');
const customerInfoSchema = new mongoose.Schema({
  name: String,
  email: String,    
    phone: String,
    address: String,
   appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    amount: { type: Number, required: true },
   method: { type: String, enum: ['Cash','Card','Online'], required: true },
   status: { type: String, enum: ['Pending','Paid','Refunded'], default: 'Pending' }}, 
  {timestamps: true });

const CustomerInfo = mongoose.model('CustomerInfo', customerInfoSchema);
module.exports = CustomerInfo;  