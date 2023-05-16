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

	const deleteFunc = (id) => {
		const del = data.filter(elem => elem.id !== id);
		setData(del);
	  };
	
	return (
		<div>
			<h1>Fetch in react</h1>
			<button>get data</button>
			<Posts posts={data} deleteFunc={deleteFunc}/>
		</div>
	)
}