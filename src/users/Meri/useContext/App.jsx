// import React, { useState } from 'react'
// import A from './A';
// import { MyContext } from './Context';


// export default function App() {
// 	const [data, setData] = useState(null);
// 	const createDel = () => {
// 		setData("new secret word")
// 	}
// 	return (
// 		<div>
// 			<h1>App component</h1>
// 			<MyContext.Provider value={{
// 				"userId": 1,
// 				"id": 1,
// 				"title": "delectus aut autem",
// 			}}>
// 				<A />
// 			</MyContext.Provider>
// 			<button onClick={createDel}>change</button>
// 		</div>
// 	)
// }



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
	
	const {
		data,
		// toggleTodo,
		addId,
		allDone,
		removeById,
		addTodo,
		// toJson
	} = useSimpleHook(todos)
	return (
		<div>
			<pre>{JSON.stringify(data, null, 1)}</pre>
			<button onClick={allDone}>Mark all done</button>
			{data.map((todo) => (
				<button key={todo.id} disabled={!todo.id} onClick={() => removeById(todo.id)}>Delete {todo.id}</button>
			))}
			<button onClick={addTodo}>add todo</button>
		</div>
	)
} 