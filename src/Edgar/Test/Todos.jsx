import React from 'react'

export default function Todos({ todos }) {
	return (
		<ul id="list">
			{todos.map(todo => {
				return (
					<li key={todo.id}>{todo.title} <i className="fa-regular fa-eye"></i></li>
				)
			})}
		</ul>
	)
}
