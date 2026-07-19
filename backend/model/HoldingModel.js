const mongoose = require("mongoose");
const HoldingSchema = require("../schemas/HoldingsSchema");

const Holding = mongoose.model("Holding", HoldingSchema);

module.exports = Holding;