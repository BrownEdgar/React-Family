import React, { useContext } from "react";
import { MyContext } from "./Context";

export default function C() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>C Component: {value}</h2>
    </div>
  );
}