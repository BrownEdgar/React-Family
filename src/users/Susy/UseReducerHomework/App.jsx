import  { useReducer } from "react";

import { THISDAY , SORTED } from "./actionTypes";
import reducer, { users } from "./reducer";

export default function App() {
   
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