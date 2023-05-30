import React, { useState } from 'react'
import "./App.scss"

export default function App() {

	const [users, setUsers] = useState([])
	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target[0].value;
        if(!users.includes(value)){
            setUsers((prevUsers) => [...prevUsers, value]);
        }
		e.target.reset();
	}
    const handldelete = (index) => {
        const deleteInput = users.filter((user, i) => i !== index)
        setUsers(deleteInput)
    }
    
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='name' required />
				<input type="submit" value='save' />
                <h2>{users.length}</h2>
			</form>
            <div className='container__scroll'>
                <ul>
                    {
                        users.map((user, index) => 
                        <li key={index}>
                            {user}
                            <button onClick={() => handldelete(index)}>X</button>
                        </li>
                        )
                    }
                </ul>
            </div>
		</div>
	)
}