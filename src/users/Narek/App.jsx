import React, {useState, useEffect} from 'react'
import Posts from './Posts'
export default function App() {
	const [data, setData] = useState([])
	 useEffect(() => {
		const getdata = () => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(response => response.json())
				.then(json => setData(json))
		}
		getdata()
	},[])
	function removePost (id) {
		const newData = data.filter((data) => data.id !== id)
		setData(newData)
	}
	return (
		<div className="divNav">
			<h1>Lesson 6</h1>
			<Posts removePost={removePost} posts={data}/>
		</div>
	)
}
