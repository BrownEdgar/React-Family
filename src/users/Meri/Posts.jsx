import React from "react";
import "./Posts.css"

export default function Posts(props) {
    return (
        <div className="flex">
            {
                props.posts.map(elem => {
                    return (
                        <div className="flex-item" key={elem.id}>
                            <h3 onClick={() => props.deleteById(elem.id)}>&#9747;</h3>
                            <span>{elem.id}</span>
                            <h2>{elem.title}</h2>
                            <p>{elem.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}