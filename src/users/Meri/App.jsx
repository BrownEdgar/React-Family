import { useState } from 'react'


function App() {
	const [people, setPeople] = useState([
		{ id: 1, name: 'Wes', year: 1988 },
		{ id: 2, name: 'Kait', year: 1986 },
		{ id: 3, name: 'Eleonor', year: 1970 },
		{ id: 4, name: 'Lux', year: 2015 },
	])
	const [result, setReasult] = useState('')
	//1in
	const addSalary = () => {
		setPeople(prevPeople => prevPeople.map(person => {
			return { ...person, salary: Math.trunc(Math.random() * (800000 - 150000) + 150000) }
		}))
	}
	// 2rd
	const sameAge = () => {
		const every = people.every(person => {
			const age = new Date().getFullYear() - person.year;
			return age === 34
		})
		setReasult(every ? 'Yes' : 'Not');
	}
	// 3rd
	const older = () => {
		const some = people.some(person => {
			const age = new Date().getFullYear() - person.year;
			return age > 19
		})
		setReasult(some ? 'Yes' : 'No')
	}
	// 4rd
	const eleonor = () => {
		setPeople(prevPeople => prevPeople.map(person => {
			if (person.name === 'Eleonor') {
				return { ...person, year: 1986 };
			}
			return person
		}))
	}
	// 5rd
	const high = () => {
		const highSalary = people.filter(person => person.salary >= 500000);
		const name = highSalary.map(person => person.name);
		setReasult(name.join(', '))
	}
	// 6rd
	const highest = () => {
		const highestPerson = people.reduce((prev, next) => {
			return (prev.salary > next.salary) ? prev : next
		})
		setReasult(highestPerson.name)
	}
	return (
		<div>
			<button onClick={addSalary}>Add salary</button>
			<button onClick={sameAge}>Click</button>
			<button onClick={older}>Click</button>
			<button onClick={eleonor}>change year</button>
			<button onClick={high}>High salary</button>
			<button onClick={highest}>highest person</button>
			<p>{result}</p>
			<ul>
				{
					people.map((person => {
						return (
							<li key={person.id}>Name: {person.name}, Year: {person.year} Salary: {person.salary}</li>
						)
					}))
				}
			</ul>
		</div>
	)
}
export default App