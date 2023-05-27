import { CHANGE_YEAR, PEOPLE_AUGUST, PERSON_TODAY, SMALL_INCOME, SORT_YEAR } from "./actionType"
import { useReducer } from "react"
import reducer, { initialStateUsers } from "./reducer"
import './App.scss'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateUsers)

  function handlePersonToday() {
    dispatch({type: PERSON_TODAY, payload: {
      today: new Date().toLocaleDateString(),
    }})
  }

  function handleSortYeart() {
    dispatch({type: SORT_YEAR})
  }

  function handlesmallIncome() {
    dispatch({type: SMALL_INCOME, payload: 80000})
  }

  function handleChangeYear() {
    dispatch({type: CHANGE_YEAR, payload: 2})
  }

  function handlePeopleAugust() {
    dispatch({type: PEOPLE_AUGUST})
  }

  return (
    <div>
      <button onClick={handlePersonToday}>человек родившийся сегодня.</button>
      <button onClick={handleSortYeart}>От младшего к старшему</button>
      <button onClick={handlesmallIncome}>самый низкооплачиваемый +80000</button>
      <button onClick={handleChangeYear}>+2 годa человека с 3 id</button>
      <button onClick={handlePeopleAugust}>родившиеся в Августе</button>
      <pre>Users: {JSON.stringify(state, null, 4)}</pre>
    </div>
  )
}
