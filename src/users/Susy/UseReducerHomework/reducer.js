import { THISDAY , SORTED } from "./actionTypes";
export const users = [
	{
		id: 1,
		firstname: "Jhon",
		revenue: 560000,
		brd: new Date("5/25/1978")
	},

	{
		id: 2,
		firstname: "Rock",
		revenue: 860000,
		brd: new Date("8/18/1972")
	},

	{
		id: 3,
		firstname: "Silva",
		revenue: 320500,
		brd: new Date("2/3/1998")
	},

	{
		id: 4,
		firstname: "Emily",
		revenue: 786000,
		brd: new Date("05/24/2023")
	}
];

export default function reducer(state = users,action) {
    switch(action.type) {
        case THISDAY: return thisDay(state,action)
        case SORTED: return sortedFunc(state,action)
        default: return state;
    }
}
      
function thisDay(state, action) {
	const BornToday = state.some(
		(elem) => elem.brd.toLocaleDateString() === action.payload
    );

    if (BornToday) {
        console.log("yes");
    }
    return state;  
}
 
function sortedFunc(state){
    const sort = state.toSorted((a,b)=>a.brd-b.brd)
    return sort;
}
