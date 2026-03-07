const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const Appointment = require('./models/appointment'); // Import the Appointment model
app.use(cors());
app.use(express.json());

// Add this to server.js
app.get('/appointments', async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});
// Connect to MongoDB
//mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });
// Define routes and middleware


// Create a new todo
app.post('/api/appointments', async (req, res) => {
  console.log("Received appointment data:", req.body);
  const newAppointment = new Appointment(req.body);
  await newAppointment.save();
  res.json(newAppointment);
});
// Update an existing todo
app.put('/todos/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});
// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.json({ message: 'Todo deleted successfully' });
});
const startserver = async () => {
  try {
    await mongoose.connect('mongodb+srv://jonesambar_db_user:A6bn2FSeWdKsteaY@cluster0.tf82cqy.mongodb.net/?appName=Cluster0' );
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}
startserver();

