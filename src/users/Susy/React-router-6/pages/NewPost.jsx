import axios from 'axios';
import { useState } from 'react';

export default function CreatePost() {
  const [post, setPost] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((post) => ({
      ...post,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/posts',
      data: post
    })
      .then((res) => console.log(res))
  }

  return (
    <div className='create-item'>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>User ID:</span>
          <input type="number"required name="userId" value={post.userId} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>ID:</span> 
          <input className='id'required type="number" name="id" value={post.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>Title:</span>
          <input className='title'required type="text" name="title" value={post.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>Body:</span>
          <textarea name="body"required cols="30" rows="10" value={post.body} onChange={handleChange}></textarea>
        </label>
        <br />
        <input type="submit"required value="Create Post" />
      </form>
    </div>
  );
}