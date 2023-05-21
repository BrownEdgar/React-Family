import { exact } from "prop-types"
import React from "react"
import "./Component.css"




export default function Component({todo,delTodo}) {
	
	return (
		<div className='itemContainer' key={todo.id}>
			<input type="checkbox" comleted={todo.completed}/>
			<h2 className="title">{todo.title}</h2>
			<button onClick={(todo)=>delTodo(todo.id)}>X</button>
		</div>
	)
}


