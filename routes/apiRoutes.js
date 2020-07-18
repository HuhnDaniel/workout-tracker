const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/workouts", (req, res) => {
    Workout.find({})
        .sort({ day: 1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.post("/workouts", ({ body }, res) => {
    console.log("post new workout");
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/workouts/:id", ({ body, params }, res) => {
    console.log(body, params);
    Workout.updateOne(
        {
            _id: params.id
        },
        {
            $addToSet: {
                exercises: body
            }
        },
        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

module.exports = router;