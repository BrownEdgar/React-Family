import "./Component.css"

export default function Component({todo,delTodo}) {
	
	return (
		<div className='itemContainer' >
			<input type="checkbox" checked={todo.completed}/>
			<h2 className="title">{todo.title}</h2>
			<button onClick={()=>delTodo(todo.id)}>X</button>
		</div>
	)
}


