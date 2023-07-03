const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workourtSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    reps: {
      type: String,
      required: true,
    },
    sets: {
      type: string,
      required: true,
    },
    //Associating every workout document with a particular user.
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workourtSchema);
