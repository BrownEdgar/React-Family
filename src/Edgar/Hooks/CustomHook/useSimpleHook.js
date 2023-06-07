import { useState } from 'react'

export default function useSimpleHook(initialValue) {
	const [count, setCount] = useState({
		value: initialValue,
		result: null
	});


	const getSum = () => {
		const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ]
		const n = count.value.toString();
		const result = numbers.every(elem => n.includes(elem))
		setCount({ ...count, result })
		
	}

	return [count, {getSum}]
}
