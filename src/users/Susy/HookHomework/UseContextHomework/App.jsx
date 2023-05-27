import React ,{ useState , useContext}from "react";
import A from "./A";
import { MyContext } from "./Context";

export default function App() {
    const [data, setData] = useState("")
    const createFunc = () => {
        setData("info")
    }
    const deleteFunc = () => {
        setData("")
    }
    return (
        <div>
            <h1>App Component</h1>
            <MyContext.Provider value = {data}>
                <A/>
            </MyContext.Provider>
            <button onClick={createFunc}>createDel</button>
            <button onClick={deleteFunc}>createDel</button>
        </div>
    )
}