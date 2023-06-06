import axios from 'axios';
import  { useState, useEffect } from 'react';

import { useParams } from 'react-router'

export default function Post() {
	const [post, setPost] = useState({});
	const {id} = useParams(); // 15

	useEffect(() => {
		axios(`https://jsonplaceholder.typicode.com/posts/${id}`,)
			.then(res => setPost(res.data))
	}, [id])
	

	return (
		<div>
			<h1>welcome to post N {id}</h1>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	)
}
