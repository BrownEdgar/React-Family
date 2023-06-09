import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
    const [albums,setAlbums] = useState([])
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/albums')
        .then(res => setAlbums(res.data))
    },[])

  return (
    <div>
        <h1>Blog page</h1>
        {
          albums.map(album => <Link className='album-link' to={`${album.id}`} key={album.id}>{album.title}</Link>)
        }
    </div>
  )
}
