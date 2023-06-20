 const initialUsersValue = [];

export default function usersReducer(state = initialUsersValue, action) {
	switch (action.type) {
		case 'plus': return ["Anahit"];
		default: return state
	}
}