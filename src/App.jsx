import Posts from "./components/Posts";

import './App.css'
import { useDispatch } from "react-redux";
import { addPost } from "./store/features/postsSlice";

export default function App() {
	const dispatch = useDispatch()
	const addPostAction = () => {
		const post = {
			id: Date.now(),
			title: 'Lorem ipsum dolor sit.',
			body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora soluta quas debitis.',
			userId: 5
		}

		dispatch({ type: 'add-post' })

	}
	return (
		<div className="App">
			<button
				onClick={addPostAction}
			>add random post</button>
			<Posts />


		</div>
	)
}
