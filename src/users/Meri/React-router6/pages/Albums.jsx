import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Albums() {
	const [albums,setAlbums] = useState([])
	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/albums')
		.then(res => setAlbums(res.data))
	}, [])
	return (
		<div>
			<h1>Album page</h1>
			{
				albums.map(album => <Link to={`${album.id}`} key={album.id}>{album.title}</Link>)
			}
		</div>
	)
}