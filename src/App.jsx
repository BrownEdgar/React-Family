import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./App.css"
import MyLoader from './components/Loaders/MyLoader';


export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  useEffect(() => {
    dispatch(getAsyncTodos())
  },[])
  return (
    <>
      {
        todos.status === "pending"
        ? (
          <MyLoader />
        ) : (
          <div className='container'>
          {
            todos.data.map(todo => {
              return (
                <div key={todo.id} className='item'>
                  <p>{todo.title}</p>
                </div>
              )
            })
          }
          </div>
        )
      }
    </>
  )
}
