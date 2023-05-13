import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [people, setPeople] = React.useState([
		{ id: 1, name: 'Wes', year: 1988 },
		{ id: 2, name: 'Kait', year: 1986 },
		{ id: 3, name: 'Eleonor', year: 1970 },
		{ id: 4, name: 'Lux', year: 2015 },
	]);
	const btnClick1 = () => {
		if (!Object.hasOwn(...people, "solary")) {
			setPeople({ ...people, solary: (Math.trunc(Math.random() * 800000) + 150000) })
		}
	}
	const [result, setResult] = React.useState('')
	const btnClick2 = () => {

	}
	const btnClick3 = () => {
		if ({ ...people.id === 3 }) {
			setPeople({ ...people, year: 1986 })
		}
	}
	return (
		<div>
			<pre>
				{JSON.stringify(people, null, 1)}
			</pre>
			<button onClick={btnClick1}>Click Btn 1</button>
			<button onClick={btnClick2}>Click Btn 2</button>
			<button onClick={btnClick3}>Click Btn 3</button>
		</div>
	)
}

export default App
