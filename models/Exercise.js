const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    },
    weight: {
        type: Number,
        required: "Enter an amount"
    },
    reps: {
        type: Number,
        required: "Enter an amount"
    },
    sets: {
        type: Number,
        required: "Enter an amount"
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;