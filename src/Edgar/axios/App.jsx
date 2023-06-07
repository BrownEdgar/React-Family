import { useState, useEffect } from 'react';
import axios from 'axios';


export default function App() {
	const [data, setData] = useState({
		todos: [],
		posts:[],
		users: []
	})

	useEffect(() => {
		// axios('https://jsonplaceholder.typicode.com/posts', {
		// 	params: {
		// 		_limit:10,
		// 		_start:29
		// 	}
		// })

		// axios.get('https://jsonplaceholder.typicode.com/posts')

		// axios({
		// 	baseURL: 'https://jsonplaceholder.typicode.com/',
		// 	url: 'todos',
		// 	timeout: 1000
		// })
		// axios.all([
		// 	axios.get('https://jsonplaceholder.typicode.com/todos'),
		// 	axios.get('https://jsonplaceholder.typicode.com/posts'),
		// 	axios.get('https://jsonplaceholder.typicode.com/users'),
		// ])
		// .then(([todos,posts,users]) => {
		// 	console.log(todos, posts, users)
		// 	setData(
		// 		{
		// 			todos: todos.data,
		// 			posts: posts.data,
		// 			users: users.data
		// 		}
		// 	)
		// }).catch(err => console.log(err))
		// .finally(() => console.log("the end"))

		axios.delete('http://localhost:3000/posts/2')
		.then(res => console.log(res))

	}, [])
	
	const handleClick = () => { 
		// const posts = data.posts.slice(0, 10)
		// const user = data.users.find(elem => elem.id === 1);
		// user.posts = posts;
		// setData({...data,})

		const users = data.users.map((user,index) => {
			return {
				...user,
				posts: data.posts.slice(index * 10, (index * 10) + 10 )
			}
		})
		
		setData({ ...data, users })
	}
	
	return (
		<div>
				<h1>why axios?</h1>
				<pre>
				{JSON.stringify(data.users,null,1)}
				</pre>
				<button onClick={handleClick}>start</button>
		</div>
	)
}
