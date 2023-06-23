import { useDispatch, useSelector } from "react-redux"
import { addPost, delPost } from "./store/features/postsSlice"
import "./App.css"

const randomNames = ["John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Ava", "Benjamin", "Isabella"];

export default function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()


  function getRandomDate(start, end) {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const randomTime = Math.random() * (endDate - startDate) + startDate;
    return new Date(randomTime).toISOString().slice(0, 10);
  }

  
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  const randomName = randomNames[randomIndex];
  const randomBrd = getRandomDate('1980/01/01', '2020/12/31');

  const handleAddClick = () => {
    const user = {
      userId: 1,
      id:window.crypto.randomUUID(),
      nama:randomName,
      brd:randomBrd,
      body:"Lorem  dolor sit amet consectetur, adipisicing elit. Consectetur, minus!"
    }
    dispatch(addPost(user))
  }
  const handleDelClick = (postId) => {
    dispatch(delPost(postId))
  }

	return (
	<div>
    <button className="addButton" onClick={handleAddClick}>Add Post</button>
    {store.posts.map((post) => (
      <div key={post.id}>
        <span>{post.id}</span>
        <button className="specButton" onClick={() => handleDelClick(post.id)}>&#10006;</button>
      </div>
    ))}
    <pre>{JSON.stringify(store, null, 1)}</pre>
  </div>
	)
}
