const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        String,
        trim: true
    },
    name: {
        String,
        trim: true
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;