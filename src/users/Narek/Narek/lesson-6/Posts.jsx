import "./Posts.css" 
export default function Posts({removePost,posts}) {
	return (
		<div className='flex'>
			{
				posts.map(elem => {
					return (
						<div className='flex-item' key={elem.id}>
							<span>{elem.id}</span>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
                            <i class="bi bi-x-lg"  onClick={() =>removePost(elem.id)} ></i>
						</div>
					)
				})
			}
		</div>
	)
}
