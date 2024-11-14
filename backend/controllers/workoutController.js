const Workout = require('../models/workoutModel.js')
const mongoose = require('mongoose')

//get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 }) //finds all workouts sorted by date in descending order
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params //this grabs the ":id" part and also others if there are more params
    if (!mongoose.Types.ObjectId.isValid(id)) { //checks to see if id is valid at all
        return res.status(404).json({ error: "No such workout exists" })
    }

    try {
        const workout = await Workout.findById(id)
        if (!workout) { //if workout simply doesn't exist
            return res.status(404).json({ error: "No such workout exists" })
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//create new workout
const createWorkout = async (req, res) => {
    const { title, reps, weight } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!weight) {
        emptyFields.push('weight')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please make sure all fields are filled in!', emptyFields })
    }

    //add doc to db
    try {
        const workout = await Workout.create({ title, reps, weight })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params //this grabs the ":id" part and also others if there are more params
    if (!mongoose.Types.ObjectId.isValid(id)) { //checks to see if id is valid at all
        return res.status(404).json({ error: "No such workout exists" })
    }

    try {
        const workout = await Workout.findOneAndDelete({ _id: id }) //mongodb labels id's like '_id'
        if (!workout) { //checks to see if id is valid at all
            return res.status(400).json({ error: "No such workout exists" })
        }
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params //this grabs the ":id" part and also others if there are more params
    if (!mongoose.Types.ObjectId.isValid(id)) { //checks to see if id is valid at all
        return res.status(404).json({ error: "No such workout exists" })
    }

    try {
        const workout = await Workout.findOneAndUpdate({ _id: id }, {
            ...req.body
        })
        if (!workout) { //checks to see if id is valid at all
            return res.status(400).json({ error: "No such workout exists" })
        }
        res.status(200).json(workout)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}


module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}