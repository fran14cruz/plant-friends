import { CHANGE_SEARCH_FIELD } from "./constants";

// define initial state as done in App.js
const initialState = {
  searchField: ''
}

// define reducer
export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state; 
  }
}