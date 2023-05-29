import React, { useState } from "react";

export default function useSimpleHook(initialData) {

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
	const addTodo = (newTodo) => {
		const max = Math.max(...data.map(todo => todo.id))
		const addId = max + 1
		const todo = {...newTodo, id: addId}
		setData([...data, todo])
	}
	const toJson = () => {
		return JSON.stringify(data)
	}
	return [data, {allDone, removeById, addTodo, toJson}]
}