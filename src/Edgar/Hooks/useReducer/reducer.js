import { ADD_ELEMENT, DATA_FILTER } from "./actionTypes";

export const initialStateValue = {
	data: [[15,4,2,21], {a:1}, false,true, 12,14,-9, "A", "c", new Date(), {b:2}],
	lastAction:null,
	actioncount:0,
	lastModifaed:null,
	result: []
}

export default function reducer(state = initialStateValue,action) {
	switch (action.type) {
		case  ADD_ELEMENT: return addElement(state,action);
		case DATA_FILTER: return dataFilter(state, action)

		case 'reset': return initialStateValue;
		default: return state;
	}
}

function dataFilter(state, action) {
	const result = state.data.filter(elem => {
		return Object.prototype.toString.call(elem).slice(8, -1).toLowerCase() === action.payload.toLowerCase()
	} );
	return {
		...state,
		result
	}
}





function addElement(state, action) {
	return {
		...state,
		data: [...state.data].concat(action.payload.element),
		lastAction: ADD_ELEMENT,
		actioncount: state.actioncount + 1,
		lastModifaed: new Date().toLocaleTimeString(),
	}
}