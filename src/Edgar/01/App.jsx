import React, {useState, useEffect} from 'react'
import Posts from './Posts'

export default function App() {
	console.log("app render")
	const [data, setData] = useState([])

	useEffect(() => {

		const getdata = () => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(response => response.json())
				.then(json => setData(json))
		}
	
		getdata()
	},[])

	return (
		<div>
			<h1>Fetch in react</h1>
			<button>get data</button>
			<Posts posts={data}/>
		</div>
	)
}
