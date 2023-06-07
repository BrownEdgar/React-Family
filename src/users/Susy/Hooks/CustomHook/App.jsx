import React from "react";
import UseSimpleHook from "./UseSimpleHook";

export default function App() {
    
    const [count,{
        implement,
        declement,
        reset},setCount] = UseSimpleHook(0)
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={implement}>implement</button>
        <button onClick={declement}>declement</button>
        <button onClick={reset}>reset</button>

        </div>
    )
}