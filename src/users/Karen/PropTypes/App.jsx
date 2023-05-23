import axios from "axios";
import { useEffect, useState } from "react";

export default function App(){
    const [data, setData] = useState({
        todos: [],
        posts: [],
        users: []
    })
    useEffect(() => {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/todos'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
        ])
        .then(([todos,posts,users]) => {
            setData({
                todos: todos.data,
                posts: posts.data,
                users: users.data
            })
        })
    },[])

    const handleClick = () => {
        const users = data.users.map((user,index) => {
            return {
                ...user,
                todos: data.todos.slice((index * 20), (index * 20)+20)
            }
        })
        setData({...data, users})
    }

    return (
        <div>
            <h1>Axios</h1>
            <pre>
                {JSON.stringify(data.users, null, 1)}
            </pre>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}


import React, { useState } from "react";

export default function App() {
    const [price, setPrice] = useState([])
    const [foods, setFoods] = useState([
        {
            name: '🍔',
            price: 15,
            amount: 10,
          },
          {
            name: '🍨',
            price: 20,
            amount: 3,
          },
          {
            name: '🍿',
            price: 1,
            amount: 5,
          },
          {
            name: '🍵',
            price: 5,
            amount: 9,
          }
    ])


const idfunc = () => {
    const addid = foods.map((food,index) => {
        return (
            {...food, id: index + 1}
        )
    })
    setFoods(addid)

}


return (
    <div>
        <p>{price}</p>
        <pre>
            {JSON.stringify(foods, null, 1)}
        </pre>
        <button onClick={idfunc}>ADD ID</button>
    </div>
  )
}