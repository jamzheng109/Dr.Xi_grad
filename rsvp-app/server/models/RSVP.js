const mongoose = require('mongoose');

const RSVP = mongoose.model('RSVP', new mongoose.Schema({
  fullName: String,
  plusOne: Boolean,
}));

module.exports = RSVP;