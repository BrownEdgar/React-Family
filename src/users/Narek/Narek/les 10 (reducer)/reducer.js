export const initialStateValue = 0
export default function reducer(state=initialStateValue,action) {
    if(action.type === "plus"){
        return state + action.payload;   
    }
    
}