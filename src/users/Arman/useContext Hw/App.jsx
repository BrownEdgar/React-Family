
import useSimpleHook from "./useSimpleHook";
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
    
    ]
    const {
        data,
        addId,
        allDone,
        removeById,
        addTodo,
        toJson,
    } = useSimpleHook(todos)
    return (
        <div>
            <pre>{JSON.stringify(data, null, 1)}</pre>
            <button onClick={allDone}>All completed</button>
            <button onClick={addId}>Add id</button>    
            {data.map((todo) => (
            <button key={todo.id} disabled={!todo.id} onClick={() => removeById(todo.id)}>Delete {todo.id}</button>
            ))}
            <button onClick={addTodo}>Add todos</button>
            <button onClick={toJson}>to string</button>
        </div>
    )
} 
    