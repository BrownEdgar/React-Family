import {useCallback, useEffect, useMemo, useState} from "react";
import Child from "./Child";
import axios from "axios";

export default function App() {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState('Karen')
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setData(res.data))
    }, [])

    // const memoChild = useMemo(() => {
    //     return <Child data={data}/>
    // }, [])

    // const handleClick = () => {
    //     console.log('handleClick')
    // }

    // const handleClick = useCallback(() => {
    //     console.log('handleClick')
    // }, [])

    const result = useMemo(() => {
        return data.filter(todo => todo.completed)
    } ,[data])

    return (
        <div>
            {/* <h1>Name: {name}</h1> */}
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>add count</button>
            {/* <button onClick={() => setName("Levon")}>add count</button> */}
            {/* {memoChild} */}
            {/* <Child data={data} /> */}
            <Child data={result} />
            {/* <Child handleClick={handleClick} /> */}
        </div>
    )
}