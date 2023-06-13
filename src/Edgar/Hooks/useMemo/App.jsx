import { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import Child from './Child'

export default function App() {
	const [count, setcount] = useState(0)
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(res => setData(res.data))
	}, [])


	const result = useMemo(() => {
		return data.filter(todo => todo.completed)
	}, [data])

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setcount(count + 1)}>add count</button>
			<Child data={result} />

		</div>
	)
}
