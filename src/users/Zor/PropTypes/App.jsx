import React, { useEffect, useState } from 'react';
import Component from './Component';
import ComponentBtn from './ComponentBtn';

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

    const sortOnline = (sortBool) => {
      const sortData = [];
      data.map( elem => {
        if (sortBool === true) {

          if (elem.completed === true) {
            sortData.unshift(elem);
          } else {
            sortData.push(elem);
          }

        } else {

          if (elem.completed === false) {
            sortData.unshift(elem);
          } else {
            sortData.push(elem);
          }
        }
      })
      setData(sortData);
    }

    const dataRefresh = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => setData(json))
    }

  return (
    <div>
        <ComponentBtn sort={sortOnline} refresh={dataRefresh}/>
        <Component data={data} toggle={toggleStatus}/>
    </div>
  )
}
