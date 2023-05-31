import { useState } from 'react'

import "./App.scss"

export default function App() {
	const [cities, setCities] = useState('')

	const handleChange = (e) => {
		const {  value } = e.target;

		setCities(value)

		// if (checked) {
		// 	setCities([...cities, value])
		// } else {
		// 	const cityIndex = cities.indexOf(value);
		// 	setCities(cities.toSpliced(cityIndex, 1))
		// }
	}

	return (
		<div>
			<form>
				<div>
					<input
						type="radio"
						id='barcelona'
						name='city'
						value='Barcelona'
						onChange={handleChange}
					/>
					<label htmlFor="barcelona">Barcelona</label>
				</div>
				<div>
					<input
						type="radio"
						id='paris'
						name='city'
						value='Paris'
						onChange={handleChange}
					/>
					<label htmlFor="paris">Paris</label>
				</div>
				<div>
					<input
						type="radio"
						id='rome'
						name='city'
						value='Rome'
						onChange={handleChange}
					/>
					<label htmlFor="rome">Rome</label>
				</div>
			</form>
			{/* <h1>{cities.join(' | ')}</h1> */}
			<h1>{JSON.stringify(cities,null,1)}</h1>
		</div>
	)
}
