const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
