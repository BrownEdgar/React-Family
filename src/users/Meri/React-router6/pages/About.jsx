import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/posts?_limit=50')
		    .then(res => setUsers(res.data))
	}, [])
	return (
		<div>
			<h1 style={{textAlign: 'center'}}>About page</h1>
			{
				users.map(user => <Link to={`${user.id}`} key={user.id} className="post-link" >{user.title}</Link> )
			}
		</div>
	)
}