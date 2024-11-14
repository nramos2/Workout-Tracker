import { useContext } from "react";
import { WorkoutsContext } from "../context/workoutContext.js";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext) //this hook returns the value of the context i.e. {state, dispatch} from workoutContext.js

    if (!context) {
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return context
}