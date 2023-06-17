import React from "react";

export default function Todos({todos}) {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <li key={todo.id}>{todo.title}</li>
                    )
                })
            }
        </ul>
    )

}