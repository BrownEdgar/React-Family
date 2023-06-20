import { useSelector } from "react-redux"


export default function Posts() {
	const posts = useSelector(state => state.posts)
	return (
		<div>
			{
				posts.map(post => {
					return (
						<div key={post.id}>
							<h1>{post.title}</h1>
							<p>{post.body}</p>
						</div>
					)
				})
			}
		</div>
	)
}
