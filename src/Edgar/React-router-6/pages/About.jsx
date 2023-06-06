import axios from 'axios';
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function About() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/posts')
			.then(res => setPosts(res.data))
	}, [])
	
	return (
		<div>
			<h1>POSTS page</h1>
			{
				posts.map(post => <Link key={post.id} to={`${post.id}`} className='post-link'>{post.title}</Link>)
			}
		</div>
	)
}
