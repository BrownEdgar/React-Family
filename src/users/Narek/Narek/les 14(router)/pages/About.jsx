import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function About() {
    const [album,setAlbum] = useState([])
    useEffect(() =>{
        axios('https://jsonplaceholder.typicode.com/albums')
        .then(res => setAlbum(res.data))
    },[])
    return(
        <>
            <h1>About</h1>
        <div className="aboutDiv">
            {   
                album.map(alb =><div className="divMap"> <Link key={alb.id} to={`${alb.id}`}>{alb.id}</Link> </div>)
            }
        </div>
        </>
    )
}