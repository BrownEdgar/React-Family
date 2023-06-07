import React, { useState } from 'react'
import A from './A';
import { MyContext } from './Contexts';


export default function App() {
	console.log("app render ....")
	const [data, setData] = useState('secret information');
	const changeData = () => {
		setData("new secret word")
	}
	return (
		<div>
			<h1>App component</h1>
			<MyContext.Provider value={{
				a: 1,
				b: 2,
				data,
			}}>
				<A />
			</MyContext.Provider>
			<button onClick={changeData}>change</button>
		</div>
	)
}
