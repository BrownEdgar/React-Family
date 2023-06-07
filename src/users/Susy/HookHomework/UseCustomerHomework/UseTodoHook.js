import React, { useState } from "react";


export default function UseTodoHook(initialData) {
	const [data, setData] = useState(initialData)
	const allDone = () => {
		setData(data.map(todo => {
			return { ...todo, completed: true }
		}
		))
	}

	const removeById = (id) => {
		setData(data.filter(todo => todo.id !== id))
	}


	const addTodo = (todo) => {
		setData([...data, todo])
	}
	const toJson = () => {
		return JSON.stringify(data)
	}

	return [data, { allDone, removeById, addTodo, toJson }]
}