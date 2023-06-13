import { useState } from "react";
import axios from "axios";

export default function Create() {
	const [post, setPost] = useState({
		userId: '',
		id: '',
		title: '',
		body: ''
	})
	const handleSubmit = (e) => {
		e.preventDefault()
		axios({
			method: 'post',
			url: 'http://localhost:3000/posts',
			data: post
		})
			.then(() => {
				setPost({
					userId: '',
					title: '',
					body: ''
				});
			})
	}
	const handleChange = (e) => {
		const { name, value } = e.target
		console.log(name)
		setPost((post) => ({
			...post,
			[name]: value
		}))
	}
	return (
		<div>
			<h1>Create</h1>
			<div className="edit-form">
				<form onSubmit={handleSubmit}>
					<label>
						<input type="text" placeholder="userId" value={post.userId} onChange={handleChange} name="userId" required />
					</label>

					<label>
						<input type="text" placeholder="title" value={post.title} onChange={handleChange} name="title"  required/>
					</label>
					<textarea cols="30" rows="14" placeholder="body" value={post.body} onChange={handleChange} name="body" required></textarea>
					<input type="submit" value='save post' />
				</form>
			</div>
		</div>
	)
}