
import { useEffect } from 'react'
import { getAsyncTodos } from './store/features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import MyLoader from './components/Loaders/MyLoader'

export default function App() {
	const todos = useSelector(state => state.todos)
	const dispatch = useDispatch()
	console.log(todos)
	useEffect(() => {
		dispatch(getAsyncTodos())
	}, [])
	
	return (
		<div className='container'>
				{
					todos.status === 'success' 
					? (
						<MyLoader backgroundColor="brown" foregroundColor="tomato" />
					) : (
						<>
							{
								todos.data.map(todo => {
									return (
										<div key={todo.id} className='item'>
											<p>{todo.title}</p>
										</div>
									)
								})
							}
						</>
					)
				}
		</div>
	)
}
