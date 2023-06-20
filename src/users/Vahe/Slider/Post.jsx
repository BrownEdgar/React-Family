export default function Post({post}) {
	return (
		<div className="Post">
            <div className="Post-image" style={{ backgroundImage: `url('${post.image}')` }}></div>
        </div>
	)
}