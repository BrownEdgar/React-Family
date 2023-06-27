import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../store/features/usersSlice';

export default function Users() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    ability: ''
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      ability: userData.ability
    };
    dispatch(addUser(user));
    e.target.reset();

    setUserData({
      name: '',
      email: '',
      ability: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        </label>
        <label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        </label>
        <label>
        <input
          type="text"
          name="ability"
          value={userData.ability}
          onChange={handleInputChange}
          placeholder="Ability"
          required
        />
        </label>
        <button type="submit">Save User</button>
      </form>
    </div>
  );
}