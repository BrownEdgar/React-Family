import React, { useReducer } from "react";
import reducer,{ initialStateValue } from "./reducer";
import { ADD_ELEMENT,DATA_FILTER} from "./actionTypes";

export default function App() {
    const [state,dispatch] = useReducer(reducer, initialStateValue)

    const handleClick = () => {
        dispatch({type: ADD_ELEMENT,payload: {
            element: 4
        }})
    }
    const handleClickFilter = () => {
        dispatch({type: DATA_FILTER,payload: "array"})
    }
    return (
        <div>
            <h1>state: {JSON.stringify(state,null,1)}</h1>
            <button onClick={handleClick}>add-element</button>
            <button onClick={handleClickFilter}>dataFilter</button>
        </div>
    )
}