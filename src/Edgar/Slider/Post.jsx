import PropTypes from 'prop-types';
export default function Post({ post }) {
  console.log(post)
  return (
    <div className='Post'>
      <div className="Post-image" style={{ backgroundImage: `url('${post.image}')` }}></div>
      <div className="Post-content">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <div className={`Post-footer Post-footer_${post.bgVarint}`}>
        <div className='Post-stats'>
          <div>
            <h3>{post.read}</h3>
            <p>read</p>
          </div>
          <div className='border'>
            <h3>{post.views}</h3>
            <p>views</p>
          </div>
          <div>
            <h3>{post.comment}</h3>
            <p>comment</p>
          </div>
        </div>
      </div>
    </div>
  )
}
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    read: PropTypes.string.isRequired,
    comment: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date),
    image: PropTypes.string.isRequired,
    bgVarint: PropTypes.oneOf(['pink', 'orange', 'green', 'violet'])
  })
}
