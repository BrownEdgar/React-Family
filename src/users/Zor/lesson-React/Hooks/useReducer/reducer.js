
import { ADD_ELEMENT, RESET } from "./actionType";

export const initialStateValue = {
  data: [[15, 4, 2, 21], {a:1}, false, true, 12, 14, 9, "A", "c", new Data()],
  lastAction: null,
  actioncount: 0,
  lastModifaed: null,
}

// export default function reducer(state = initialStateValue, action) {

//   switch (action.type) {
//     case "plus": return state + action.payload;
//     case "minus": return state - action.payload;
//     case "reset": return initialStateValue;
//     default: return state;
//   }
// }

export default function reducer(state = initialStateValue, action) {
  switch (action.type) {
    // case ADD_ELEMENT: return {

    //   data: [...state.data].concat(action.payload.element),
    //   lastAction: 'add element',
    //   actioncount: state.actioncount + 1,
    //   lastModifaed: new Data().toLocaleTimeString(),
    // };

    case ADD_ELEMENT: return addElement(state, action)

    case RESET: return initialStateValue;
    default: return state;
  }

  function addElement(state, action) {
    return {
      ...state,
      data: [...state.data].concat(action.payload.element),
      lastAction: ADD_ELEMENT,
      actioncount: state.actioncount + 1,
      lastModifaed: new Data().toLocaleTimeString(),
    }
  }
  function dataFilter(state, action) {
    const result = state.data.filter( elem => typeof elem === action.payload);
    return {
      ...state,
      result
    }
  }
}