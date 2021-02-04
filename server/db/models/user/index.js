const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  email: String,
  name: String,
  surname: String,
  friends: { type: Array, default: [] },
  photo: { type: String, default: "" },
});

module.exports = mongoose.model("Users", userSchema);
