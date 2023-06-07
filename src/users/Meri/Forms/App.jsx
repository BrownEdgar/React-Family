import { useState } from 'react'
import "./App.scss"

export default function App() {

	const [users, setUsers] = useState([])
	const [error, setError] = useState({
		message: '',
		isShow: false
	})

	const toggleMessage = (message) => {
		setError({
			isShow: true,
			message,
		})
		setTimeout(() => {
			setError({
				isShow: false,
				message: ""
			})
		}, 3000)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target[0].value;
		if (!users.includes(value)) {
			setUsers((prevUsers) => [...prevUsers, value]);
			setError({
				isShow: false,
				message: ""
			})
		} else {
			toggleMessage("This user is alredy Exist in the list")

		}
		e.target.reset();
	}

	const handldelete = (index) => {
		const deleteInput = users.filter((_, i) => i !== index)
		setUsers(deleteInput)
	}

	return (
		<>
			<div className={`alert ${error.isShow ? 'active' : ''}`}>
				<p>
					<code>
						{error.message}
					</code>
				</p>
			</div>
			<div className='container'>

				<form onSubmit={handleSubmit}>
					<input type="text" placeholder='name' required />
					<input type="submit" value='save' />
					<h2>{users.length}</h2>
				</form>
				<div className='container__scroll'>
					<ul>
						{
							users.map((user, index) =>
								<li key={index}>
									{user}
									<button onClick={() => handldelete(index)}>X</button>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</>

	)
}