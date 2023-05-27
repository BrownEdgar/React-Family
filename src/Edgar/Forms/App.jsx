import React, { useState } from 'react'

import "./App.scss"

export default function App() {
	const [users, setUser] = useState([])
	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target[0].value;
		setUser([...users, value]);
		e.target.reset();
	}
	return (
		<div>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='name' required />
				<input type="submit" value='save' />
			</form>
			{
				users.length > 0 ? (
					<ul>
						{users.map((user, index) => <li key={index}>{user}</li>)}
					</ul>
				) : null
			}
		</div>
	)
}
