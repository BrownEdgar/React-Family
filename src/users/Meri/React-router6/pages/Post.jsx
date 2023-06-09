import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState({})
  const {id} = useParams()
  const [isEtitable, setEIsEtitable] = useState(false)
  useEffect(() => {
      axios(`http://localhost:3000/posts/${id}`)
        .then(res => setPost(res.data))
  },[id])

  const toggleEdit = () => {
    setEIsEtitable(!isEtitable)
  }
   const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target[0].value || post.title;
    const body =  e.target[1].value || post.body;
    const newPost = {
      ...post,
      title,
      body
    }
    axios({
      method: 'patch',
      url: `http://localhost:3000/posts/${id}`,
      data: newPost
    }).then(res => console.log(res))
    .catch(err => console.warn(err))
    .finally(() => {
      toggleEdit()
      setPost(newPost)
    })
   }
	return (
    <>
      <div className="post">
        <h2>welcome to post N {id}</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className="edit">
          <button onClick={toggleEdit}>{isEtitable ? 'Cancel' : 'Edit post'}</button>
          <button><Link to='/posts'>Back</Link></button>
        </div>
      </div>
      {
        isEtitable ? (
          <div className="edit-form">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder={post.title}/>
              <textarea name="postbody" cols="30" rows="14" placeholder={post.body}></textarea>
              <input type="submit" value='save post' />
            </form>
          </div>
        )
          : null
      }
      
    </>
		
	)
}
