import { useState } from "react";
import axios from "axios";

export default function Create() {
	const [post,setPost] = useState({
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
            id: '',
            title: '',
            body: ''
        });
		})
	}
	const handleChange = (e) => {
		const { name, value} = e.target
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
                    <input type="text" placeholder="userId" value={post.userId} onChange={handleChange}/>
				  </label>
				  <label>
				    <input type="text" placeholder="id" value={post.id} onChange={handleChange}/>
				  </label>
				  <label>
				    <input type="text" placeholder="title" value={post.title} onChange={handleChange}/>
				  </label>
                  <textarea name="postbody" cols="30" rows="14" placeholder="body" value={post.body} onChange={handleChange}></textarea>
                  <input type="submit" value='save post' />
                </form>
            </div>
		</div>
	)
}