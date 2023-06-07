import React from 'react'
import B from './B'

export default function A() {
	console.log("a render ....")
	return (
		<div>
			<h2>A Component</h2>
			<B />
		</div>
	)
}
