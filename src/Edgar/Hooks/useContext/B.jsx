import React from 'react'
import C from './C'

export default function B() {
	console.log("b render ....")
	return (
		<div>
			<h2>B Component</h2>
			<C/>
		</div>
	)
}
