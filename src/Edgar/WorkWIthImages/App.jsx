import {useState,useEffect} from 'react'

import "./App.scss"

export default function App() {
	const [user, setUser] = useState({});
	useEffect(() => {
		fetch('https://dummyjson.com/products/9')
		.then(res => res.json())
		.then(data => setUser(data))
	}, [])
	
	return (
		<div>
			<div className='User'>
				<img src={user.images[0]} alt="" />
				<div className="User__info">
					<h2><span>title</span> {user.title}</h2>
					<h2><span>description</span> {user.description}</h2>
					<h2><span>price</span> {user.price}</h2>
					<h2><span>stock</span> {user.stock}</h2>
				</div>
			</div>

		</div>
	)
}
