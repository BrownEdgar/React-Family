import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Post() {
  const [user, setUser] = useState([])
  const {id} = useParams()
  useEffect(() => {
      axios(`https://dummyjson.com/users/${id}`)
        .then(res => setUser(res.data))
  },[id])
	return (
		<div>
			<h1>Welcome to post N {id}</h1>
        <h2>{user.title}</h2>
        <h2>description: {user.firstName}</h2>
        <h2>age: {user.age}</h2>
        <h2>gender: {user.gender}</h2>
        <h2>email: {user.email}</h2>
        <img src={user.image} alt="" />
		</div>
	)
}