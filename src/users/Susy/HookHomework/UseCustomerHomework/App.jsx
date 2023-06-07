import React from "react";
import UseTodoHook from "./UseTodoHook";

export default function App() {
	const todos = [
		{
			"userId": 1,
			"id": 1,
			"title": "delectus aut autem",
			"completed": false
		},
		{
			"userId": 1,
			"id": 2,
			"title": "quis ut nam facilis et officia qui",
			"completed": false
		}
	]
	const [data, {  allDone,  removeById, addTodo }] = UseTodoHook(todos)
	return (
		<div>
			<pre>{JSON.stringify(data, null, 1)}</pre>
			<button onClick={allDone}>allDone</button>
		
			{data.map((todo) => (
				<button
					key={todo.id}
					disabled={!todo.id}
					onClick={() => removeById(todo.id)}>
					Delete {todo.id}
				</button>
			))}
			<button  onClick={() => addTodo({
				"userId": 1,
				"id": new Date(),
				"title": "delectus aut autem",
				"completed": false
			})}>addTodo</button>
		</div>
	)
}