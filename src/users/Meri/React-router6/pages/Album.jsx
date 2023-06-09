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
		<>
			<h1 style={{textAlign: 'center'}}>Welcome to post N {id}</h1>
        <div className="item" key={album.id}>
          <div className="item-img">
            <img src={album.url} alt={album.title} />
          </div>
          <div className="item-info">
            <h2>{album.title}</h2>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus est, cupiditate, id blanditiis provident quae aperiam illo vero quas ut, omnis fugit harum quod accusantium libero veniam? Numquam perspiciatis, asperiores sapiente delectus cum suscipit voluptatum libero architecto nemo at rem, modi recusandae consectetur magni expedita incidunt? Enim eveniet maiores est consequuntur, voluptatibus incidunt corrupti alias quae quia pariatur labore omnis repellendus placeat asperiores ut cupiditate minus cum reiciendis veritatis soluta voluptatum, eum cumque. Maxime ipsam reiciendis natus expedita, consectetur repellat magni dolorem dolorum! Expedita reprehenderit cumque, perferendis incidunt eos, beatae nesciunt explicabo delectus in ex quasi quo quidem</h4>
          </div>
        </div>
		</>
	)
}