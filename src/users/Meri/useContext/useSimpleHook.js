import React, { useState } from "react";

export default function useSimpleHook(initialData) {

	const [data, setData] = useState(initialData)

	// const toggleTodo = (todoId) => {
	// }

	const allDone = () => {
		setData(data.map(todo => {
			return { ...todo, completed: true }
		}
		))
	}


	const removeById = (id) => {
		setData(data.filter(todo => todo.id !== id))
	}

	const addTodo = (newTodo) => {
		setData([...data, newTodo])
	}

	// const toJson = () => {
	// }

	return {
		data,
		// toggleTodo,   
		addId,
		allDone,
		removeById,
		addTodo,
		// toJson
	}
}