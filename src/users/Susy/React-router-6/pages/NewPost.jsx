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
      .then(() => {
        setPost({
          userId: '',
          id: '',
          title: '',
          body: ''
        });
      })
  };

  return (
    <div className='create-item'>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>User ID:</span>
          <input type="number" name="userId" value={post.userId} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>ID:</span> 
          <input className='id' type="number" name="id" value={post.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>Title:</span>
          <input className='title' type="text" name="title" value={post.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          <span>Body:</span>
          <textarea name="body" cols="30" rows="10" value={post.body} onChange={handleChange}></textarea>
        </label>
        <br />
        <input type="submit" value="Create Post" />
      </form>
    </div>
  );
}