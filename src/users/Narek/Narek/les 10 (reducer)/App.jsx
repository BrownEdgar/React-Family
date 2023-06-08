import React , {useReducer } from 'react'


export default function App() {
    
    const [state , dispatch] = useReducer(reducer,initialStateValue);
    const addClick = () => {
      dispatch({type: "plus", payload: 4})
    }
    return (
      <div>
        <h1>state: {state}</h1>
        <button onClick={addClick}>add state</button>
      </div>
    )
}