const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter Type of Workout"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter Name of Workout"
        },
        duration: {
            type: Number,
            trim: true
        },
        weight: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        sets: {
            type: Number,
            trim: true
        },
        duration: {
            type: Number,
            trim: true
        },
        distance: {
            type: Number,
            trim: true
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;