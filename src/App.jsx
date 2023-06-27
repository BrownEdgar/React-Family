import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./store/features/postsSlice";
import Posts from "./components/Posts";
import { addUser } from "./store/features/usersSlice";
import "./App.css";
import Users from "./components/Users";

export default function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const addPostAction = () => {
    const post = {
      userId: 1,
      id: Math.floor(Math.random() * 1e6),
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body:
        "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    };
    dispatch(addPost(post));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: e.target.id.value,
      name: e.target.name.value,
      email: e.target.email.value,
      title: e.target.title.value,
      body: e.target.body.value,
    };
    dispatch(addUser(userData));
    e.target.reset();
  };

  return (
    <div>
      <button className="addPost" onClick={addPostAction}>Add Post</button>
      <Posts />
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <label>
            <input type="number" placeholder="Id" name="id" required />
          </label>
          <label>
            <input type="text" placeholder="Name" name="name" required />
          </label>
          <label>
            <input type="email" placeholder="Email" name="email" required />
          </label>
          <label>
            <input type="text" placeholder="Title" name="title" required />
          </label>
          <label>
            <textarea cols="30" rows="14" placeholder="Body" name="body" required />
          </label>
          <button className="addUser" type="submit">Add User</button>
        </form>
      </div>
      <Users />
      <pre>{JSON.stringify(store, null, 1)}</pre>
    </div>
  );
}
