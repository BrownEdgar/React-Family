import React ,{ useState , useContext}from "react";
import A from "./A";
import { MyContext } from "./Context";

export default function App() {
    const [data, setData] = useState("sectret")
    const changeData = () => {
        setData("new")
    }
    return (
        <div>
            <h1>App Component</h1>
            <MyContext.Provider value = {data}>
                <A/>
            </MyContext.Provider>
            <button onClick={changeData}>new</button>
        </div>
    )
}