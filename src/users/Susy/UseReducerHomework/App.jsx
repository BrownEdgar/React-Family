import React, { useReducer } from "react";
import reducer from "../UseReducer/reducer";
import { THISDAY , SORTED } from "./actionTypes";

export default function App() {
    const users = [
        {
            id: 1,
            firstname: "Jhon",
            revenue: 560000,
            brd: new Date("5/12/1978")
        },
        
        {
            id: 2,
            firstname: "Rock",
            revenue: 860000,
            brd: new Date("8/18/1972")
        },

        {
            id: 3,
            firstname: "Silva",
            revenue: 320500,
            brd: new Date("2/3/1998")
        },

        {
            id: 4,
            firstname: "Emily",
            revenue: 786000,
            brd: new Date("05/24/2023")
        }
    ];
    const [state,dispatch] = useReducer(reducer,users)
    const thisDay = () => {
        dispatch({type: THISDAY,payload: new Date().toLocaleDateString()})
    }
    const sorted = () => {
        dispatch({type: SORTED})
    }
    
    return (
        <div>
            <pre>{JSON.stringify(state,null,1)}</pre>
            <button onClick={thisDay}>thisDay</button>
            <button onClick={sorted}>sorted</button>

        </div>
    )
}