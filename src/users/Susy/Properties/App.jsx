import { useState, useEffect } from 'react';
import Component from './Component';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const toggleStatus = (id) => {
    const newdata = data.map((elem) => {
      if (id === elem.id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    setData(newdata);
  };

  const deleteFunc = (id) => {
    const del = data.filter((elem) => elem.id !== id);
    setData(del);
  };

 
	const sortedData = (type = "default") => { 
		if (type === 'red') {
			setData(data.toSorted((a, b) => a.completed - b.completed))
		}
		if (type === 'green') {
			setData(data.toSorted((a, b) => b.completed - a.completed))
		}
		if (type === 'default') {
			setData(data.toSorted((a, b) => a.id - b.id))
		}
	}


  return (
    <div>
			<Component data={data} deleteFunc={deleteFunc} toggle={toggleStatus} sortedData={sortedData}/>
    </div>
  );
}
