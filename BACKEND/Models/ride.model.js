const { sign } = require("jsonwebtoken");
const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "captain",
  },
  pickup: {
    name: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lon: { type: Number, required: true },
    },
  },
  destination: {
    name: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lon: { type: Number, required: true },
    },
  },
  fare: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "ongoing", "completed", "cancel"],
    default: "pending",
  },
  duration: {
    type: Number,
  }, //in sec
  distance: {
    type: Number,
  }, //in meter
  paymentID: {
    type: String,
  },
  orderID: {
    type: String,
  },
  signature: {
    type: String,
  },
});

module.exports = mongoose.model("ride", rideSchema);
