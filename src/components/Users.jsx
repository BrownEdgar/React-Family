import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/features/usersSlice";
import "./Posts.scss";

export default function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const deleteById = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="flex">
      {users.map((elem) => (
        <div className="flex-item" key={elem.id}>
            <h3 onClick={() => deleteById(elem.id)}>&#9747;</h3>
            <span>{elem.id}</span>
            <h1>{elem.name}</h1>
            <h2>{elem.email}</h2>
            <h4>{elem.title}</h4>
            <p>{elem.body}</p>
        </div>
      ))}
    </div>
  );
}