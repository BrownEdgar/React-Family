import React from "react";

export default function Person({name, title, description, image, isAlighnStart}) {
    return (
        <div className="person">
            <div className={isAlighnStart ? 'info right' : 'info'}>
                <h1>{name}</h1>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
