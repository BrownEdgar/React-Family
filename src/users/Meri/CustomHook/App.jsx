import useFetchAPI from './useFetchAPI'

export default function App() {
	const users = useFetchAPI('todos', {_limit: 2} );

	return (
		<div>
			<pre>{JSON.stringify(users, null, 1)}</pre>

		</div>
	)
}
