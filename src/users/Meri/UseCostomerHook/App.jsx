import React from "react";
import useSimpleHook from "./useSimpleHook";

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

export default function App() {
	const [data, {allDone, removeById, addTodo, toJson}] = useSimpleHook(todos)
	
	return (
		<div>
			<pre>{JSON.stringify(data, null, 1)}</pre>
			<button onClick={allDone}>Mark all done</button>
			{data.map((todo) => (
				<button 
				    key={todo.id} 
					disabled={!todo.id} 
					onClick={() => removeById(todo.id)}>
					Delete {todo.id}
				</button>
			))}
			<button onClick={() => addTodo({
				"userId": 1,
				"id": new Date(),
				"title": "delectus aut autem",
				"completed": false
			})}>add todo</button>
			<button onClick={toJson}>to json</button>
		</div>
	)
} 