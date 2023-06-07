import { useState } from 'react'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    setUsers([...users, value]);
    e.target.reset();
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' required />
        <input type="submit" value='save' />
      </form>
      {
        users.length > 0 ? (
          <ul>
            {users.map((elem,index) => <li key={index}>Hello {elem}</li>)}
          </ul>
        ): null
      }
    </div>
  )
}
