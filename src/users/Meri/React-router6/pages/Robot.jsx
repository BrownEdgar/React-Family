import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Post() {
  const [user, setUser] = useState({})
  const {id} = useParams()
  const [isEtitable,setEIsEtitable] = useState(false)
  useEffect(() => {
      axios(`https://dummyjson.com/users/${id}`)
        .then(res => setUser(res.data))
  },[id])

  const toggleEdit = () => {
    setEIsEtitable(!isEtitable)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    const email = e.target[0].value || user.email;
    const title = e.target[1].value || user.title;
    const newUser = {
      ...user,
      email,
      title
    }
    axios({
      method: 'patch',
      url: `https://dummyjson.com/users/${id}`,
      data: newUser
    }).then(res => console.log(res))
    .catch(err => console.warn(err))
    .finally(() => {
      toggleEdit()
      setUser(newUser)
    })
  }
	return (
    <>
      <div className="post">
		  	<h2>Welcome to post N {id}</h2>
        <div className="image">
          <img src={user.image} alt="" />
        </div>
        <h3>{user.title}</h3>
        <h3>description: {user.firstName}</h3>
        <h3>age: {user.age}</h3>
        <h3>gender: {user.gender}</h3>
        <h3>email: {user.email}</h3>
        <div className="edit">
          <button onClick={toggleEdit}>{isEtitable ? 'Cancel' : 'Edit post'}</button>
        </div>
		  </div>
      {
        isEtitable ? (
          <div className="edit-form">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder={user.firstName}/>
              <textarea name="postbody" cols="30" rows="14" placeholder={user.title}></textarea>
              <input type="submit" value='save post' />
            </form>
          </div>
        )
          : null
      }
    </>
		
	)
}