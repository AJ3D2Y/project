const mongoose = require('mongoose');
const nailTechSchema = new mongoose.Schema({
  name: String,
  email: String,
    phone: String, 
    role: String, 
    isActive: { type: Boolean, default: true },
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true }, 
     workdays: [String],
    startTime: String,  
    endTime: String,

});
const NailTech = mongoose.model('NailTech', nailTechSchema);
module.exports = NailTech;
