import { useState } from "react";

export default function useSimpleHook(initialData) {
	const [data, setData] = useState(initialData)

	const allDone = () => {
		setData(data.map(todo => {
			if (Object.keys(todo).length > 0) {
				return { ...todo, completed: true }
			} return todo;
		}
		))
	}

	return {
		data,

		allDone,
	}
}

