const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  firm: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  token: {
    type: String,
    required: true
  },

  sessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  }],

  productName:{
    type: String
  },

  address: {
    type: String
  },

  owner_name: {
    type: String,
  }
},{
  timestamps: true,
  strict: true
});

const Client =mongoose.models.Client ||  mongoose.model('Client', clientSchema);

module.exports = Client;