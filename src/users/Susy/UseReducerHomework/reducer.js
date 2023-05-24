import { THISDAY , SORTED } from "./actionTypes";


export default function reducer(state,action) {
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
