import { useEffect, useState } from 'react'
import "./App.scss"
export default function App() {
	const [users, setUsers] = useState([]);
	console.log(users)
	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then(res => res.json())
			.then(data => setUsers(data.users))
	}, [])
	return (
		<div>
			<div className='User'>
				{
					users.map(user => {
						return (
							<div key={user.id} className='User__info'>
								<h2><span>title</span> {user.title}</h2>
								<h2><span>description</span> {user.description}</h2>
								<h2><span>price</span> {user.price}</h2>
								<h2><span>stock</span> {user.stock}</h2>
								<img src={user.image} alt="" />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}