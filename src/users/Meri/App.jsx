import React, { useState } from 'react'

export default function App() {
	const [value, setValue] = useState(0)
	return (
		<div>
			<h1>{value}</h1>
		</div>
	)
}
