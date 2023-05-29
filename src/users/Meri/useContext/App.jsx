import React, { useState } from 'react'
import A from './A';
import { MyContext } from './Context';

export default function App() {
	
	const [data, setData] = useState("default");
	const createDel = () => {
		setData("new word")
	}

	return (
		<div>
			<h1>App component</h1>
			<MyContext.Provider value={{
				createDel,
				data
			}}>
				<A />
			</MyContext.Provider>
		</div>
	)
}