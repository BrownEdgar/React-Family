;
import {  useDispatch } from 'react-redux';
import { addUser } from '../store/features/usersSlice';

export default function Users() {
  
  const dispatch = useDispatch()




  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name: e.target.name.value,
      email: e.target.email.value,
      ability: e.target.ability.value
    };
    dispatch(addUser(user));
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <input
          type="text"
          name="name"

          placeholder="Name"
          required
        />
        </label>
        <label>
        <input
          type="email"
          name="email"

          placeholder="Email"
          required
        />
        </label>
        <label>
        <input
          type="text"
          name="ability"

          placeholder="Ability"
          required
        />
        </label>
        <button type="submit">Save User</button>
      </form>
    </div>
  );
}