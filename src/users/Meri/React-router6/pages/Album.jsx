import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Album() {
  const [album, setAlbum] = useState([])
  const {id} = useParams()
  useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => setAlbum(res.data))
  },[id])
	return (
		<div>
			<h1>Welcome to post N {id}</h1>
                <div key={album.id}>
                    <h1>{album.title}</h1>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, laudantium a. Odit architecto praesentium quisquam?</h2>
                    <img src={album.url} alt={album.title} />
                </div>
		</div>
	)
}