
import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios('http://localhost:3000/posts')
    .then(res => setPosts(res.data))
  }, [])

  const deletPostById = (e, postId) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/posts/${postId}`)
    const postIndex = posts.findIndex(post => post.id === postId)
    posts.splice(postIndex, 1)
    setPosts([...posts])
  }
  
  return (
    <div className="post-wrapper">
      {
        posts.map(post => <Link key={post.id} to={`${post.id}`} className="post-link">
          <span className="del-button" onClick={(e) => deletPostById(e, post.id)}>&#10006;</span>
          <span className="postId">id: {post.id}</span>
          <h3>{post.title}</h3>
        </Link>)
      }
    </div>
  )
}
