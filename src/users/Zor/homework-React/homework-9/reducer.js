
import { CHANGE_YEAR, PEOPLE_AUGUST, PERSON_TODAY, SMALL_INCOME, SORT_YEAR } from "./actionType";


export const initialStateUsers = [
  {
    id: 1,
    firstname: "john",
    revenue: 560_000,
    brd: new Date("5/12/1978")
  },
  {
    id: 2,
    firstname: "Rock",
    revenue: 860_000,
    brd: new Date("8/18/1972")
  },
  {
    id: 3,
    firstname: "Silva",
    revenue: 320_500,
    brd: new Date("2/3/1998")
  },
  {
    id: 4,
    firstname: "Emily",
    revenue: 780_600,
    brd: new Date("11/14/1994")
  },
]

export default function reducer(state, action) {
  state = initialStateUsers;
  switch (action.type) {
    case PERSON_TODAY: return personToday(state, action);
    case SORT_YEAR: return sortYeart(state);
    case SMALL_INCOME: return smallIncome(state, action);
    case CHANGE_YEAR: return changeYear(state, action);
    case PEOPLE_AUGUST: return peopleAugust(state);
    default: return state;
  }
}

function personToday(state, action) {

  if ( state[0] !== " Никто не родился в этот день.") {
    state = state.filter( elem => elem.brd.getDate() == action.payload.today.split(".")[0])
  }
  if (state.length === 0) {
    state.push(" Никто не родился в этот день.")
  }else{
    state
  }
  return state
}

function sortYeart(state) {
  return [...state.sort( (a, b) => b.brd - a.brd)]
}

function smallIncome(state, action) {
  const small = [...state];
  const smalluser = small.sort( (a, b) => a.revenue - b.revenue)[0]
  return (
    state.map( elem => {
      if (elem.firstname === smalluser.firstname) {
        elem.revenue = elem.revenue + action.payload
        return elem
      }else{
        return elem
      }
    })
  )
}

function changeYear(state, action) {
  return (
    state.map( elem => {
      if (elem.id === 3) {
        elem.brd.setFullYear(elem.brd.getFullYear() + action.payload)
      }
      return elem
    })
  )
}

function peopleAugust(state) {
  return (
    state.filter( elem => elem.brd.getMonth() === 7)
  )
  
}