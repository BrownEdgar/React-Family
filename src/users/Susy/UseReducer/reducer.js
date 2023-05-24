import { ADD_ELEMENT,DATA_FILTER} from "./actionTypes";

export const initialStateValue = {
    data: [[12,5,8],{a:1},false,true,"sdfghj",new Date(),{b:2}],
    lastAction:null,
    actionCount:0,
    lastModifaed:null,
    result: []
};
export default function reducer(state = initialStateValue, action) {
    switch(action.type) {
        case ADD_ELEMENT: return addElement(state,action)
        case DATA_FILTER :return dataFilter(state,action);
        default:return state;
    }

}
function addElement(state,action){
    return {
        data: [...state.data].concat(action.payload.element),
        lastAction: ADD_ELEMENT,
        actionCount: state.actionCount + 1,
        lastModifaed: new Date().toLocaleTimeString()
    };
}
function dataFilter(state,action){
        
        const result = state.data.filter(elem => {
            return Object.prototype.toString.call(elem).slice(8, -1).toLowerCase() === action.payload.toLowerCase()
        } );
    return {
        ...state,
        result
    }
}