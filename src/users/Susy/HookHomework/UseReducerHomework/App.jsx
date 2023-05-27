import  { useReducer } from "react";

import { THISDAY , SORTED , SALARY , YEAR , AUGUST} from "./actionTypes";
import reducer, { users } from "./reducer";

export default function App() {
   
    const [state,dispatch] = useReducer(reducer,users)
    const thisDay = () => {
        dispatch({type: THISDAY,payload: new Date()})
    }
    const sorted = () => {
        dispatch({type: SORTED})
    }
    const salary = () => {
        dispatch({type: SALARY})
    }
    const changeYear = () => {
        dispatch({type: YEAR})
    }
    const ougustMonth = () => {
        dispatch({type: AUGUST})
    }
    
    return (
        <div>
            <pre>{JSON.stringify(state,null,1)}</pre>
            <button onClick={thisDay}>thisDay</button>
            <button onClick={sorted}>sorted</button>
            <button onClick={salary}>salary</button>
            <button onClick={changeYear}>changeYear</button>
            <button onClick={ougustMonth}>ougustMonth</button>

        </div>
    )
}