import { useState } from 'react'


function App() {
	const [people, setPeople] = useState([
		{ id: 1, name: 'Wes', year: 1988 },
		{ id: 2, name: 'Kait', year: 1986 },
		{ id: 3, name: 'Eleonor', year: 1970 },
		{ id: 4, name: 'Lux', year: 2015 }
	]);
	const [result, setResult] = useState('')


	const oneClick = () => {
		const salary = people.map(elem => ({ ...elem, salary: Math.trunc(Math.random() * 650000 + 150000) }))
		setPeople(salary)
	}

	const twoClick = () => {
	// լուծումը թարմացնել

	}

	const threeClick = () => {

		// փոխել
		let flag;
		const arr1 = people.map(elem => new Date().getFullYear() - elem.year)
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] >= 19) {
				setResult("YES");
				flag = true;
				break;
			}
		}
		if (!flag) {
			setResult("NO");
		}
	}

	const fourClick = () => {
		const getHer = people.map((elem) => {
			if (elem.name == 'Eleonor') {
				return { ...elem, year: 1986 }
			}
			return elem
			
		})
		setPeople(getHer)
	}

	const fiveClick = () => {
		const arr = people
		.filter((elem) => elem.salary >= 500000)
		.map(elem => elem.name)
		setResult(arr)
	}

	const sixClick = () => {
		const richest = people.reduce((a, b) => {
			return b.salary > a.salary ? b : a
		})
		setResult("Riches is: " + richest.name)
	}

	return (
		<>
			<h1>{JSON.stringify(people)}</h1>
			<h2>{result}</h2>
			<button onClick={oneClick} >oneClick</button>
			<button onClick={twoClick} >twoClick</button>
			<button onClick={threeClick} >threeClick</button>
			<button onClick={fourClick} >fourClick</button>
			<button disabled={people.salary} onClick={fiveClick} >fiveClick</button>
			<button disabled={people.salary} onClick={sixClick} >sixClick</button>
		</>
	)
}

export default App
