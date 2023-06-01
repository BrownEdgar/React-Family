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
		<div className='parent'>
			<div className="parent__container">
				<form>
					<div>
						<input
							type="text"
							id='email'
							name='email'
						/>
						<label htmlFor="email">Email</label>
					</div>
					<div>
						<input
							type="password"
							id='password'
							name='password'
						/>
						<label htmlFor="password">password</label>
					</div>
				
				</form>
			</div>

		</div>
	)
}
