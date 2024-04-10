const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  sessionDate: {
    type: String,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  summary: {
    type: String,   
  },
  pricing: {
    type: Number,
    default: 400,
  },
  paymentStatus: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true,
}
);

const Session = mongoose.models.Session || mongoose.model("Session", sessionSchema);

module.exports = Session;
