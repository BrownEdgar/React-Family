import React, { useState } from "react";
import useHook from './customer';


export default function App() {
        const todos = [
            {
                "userId":1,
                "id":1,
                "title":"dele aut autem",
                "completed": false
            },
            {
                "userId":1,
                "id":2,
                "title":"dele aut autem",
                "completed": false
            },
            {
                "userId":1,
                "id":3,
                "title":"dele aut autem",
                "completed": false
            }
        ]
        const {data,allDone} = useHook(todos)
    return (
        <div>
            <pre>{JSON.stringify(data,null,1)}</pre>
            <h1>CustomerHook</h1>
            <button onClick={allDone}>allDone</button>
        </div>
    )
}