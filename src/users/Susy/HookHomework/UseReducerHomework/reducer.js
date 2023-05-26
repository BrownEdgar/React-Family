import { THISDAY , SORTED , SALARY , YEAR , AUGUST} from "./actionTypes";
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
		brd: new Date("08/05/1998")
	},

	{
		id: 4,
		firstname: "Emily",
		revenue: 786000,
		brd: new Date("07/26/2023")
	}
];

export default function reducer(state = users,action) {
    switch(action.type) {
        case THISDAY: return thisDay(state = users,action)
        case SORTED: return sortedFunc(state,action)
		case SALARY: return salaryFunc(state,action)
		case YEAR: return yearFunc(state,action)
		case AUGUST: return bornAugust(state,action)
        default: return state;
    }

      
	function thisDay(state = users, action) {
		const bornToday = state.some(elem => {
			return (
				elem.brd.getDate() === action.payload.getDate() && 
				elem.brd.getMonth() === action.payload.getMonth()
			)
		});
	return [...state,bornToday];
	}

	function sortedFunc(state){
    	const sort = state.toSorted((a,b)=>a.brd-b.brd)
    	return sort;
	}

	function salaryFunc(state){
		const lowest = state.reduce((min,max) => {
			if(min.revenue  < max.revenue) {
				return min
			}return max
		});
		const addRev = state.map(user => {
			if(user.id === lowest.id) {
				return (
					{...user,revenue:user.revenue + 80000}
				)
			}return user;
		})
		return addRev;
	}

	function yearFunc(state) {
		const change = state.map(elem => {
			if(elem.id === 3){
				const newYear = new Date(elem.brd);
				newYear.setFullYear(newYear.getFullYear() + 2)
				return (
					{...elem, brd:newYear}
				)
			}
		return elem;
		})
		return change;
	}
	function bornAugust(state) {
		const bornInAugust = state.filter(elem => elem.brd.getMonth() === 7)
		return bornInAugust
	}

}