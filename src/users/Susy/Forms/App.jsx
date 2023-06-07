import React, { useState } from 'react'

import "./App.scss"

export default function App() {
	const [users, setUser] = useState([])
	const [error, setError] = useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target[0].value;
		
		
		if (!users.includes(value)) {
			setUser([...users, value]);
			setError('');
		} else {
			setError('Name already exists');
		}
		e.target.reset();
	}
	const deleteFunc = (userIndex) => {
		console.log(userIndex)
		setUser(users.filter((_, index) => index !== userIndex))
	}

	return (
		<div>
				{error && <h2>{error}</h2>}
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='name' required />
				<input type="submit" value='save' />
				<h1>{users.length}</h1>
			</form>
			{
				users.length > 0 ? (
					<ul>
						{users.map((user, index) => {
							return <li key={index}>
								{user}
								<span
									onClick={() => deleteFunc(index)}
									key={index}>
									&#10006;
								</span>
							</li>
						})
						}

					</ul>
				) : null
			}
		</div>
	)
}
