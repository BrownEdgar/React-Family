import { useState } from 'react';
import './App.scss';

export default function App() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target[0].value;
		e.target.reset();

		if (users.includes(value)) {
			setError('You cannot add this name, because it already exists');
			setTimeout(() => {
				setError('');
			}, 3000)
			return;
		}


		setUsers([...users, value]);
	};

	const handleRemove = (index) => {
		const upUsers = [...users];
		upUsers.splice(index, 1);
		setUsers(upUsers);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="name" required />
				<input type="submit" value="save" />
			</form>
			{error && <p>{error}</p>}
			{users.length > 0 && (
				<ul>
					{users.map((user, index) => (
						<li key={index}>
							{user}
							<span onClick={() => handleRemove(index)}>&#10006;</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}