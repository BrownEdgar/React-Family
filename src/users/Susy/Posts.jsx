import "./Posts.css"

export default function Posts(props) {

	return (
		<div className='flex'>
			{
				props.posts.map(elem => {
					return (
						<div className='flex-item' key={elem.id}>
							<h4 onClick={() => props.deleteFunc(elem.id)}>&#10006;</h4>
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
