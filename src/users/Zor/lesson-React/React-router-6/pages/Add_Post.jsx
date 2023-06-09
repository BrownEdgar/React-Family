import { useEffect, useState } from "react"
import axios from 'axios';



export default function Add_Post() {
  const [myPost, setMyPost] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/posts')
    .then(res => setMyPost(res.data))
  }, [])

  const createPostSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value || 'Ha'
    const body = e.target[1].value || 'haha'

    const newPost = {
      "userId": 11,
      "id": 0,
      "title": title,
      "body": body,
    }

    axios({
      method: 'post',
      url: 'http://localhost:3000/posts',
      data: newPost,
    }).then(res => setMyPost(res.data))

    e.target[0].value = ''
    e.target[1].value = ''
  }

  return (
    <div className="create-form">
      <form onSubmit={createPostSubmit}>
        <label htmlFor="title"> Title: </label>
        <input type="text" id="title"/>
        <label htmlFor="body">Text:</label>
        <textarea name="body" id="body" cols="30" rows="10"></textarea>
        <input type="submit" value='Создать Пост'/>
      </form>
    </div>
  )
}
