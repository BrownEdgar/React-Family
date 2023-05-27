import  {useReducer} from "react"
import reducer, { users } from "./reducer"
import { AUGUST, CHANGE_YEAR, INCREASE_REVENUE, SORT_AGE, TODAY_FILTER } from "./actionTypes"

export default function App() {
    const [state, dispatch] = useReducer(reducer, users);

    const bornToday = () => {
        const date = new Date()
        // const date = new Date('05/24/2023')
        dispatch({type: TODAY_FILTER, payload: date})
    }
    const sortedByAge = () => {
        dispatch({type: SORT_AGE})
    }
    const increase = () => {
        dispatch({type: INCREASE_REVENUE})
    }
    const changeYear = () => {
        dispatch({type: CHANGE_YEAR})
    }
    const august = () => {
        dispatch({type: AUGUST})
    }
    return (
        <div>
            <pre>state: {JSON.stringify(state, null,1)}</pre>
            <button onClick={bornToday}>born today</button>
            <button onClick={sortedByAge}>sorted by age</button>
            <button onClick={increase}>increase by 80.000</button>
            <button onClick={changeYear}>change year</button>
            <button onClick={august}>August</button>
        </div>
    )
}