import React, { useState, } from "react";
import A from "./A";
import { MyContext } from "./Context";

export default function App() {
  const [data, setData] = useState("");
  const createFunc = () => {
    setData("Example");
  };
  const deleteFunc = () => {
    setData("");
  };

  return (
    <div>
      <h1>App Component</h1>
      <MyContext.Provider value={data}>
        <A />
      </MyContext.Provider>
      <button onClick={createFunc}>Create</button>
      <button onClick={deleteFunc}>Delete</button>
    </div>
  );
}
