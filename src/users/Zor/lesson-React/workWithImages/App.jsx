import {useState, useEffect} from 'react'
import './App.scss'
import firstImage from './photo111.avif'
import firstImage2 from '../../../assets/photo.jpg'

// export default function App() {
//   const [imageUrl, setimageUrl] = useState('https://images.unsplash.com/photo-1682695796497-31a44224d6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')
//   return (
//     <div>
//       <h1>Images in React</h1>
//       <img src="https://images.unsplash.com/photo-1682695796497-31a44224d6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="castle" />
//       <hr />
//       <img src={imageUrl} alt="castle" />
//       <hr />
//       <img src={firstImage} alt="photo" />
//       <hr />
//       <img src="./public/photo.jpg" alt="photo" />
//     </div>
//   )
// }

export default function App() {
  const [users, setUsers] = useState({})

  useEffect(() => {
    
    fetch('https://dummyjson.com/users/4')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return (
    <div>
      <div className='user'>
        <img src={users.image} alt="photo" />
        <div className='user__info'>
        <h2><span>firstName</span> {users.firstName}</h2>
        <h2><span>lastName</span> {users.lastName}</h2>
        <h2><span>email</span> {users.email}</h2>
        <h2><span>ip</span> {users.ip}</h2>
        </div>
      </div>

    </div>
  )
}