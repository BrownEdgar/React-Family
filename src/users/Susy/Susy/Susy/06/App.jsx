import React, { useState, useEffect } from 'react';
import Component from './Component';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
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

  const oneFunc = () => {
    const items = data.filter((elem) => elem.completed);
    const unitems = data.filter((elem) => !elem.completed);

    const elements = items.map((elem) => (
      <div key={elem.id} className='flex__item' onClick={() => toggleStatus(elem.id)}>
        <span className='flex__item__del' onClick={() => deleteFunc(elem.id)}>
          &#10006;
        </span>
        <h2>{elem.title}</h2>
        <span className='flex__status flex__status-success'></span>
      </div>
    ));

    const unelements = unitems.map((elem) => (
      <div key={elem.id} className='flex__item' onClick={() => toggleStatus(elem.id)}>
        <span className='flex__item__del' onClick={() => deleteFunc(elem.id)}>
          &#10006;
        </span>
        <h2>{elem.title}</h2>
        <span className='flex__status flex__status-failure'></span>
      </div>
    ));

    return (
      <div>
        {elements}
        {unelements}
      </div>
    );
  };

  const twoFunc = () => {
    const items = data.filter((elem) => elem.completed);
    const unitems = data.filter((elem) => !elem.completed);

    const elements = items.map((elem) => (
      <div key={elem.id} className='flex__item' onClick={() => toggleStatus(elem.id)}>
        <span className='flex__item__del' onClick={() => deleteFunc(elem.id)}>
          &#10006;
        </span>
        <h2>{elem.title}</h2>
        <span className='flex__status flex__status-success'></span>
      </div>
    ));

    const unelements = unitems.map((elem) => (
      <div key={elem.id} className='flex__item' onClick={() => toggleStatus(elem.id)}>
        <span className='flex__item__del' onClick={() => deleteFunc(elem.id)}>
          &#10006;
        </span>
        <h2>{elem.title}</h2>
        <span className='flex__status flex__status-failure'></span>
      </div>
    ));

    return (
      <div>
        {unelements}
        {elements}
      </div>
    );
  };

  const threeFunc = () => {
    return data.map((elem) => (
      <div key={elem.id} className='flex__item' onClick={() => toggleStatus(elem.id)}>
        <span className='flex__item__del' onClick={() => deleteFunc(elem.id)}>
          &#10006;
        </span>
        <h2>{elem.title}</h2>
        <span className={`flex__status ${elem.completed ? 'flex__status-success' : 'flex__status-failure'}`}></span>
      </div>
    ));
  };

  return (
    <div>
      <Component data={data} oneFunc={oneFunc} twoFunc={twoFunc} threeFunc={threeFunc} deleteFunc={deleteFunc} toggle={toggleStatus} />
    </div>
  );
}
