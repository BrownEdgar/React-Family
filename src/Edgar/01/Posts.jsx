import "./Posts.css"

export default function Posts(props) {
	console.log("post render")
	
	return (
		<div className='flex'>
			{
				props.posts.map(elem => {
					return (
						<div className='flex-item' key={elem.id}>
							<span>{elem.id}</span>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
						</div>
					)
				})
			}
		</div>
	)
}
