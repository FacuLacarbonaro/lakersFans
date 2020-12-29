const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayersSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  img: { type: String },
  from: { type: String },
  number: { type: Number },
  position: { type: String },
  height: { type: Number },
  weight: { type: Number },
  date: { type: String },
  yearsPro: { type: Number },
});

module.exports = mongoose.model("Players", PlayersSchema);
