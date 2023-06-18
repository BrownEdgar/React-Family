import React from 'react'

export default function Post({post}) {
	console.log(post)
	return (
		<div className='Post'>
			<div className="Post-image" style={{backgroundImage:`url('${post.image}')`}}></div>
			<div className="Post-content">
				<h1>{post.title}</h1>
				<p>{post.description}</p>
			</div>
			<div className="Post-footer">
				<div className='Post-fContent'>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
