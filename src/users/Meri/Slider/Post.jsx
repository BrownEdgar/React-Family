import PropTypes from "prop-types";
export default function Post({ post }) {
    return (
        <div className="Post">
            <div className="Post-image" style={{backgroundImage: `url('${post.image}')`}}>
            </div>
        </div>
    )
}
Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.oneOf(['first.jpg','second.jpg','third.jpg','four.jpg','five.jpg','six.jpg'])
    })
}