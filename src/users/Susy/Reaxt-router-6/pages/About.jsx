import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
  },[])
  return (
    <div>
        <h1>About page</h1>
        {
          posts.map(post => <Link className='post-link' to={`${post.id}`} key={post.id}>{post.title}</Link>)
        }
    </div>
  )
}
