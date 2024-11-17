const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const registration = mongoose.model("registration", registrationSchema);

module.exports = registration;
