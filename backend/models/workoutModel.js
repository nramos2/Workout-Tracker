const mongoose = require('mongoose')

//variable that helps create new schemas
const Schema = mongoose.Schema

//defines structure of documents saved to collection on db
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, {timestamps: true /*shows when was created and last updated */})

//creates model to work with the workouts collection when exported 
module.exports = mongoose.model('Workout', workoutSchema)