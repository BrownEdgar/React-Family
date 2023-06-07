import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Album() {
  const [album, setAlbum] = useState([])
  const {id} = useParams()
  useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(res => setAlbum(res.data))
  },[id])
	return (
		<div>
			<h1>Welcome to post N {id}</h1>
            {album.map(item => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, laudantium a. Odit architecto praesentium quisquam?</h2>
                    <img src={item.url} alt={item.title} />
                </div>
            ))}
		</div>
	)
}