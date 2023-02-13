/** @format */

const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Add Your Name"],
  },
  selector: {
    type: String,
    required: [true, "Please Select Your Sectior"],
  },
  checkbox: {
    type: Boolean,
    required: [true, "Please Agree The Terms"],
  },
});
module.exports = mongoose.model("User", userSchema);
