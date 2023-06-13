import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {

  const [album,setAlbum] = useState([])
  const {id} = useParams()
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(res => {
        setAlbum(res.data)
      })
  }, [id])
  
  return (
    <div>
      <h1>Welcome to album N{id}</h1>
      {album.map(photo => (
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <div className='photo-item'>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque est nam sed quo error nulla amet illo sapiente ipsa iure deserunt veniam, autem corrupti odio cupiditate, quisquam voluptatem obcae lorecati impedit nihil cumque distinctio magni necessitatibus! Error, ea. Sed, voluptas et. Officiis nam ut commodi, ipsam voluptatibus asperiores quia placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor perspiciatis beatae obcaecati eius eaque, numquam molestias sit cupiditate sed nesciunt! !</h3>
          <img src={photo.url} alt={photo.title} />
          </div>
        </div>
      ))}
    </div>
  )
}
