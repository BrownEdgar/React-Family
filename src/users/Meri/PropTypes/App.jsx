import React, { useEffect, useState } from 'react'
import Component from './Component'

export default function App() {
    const [data, setData] = useState([]);
    const [backData, setBackData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => {
                setData(json)
                setBackData(json)
            });
    },[])
    const changed = (id) => {
        const newdata = data.map((elem) => {
            if(elem.id == id) {
                elem.completed = !elem.completed;
            }
            return elem;
        })
        setData(newdata)
    }
    const redToGreen = () => {
        const newdata = [...data];
        newdata.sort((a,b) => (a.completed === b.completed ? '' : a.completed ? b.completed - a.completed : a.completed - b.completed))
        setData(newdata);
    }
    const greenToRed = () => {
        const newdata = [...data];
        newdata.sort((a,b) => (a.completed === b.completed ? '' : b.completed ? a.completed - b.completed : b.completed - a.completed))
        setData(newdata);
    }
    const back = () => {
        setData(backData)
    }
    return (
        <div>
            <button onClick={redToGreen}>Red to Green</button>
            <button onClick={greenToRed}>Green to red</button>
            <button onClick={back}>Back to the original data</button>
            <Component data={data} changed={changed}/>
        </div>
    )
}