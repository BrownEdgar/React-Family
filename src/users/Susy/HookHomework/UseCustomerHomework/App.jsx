import React from "react";
import UseTodoHook from "./UseTodoHook";

export default function App() {
    const todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {},
        {},
        {},
        {}
    ]
    const {data,allDone,addId,removeById,addTodo} = UseTodoHook(todos)
    return (
        <div>
            <pre>{JSON.stringify(data,null,1)}</pre>
            <button onClick={allDone}>allDone</button>
            <button onClick={addId}>addId</button>
            {data.map((todo) => (
				<button key={todo.id} disabled={!todo.id} 
                onClick={() => removeById(todo.id)}>Delete {todo.id}</button>
			))}
            <button disabled={!todos[2].id} onClick={addTodo}>addTodo</button>
        </div>
    )
}