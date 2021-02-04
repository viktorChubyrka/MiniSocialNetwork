const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  creatorId: String,
  title: { type: String, default: "" },
  bodyText: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  likes: { type: Array, default: [] },
  comments: { type: Array, default: [] },
});

module.exports = mongoose.model("Users", userSchema);
