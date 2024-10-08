const express = require('express')
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController.js')

const router = express.Router()

//GET all workouts
router.get('/', getAllWorkouts)

//GET a single workout 
router.get('/:id', getWorkout)

//POST a new workout 
router.post('/', createWorkout)

//DELETE a workout 
router.delete('/:id', deleteWorkout)

//UPDATE a single workout 
router.patch('/:id', updateWorkout)

module.exports = router