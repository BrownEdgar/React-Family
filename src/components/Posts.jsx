import { useSelector, useDispatch } from "react-redux"
import { deletePostById } from "../store/features/postsSlice";

export default function Posts() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch()
  const deletePastAction = (postId) => { 
    dispatch(deletePostById({
      secret: 'hovnatan',
      id: postId
    }))
  }
  return (
    <> 
      {posts.map(elem => {
        return  (
          <div key={elem.id}>
            <span onClick={() => deletePastAction(elem.id)}>&#10006;</span>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
          </div>
        )
      })}
    </>
  )
}