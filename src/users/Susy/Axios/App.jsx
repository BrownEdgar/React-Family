import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
	const [data, setData] = useState({
		todos: [],
		posts: [],
		users: []
	})

	useEffect(() => {
		axios.all([
			axios.get('https://jsonplaceholder.typicode.com/todos'),
			axios.get('https://jsonplaceholder.typicode.com/posts'),
			axios.get('https://jsonplaceholder.typicode.com/users')

		])
			.then(([todos, posts, users]) => {
				setData(
					{
						todos: todos.data,
						posts: posts.data,
						users: users.data
					}
				)
			})
	}, [])
	const handleClick = () => {
		const users = data.users.map((user, index) => {
			return {
				...user,
				todos: data.todos.slice((index * 20), (index * 20) + 20)
			}
		})
		setData({ ...data, users })

	}
	return (
		<div>
			<button onClick={handleClick}>start</button>
			<pre>
				{JSON.stringify(data.users, null, 1)}
			</pre>
			<h1>Axios</h1>
		</div>
	)
}