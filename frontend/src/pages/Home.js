import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js"

//components
import WorkoutDetails from '../components/WorkoutDetails.js'
import WorkoutForm from "../components/WorkoutForm.js"

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()

    //calls function when component is rendered, not needing to reload whole page
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts') //fetches from our backend -- also the "proxy" property in package.json helps with the cors restrictions
            const json = await response.json() //passes json response into local json

            if (response.ok) {
                console.log("SET_WORKOUTS")
                dispatch({ type: 'SET_WORKOUTS', payload: json }) //the payload is the workout list that is returned after creating one
            } //dispatch, remember, is the workoutsReducer, we are calling it once we know that the GET worked
        }

        fetchWorkouts()
    }, [dispatch]/*when empty this makes sure it only fires once when it is rendered, but if something like dispatch is in it, it will rerender when that thing changes*/)

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => ( //this checks that we have workouts in the first place (not null), only then will we map through them (if left of && is true, expression right of && carries out)
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home