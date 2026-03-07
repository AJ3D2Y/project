const mongoose = require('mongoose');
const customerInfoSchema = new mongoose.Schema({
  name: String,
  email: String,
    phone: String,
    address: String,
    paymentMethod: String,
});
const CustomerInfo = mongoose.model('CustomerInfo', customerInfoSchema);
module.exports = CustomerInfo;
