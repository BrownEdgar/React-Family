import React, { useEffect, useState } from 'react';
import Component from './Component';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => setData(json))
    }, [])

    const toggleStatus = (id) => {
      const newData = data.map( elem => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem;
      })
      setData(newData);
    }

    const sortOnline = (sortBool = 'default') => {
      if (sortBool === 'green') {
        setData([...data.sort( (a, b) => +b.completed - +a.completed)])
      }
      if (sortBool === 'red') {
        setData([...data.sort( (a, b) => +a.completed - +b.completed)])
      }
      if (sortBool === 'default') {
        setData([...data.sort( (a, b) => a.id - b.id)])
      }
    }

    const closeItem = (closeElem) => {
      setData(data.filter( elem => elem.id !== closeElem))
    }

  return (
    <div>
      <Component data={data} toggle={toggleStatus} sort={sortOnline} closeItem={closeItem}/>
    </div>
  )
}
