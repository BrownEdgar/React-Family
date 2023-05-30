import React, { useState } from 'react'

import "./App.scss"

export default function App() {
	const [users, setUser] = useState([])
    const [setError] = useState('');
    const [count, setCount] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target[0].value;
		setUser([...users, value]);
		e.target.reset();
        setCount(count++)


        if (!users.includes(value)) {
			setUser([...users, value]);
            setError('');
		}setError('Name already exists');
	}
    const deleteFunc = (index) => {
        setUser(users.filter(user => user.index !== index))
    }
    
	return (
		<div>

			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='name' required />
				<input type="submit" value='save' />
                <h1>{count}</h1>
			</form>
			{
				users.length > 0 ? (
					<ul>
						{users.map((user, index) => 
                        <li key={index}>{user}{users.map((index) => (
                            <span 
                            onClick={() => deleteFunc()} 
                            key={index}>
                                &#10006;
                            </span>
                        ))}</li>)}
                        
					</ul>
				) : null
			}
		</div>
	)
}
