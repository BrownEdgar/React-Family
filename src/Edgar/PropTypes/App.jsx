import React, { useState, useEffect } from 'react';
import Component from './Component'

export default function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(res => res.json())
			.then(json => setData(json))
	}, [])

	const toggleStatus = (id) => {
		const newdata = data.map((elem) => {
			if (id == elem.id) {
				elem.completed = !elem.completed

			}
			return elem;
		})
		setData(newdata)
	}


	return (
		<div>
			<Component data={data} toggle={toggleStatus}/>
		</div>
	)
}
