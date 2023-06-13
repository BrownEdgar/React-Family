import { memo } from 'react'

function Child({ data }) {

	console.log("Child render...")

	return (
		<div>
			{
				data.map(todo => <p key ={todo.id}>{todo.title}</p>)
			}
		</div>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Child)
