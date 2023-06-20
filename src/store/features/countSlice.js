const initialCountValue = 0;

export default function countReducer(state = initialCountValue, action) {
	switch (action.type) {
		case 'minus': return state - 1;
		case 'plus': return state + 1;
		default: return state
	}
}