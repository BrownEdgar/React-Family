import { useReducer } from 'react'
import reducer, {initialStateValue} from './reducer'
import { ADD_ELEMENT, RESET } from './actionType'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateValue)

  const hadleClick = () => {
    dispatch({type: ADD_ELEMENT, payload: {
      element: 4,
    }})
  }

  const hadleReset = () => {
    dispatch({type: RESET})
  }

  return (
    <div>
      <h1>state: {JSON.stringify(state, null, 1)}</h1>
      <button onClick={hadleClick}>Add element</button>
      <button onClick={hadleClickMinus}>Remove count</button>
      <button onClick={hadleReset}>Remove count</button>
    </div>
  )
}
