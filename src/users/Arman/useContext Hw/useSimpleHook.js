import React, { useState } from "react";

export default function useSimpleHook(initialData) {
  const [data, setData] = useState(initialData);

  const allDone = () => {
    setData((prevState) =>
      prevState.map((todo) =>
        Object.keys(todo).length > 0 ? { ...todo, completed: true } : todo
      )
    );
  };

  const addId = () => {
    setData((prevState) =>
      prevState.map((todo, index) =>
        Object.keys(todo).length === 0 ? { ...todo, id: index + 1 } : todo
      )
    );
  };

  const removeById = (id) => {
    setData((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    setData((prevState) =>
      prevState.map((todo) =>
        Object.keys(todo).length === 1
          ? {
              ...todo,
              userId: 1,
              title: "Lorem ipsum dolor sit amet consectetur.",
              completed: false,
            }
          : todo
      )
    );
  };

  const toJson = () => {
    return JSON.stringify(todos);
  };

  return {
    data,
    addId,
    allDone,
    removeById,
    addTodo,
    toJson
  };
}