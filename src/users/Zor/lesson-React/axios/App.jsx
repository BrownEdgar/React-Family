import {useState, useEffect} from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState({
    posts: [],
    todos: [],
    users: [],
  })

  useEffect(() => {
    // axios('https://jsonplaceholder.typicode.com/posts', {
    //   params: {
    //     _limit: 4,
    //     _start: 29,
    //   }
    // })

    // axios.get('https://jsonplaceholder.typicode.com/posts')

    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'posts',
    //   params: {
    //     _limit: 4,
    //     _start: 29
    //   },
    //   timeout: 1000
    // })

    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/users'),
    ])
    .then(([posts, todos, users]) => {
      setData(
        {
          posts: posts.data,
          todos: todos.data,
          users: users.data,
        }
      )
    })

    // axios('posts')
    // .then(res => console.log(res.data))
  }, [])

  const handleClick = () => {
    // const posts = data.posts.slice(0, 10)
    // const user = data.users.find( elem => elem.id === 1)
    // user.posts = posts
    // setData({...data})

    const users = data.users.map( (user, index) => {
      return {
        ...user,
        posts: data.posts.slice(index * 10, (index * 10) + 10)
      }
    })
    setData({...data, users})
  }
  return (
    <div>
      <h1>Why axios?</h1>
      <pre>{JSON.stringify(data.users, null, 1)}</pre>
      <button onClick={handleClick}>ctart</button>

    </div>
  )
}
