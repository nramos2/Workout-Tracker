//this is to keep the local state in sync with the database so we do not have to refresh every time we make a change to it 
import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext() //creates a global space in which data, like our workouts, may reside instead of needing to pass through so many components

export const workoutsReducer = (state, action) => { //state is our previous state value, action is the dispatch that holds a type property and a payload
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload //the payload here would be an array of all of the workouts because in this case, we are setting all of the workouts (fetching all the workouts)
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload/**adds the new workout */, ...state.workouts /**state is the pre existing workouts objects that action.payload appends to */]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
            }
        default:
            return state //returns state unchanged 
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    //dispatch calls the reducer function in response to an action - it holds the type of change we want to make and the data we need to change it
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null //workouts will be an attribute of 'state', think of 'state' as an object holding related attributes together as they are currently
    })

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}> {/**makes the state and dispatch accessible in the context */}
            {children} {/* this is how we are wrapping App in the context*/}
        </WorkoutsContext.Provider>
    )
}