import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Robotes() {
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/posts?_limit=50')
		    .then(res => setUsers(res.data))
	}, [])

	const deleteUserById = (e, userId) => {
		e.preventDefault()
		const userIndex = users.findIndex(user => user.id === userId)
		setUsers(users.toSpliced(userIndex,1))
		axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	}

	
	return (
		<div className="post-wrapper">
			{
				users.map(user => <Link to={`${user.id}`} key={user.id} className="post-link" >
					<span className="del-button" onClick={(e) => deleteUserById(e, user.id)}>&#10006;</span>
					<span className="postId">{user.id}</span>
					<h3>{user.title}</h3>
				</Link> )
			}
		</div>
	)
}