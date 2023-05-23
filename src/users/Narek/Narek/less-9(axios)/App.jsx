import axios from 'axios';
import { useEffect, useState } from 'react';


export default function App(){
    const [data,setData] = useState({
        todos: [],
        posts:[],
        users:[],
    })

    useEffect(() => {
       axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/users'),
       ])
       .then(([todos,posts,users]) => {
        setData({
            todos: todos.data,
            posts:posts.data,
            users: users.data,
        })
       })
    },[])
    const handleClick = () => {
        // const posts = data.posts.slice(0,10);
        // const user = data.users.find(elem => elem.id === 1);
        // user.posts = posts;
        // setData({ ...data,})
        const users = data.users.map((user,index) => {
            return {
                ...user,
                posts:data.posts.slice(index * 10,(index * 10) + 10),
                todos:data.todos.slice(index * 10,(index * 10) + 10),
            }
        })
        console.log(users);
        setData({...data,users})
        
    }

    return (
        <div>
            <pre>
                {JSON.stringify(data.users[0],null,1)}
            </pre>
            <h1>Axios</h1>
            <button onClick={handleClick}>start</button>
        </div>
    )
}
