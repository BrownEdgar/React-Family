import { useSelector,useDispatch } from "react-redux"
import Posts from "./components/Posts";


export default function App() {

	const store = useSelector((store) => store);
	const dispatch = useDispatch()
	const handleClick = (type) => {  
		dispatch({type})
	
	}
	return (
		<div>
			<h1> welcome to Redux </h1>
			<pre>
				{JSON.stringify(store,null,1)}
			</pre>
			<button onClick={() => handleClick('plus')}>add count</button>
			<button onClick={() => handleClick('minus')}>minus count</button>
			<Posts />
		</div>
	)
}
