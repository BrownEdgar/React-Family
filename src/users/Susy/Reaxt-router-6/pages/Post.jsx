import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Post() {

  const [post,setPost] = useState({})
  const {id} = useParams()
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => setPost(res.data))
  },[id])
  return (
    <div>
        <h1>Welcone to post N:{id}</h1>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
    </div>
  )
}
