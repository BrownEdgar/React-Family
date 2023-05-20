import React, { useState, useEffect } from 'react';
import Component from './Component'
import "./App.css"


export default function App() {
    const[todo , setTodo] = useState([]);
        useEffect(() =>{
            fetch(`https://jsonplaceholder.typicode.com/todos/`)
            .then(res => res.json())
            .then(res => setTodo(res))
        },[]) 
        function delTodo(id) {
            const newTodo = todo.filter(item => id === todo.id)
            setTodo([...newTodo])
        }
    return (
        <div className='App'>
            <h1>Todo List</h1>
            <div className='list'>
            {
            todo.map(item => <Component todo={item} delTodo={delTodo}/>)
            }
            </div>
          
         </div>
    )
    }
