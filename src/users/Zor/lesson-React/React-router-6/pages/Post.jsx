import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Post() {
  const [post, setPost] = useState([])
  const {id} = useParams()
  const [isEtitable, setIsEtitable] = useState(false)

  useEffect(() => {
    axios(`http://localhost:3000/posts/${id}`)
    .then(res => setPost(res.data))
  }, [id])

  const toggleEdit = () => {
    setIsEtitable(!isEtitable)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value || post.title
    const body = e.target[1].value || post.body
    const newPost = {
      ...post,
      title,
      body
    }
    axios({
      method: 'patch',
      url: `http://localhost:3000/posts/${id}`,
      data: newPost,
    }).then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => {
      toggleEdit()
      setPost(newPost)
    })
  }
  
  return (
    <>
      <div className='post'>
        <h2>Welcome to post N {id}</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>

        <div className='edit'>
          <button onClick={toggleEdit}>{isEtitable ? 'Cancel': 'Edite post'}</button>
        </div>
      </div>
      {
        isEtitable ? (
          <div className='edit-form'>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder={post.title} />
              <textarea name="postbody" cols="30" rows="10" placeholder={post.body}></textarea>
              <input type="submit" value='Save Post' />
            </form>
          </div>
        ) : null
      }
    </>
  )
}
