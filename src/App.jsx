import { useDispatch, useSelector } from "react-redux"
import { addPost } from "./store/features/postsSlice"
import Posts from "./components/Posts"

export default function App() {
	const store = useSelector((store) => store)
	const dispatch = useDispatch()
	const addPostAction = () => {
		const post = {
			userId: 1,
			id: Math.floor(Math.random()*5 + 9),
			title: "nesciunt iure omnis dolorem tempora et accusantium",
			body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
			
		}
		dispatch(addPost(post));
	}
	return (
		<div>
			<button onClick={addPostAction}>add post</button>
			<Posts/>
			<pre>
				{JSON.stringify(store,null,1)}
			</pre>
		</div>
	)
}
