import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function Album() {
    const {id} = useParams()
    const [album,setAlbum] = useState([])
    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(res => setAlbum(res.data))
    },[])
    return(
        <div className="divAlbum">
            <h1><strong>Album N:</strong>{album.id}</h1>
            <h2><strong>Album Title:</strong>{album.title}</h2>
        </div>
    )
}