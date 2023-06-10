import axios from 'axios';
import  { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


export default function Posts() {
	const [posts, setPosts] = useState(useLoaderData())

	const deletePostById = (e, postId) => { 

		e.preventDefault()
		
		const postIndex = posts.findIndex(post => post.id === postId);
		setPosts(posts.toSpliced(postIndex,1))
		axios.delete(`http://localhost:3000/posts/${postId}`)
		
	}

	return (
		<div className='post-wrapper'>
		
			{
				posts.map(post => <Link key={post.id} to={`${post.id}`} className='post-link'>
					<span className='del-button' onClick={(e) => deletePostById(e, post.id)}>&#10006;</span>
					<span className='postId'>id: {post.id}</span>
					<h3>{post.title}</h3>
				</Link>)
			}
		</div>
	)
}


export async function fetchPosts() {
	const response = await axios('http://localhost:3000/posts');
	return response.data
		
}

