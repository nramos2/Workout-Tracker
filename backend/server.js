/*
Express helps listen for connections and responds to their requests 
*/

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts.js')

//express app
const app = express()

//middleware called for every request that comes in

//checks to see if request has any data and passes it into req object
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//route handling

//attaches routes to the app for workouts path and adds those relative routes to the end of it
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests only once we've connected to db
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port 4000')
        })
    }).catch((error) => {
        console.log(error)
    })

