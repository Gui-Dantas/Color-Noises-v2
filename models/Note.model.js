const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  note: {
    type: String,
  },
});

const Note = model("Note", noteSchema);

module.exports = Note;
