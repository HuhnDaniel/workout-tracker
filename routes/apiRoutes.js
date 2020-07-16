const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req, res) => {
	db.Workout.find({})
		.then(dbWorkout => {
			res.json(dbWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		})
});

module.exports = router;