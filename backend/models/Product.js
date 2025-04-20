/** @format */

const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   category: {
//     type: String,
//     enum: ["vegetable", "fruit"],
//     required: true,
//   },
// });

// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },

//   description: {
//     type: String,
//     default: "",
//   },

//   price: {
//     type: Number,
//     required: true,
//     min: 0,
//   },

//   category: {
//     type: String,
//     enum: ["vegetable", "fruit"],
//     required: true,
//   },

//   stock: {
//     type: Number,
//     default: 0,
//   },

//   imageUrl: {
//     type: String,
//     default: "", // Can later add Cloudinary/S3 integration
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   }
// });

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: {
    type: String,
    default: "",
  },
  stock: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
    default: "", // Can later add Cloudinary/S3 integration
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: { type: String, enum: ["vegetable", "fruit"], required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
