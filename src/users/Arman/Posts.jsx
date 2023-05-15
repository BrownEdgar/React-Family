import "./Posts.css"

export default function Posts(props) {
	
	return (
		<div className='flex'>
			{
				props.posts.map(elem => {
					return (
						<div className='flex-item' key={elem.id}>
							<h4 onClick={() => props.onDelete(elem.id)}>&#9747;</h4>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
						</div>
					)
				})
			}
		</div>
	)
}