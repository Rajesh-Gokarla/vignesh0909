const mongoose = require("mongoose");

const Student = mongoose.model('Student', {
  rollno: { type: String, required: true },
  name: { type: String, required: true },
  dept: { type: String, required: true },
  year: { type: String, required: true },
  sec: { type: String, required: true },
  phno: { type: String, required: true },
  //creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = Student;
