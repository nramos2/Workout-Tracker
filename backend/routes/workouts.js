const express = require('express')
const Workout = require('../models/workoutModel.js')

const router = express.Router()

//GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: "GET all workouts" })
})

//GET a single workout 
router.get('/:id', (req, res) => {
    res.json({ mssg: "GET a single workout" })
})

//POST a new workout 
router.post('/', async (req, res) => {
    const {title, reps, weight} = req.body
    try {
        const workout = await Workout.create({title, reps, weight})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE a workout 
router.delete('/:id', (req, res) => {
    res.json({ mssg: "DELETE a workout" })
})

//UPDATE a new workout 
router.patch('/:id', (req, res) => {
    res.json({ mssg: "PATCH a new workout" })
})

module.exports = router