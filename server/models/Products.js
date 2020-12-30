const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String },
  img: { type: String },
  price: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model("Products", ProductsSchema);
