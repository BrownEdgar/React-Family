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

	const handleDelete = (id) => {
		const array = data.filter(elem => elem.id !== id)
		setData(array)
	}
	return (
		<div>
			<h1>Fetch in react</h1>
			<button>get data</button>
			<Posts posts={data} onDelete={handleDelete}/>
		</div>
	)
}
// import { useState } from 'react'



// function App() {
// 	const [people, setPeople] = useState([
// 		{ id: 1, name: 'Wes', year: 1988 },
// 		{ id: 2, name: 'Kait', year: 1986 },
// 		{ id: 3, name: 'Eleonor', year: 1970 },
// 		{ id: 4, name: 'Lux', year: 2015 }
// 	]);

// 	const [result, setResult] = useState('');

// 	const addSalary = () => {
// 		const upPeople = people.map(person => {
// 			return {
// 				...person, salary: Math.trunc(Math.random() * 800000)
// 			}
// 		});
// 		setPeople(upPeople);
// 	};

// 	const checkAge = () => {
// 		const everyone = people.every(person => person.age === 34);
// 		setResult(`${everyone}`);
// 	};

// 	const checkAges = () => {
// 		const over = people.map(person => {
// 			const age = new Date().getFullYear() - person.year;
// 			return age > 19;
// 		});
// 		setResult(` ${over}`);
// 	};

// 	const changeYear = () => {
// 		const upPeople = people.map(person => {
// 			if (person.name === 'Eleonor') {
// 				return {
// 					...person,
// 					year: 1986
// 				};
// 			}
// 			return person;
// 		});
// 		setPeople(upPeople);
// 	};

// 	const find = () => {
// 		const high = people
// 			.filter(person => person.salary > 500000)
// 			.map(person => person.name)
// 			.join(', ')
// 		setResult(`${high}`);
// 	};

// 	const find1 = () => {
// 		let richestPerson = null;
// 		let maxSalary = -Infinity;
// 		people.map(person => {
// 			if (person.salary > maxSalary) {
// 				maxSalary = person.salary;
// 				richestPerson = person.name;
// 			}
// 		});
// 		setResult(`The richest person is ${richestPerson}`);
// 	};

// 	return (
// 		<div>
// 			<button onClick={addSalary}>Add Salary</button>
// 			<button onClick={checkAge}>Check if Everyone is 34</button>
// 			<button onClick={checkAges}>Check if one person is over 19</button>
// 			<button onClick={changeYear}>Change Eleonor's Year</button>
// 			<button onClick={find}>Find The Higest Salaries</button>
// 			<button onClick={find1}>Find The Richest Person</button>
// 			<p>Result: {result}</p>
// 			<ul>
// 				{people.map(person => (
// 					<li key={person.id}>
// 						{person.name} ({new Date().getFullYear() - person.year} years old) - {person.salary ? `$${person.salary}` : 'N/A'}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default App
