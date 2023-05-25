
import useSimpleHook from './useSimpleHook'

export default function App() {

	const data  = useSimpleHook('https://jsonplaceholder.typicode.com/posts')
	return (
		<div>
			<h1>Count:{JSON.stringify(count)}</h1>
			<button onClick={getSum}>add count</button>
			
		</div>
	)
}
