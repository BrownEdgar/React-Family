
import useFetchAPI from './useFetchAPI'

export default function App() {

  // const data = useFetchAPI("https://jsonlaceholder.typicode.com/posts")
  const users = useFetchAPI('users')

  return (
    <div>
      <pre>{JSON.stringify(users, null, 1)}</pre>
    </div>
  )
}

