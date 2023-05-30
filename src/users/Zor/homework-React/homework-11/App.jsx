import { useState } from 'react';
import './App.scss';

export default function App() {
  const [users, setUsers] = useState([]);
  
  const addEventClick = (event) => {
    event.preventDefault();

    if (event.target.matches('form')) {

      if (!users.some(elem => elem === event.target[0].value)) {
        const value = event.target[0].value;
        setUsers([...users, value]);
      }
      event.target.reset();
    }
    
    if (event.target.className === 'box') {

      setUsers(users.filter(elem => elem !== event.target.parentElement.innerText))
    }
  }

  return (
    <div>
      <form onSubmit={addEventClick}>
        <input type="text" placeholder='Name...' required />
        <input type="submit" value='Save' />
      </form>
      {
        users.length > 0 ? (
          <ul>
            {
              users.map((elem,index) => {
                return (
                  <li key={index} onClick={addEventClick}>
                    {elem}
                    <a className='box' >
                      <span className='box__span1'></span>
                      <span className='box__span2'></span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        ): null
      }
    </div>
  )
}
