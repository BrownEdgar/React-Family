import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './store/features/postsSlice';
import { addUser } from "./store/features/usersSlice";
import Posts from './components/Posts';
import Users from './components/Users';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  const addPostAction = () => {
    const post = {
      id: Date.now(),
      title: 'Lorem ipsum dolor sit.',
      body: 'Lorem ipsum, doloLorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas rerum in deleniti ex molestias vel ipsum Tempora soluta quas debitis.',
      userId: 5,
    };
    dispatch(addPost(post));
  };

  return (
    <div className="App">
      <button className='button' onClick={addPostAction}>Add Random Post</button>
      <Posts />
      <Users />
    </div>
  );
}
