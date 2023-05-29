
import React, { useContext } from 'react'
import { MyContext } from './Context'

export default function C() {

	const {createDel, data} = useContext(MyContext)
	
	return (
		<div>
			<MyContext.Consumer>
				{(value) => <h2>C Component :{JSON.stringify(value)}</h2>}
			</MyContext.Consumer>
			<h2>component C: {data}</h2>
			<button onClick={createDel}>change</button>
		</div>
	)
}
