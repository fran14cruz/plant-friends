import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PLANTS_PENDING,
  REQUEST_PLANTS_SUCCESS,
  REQUEST_PLANTS_FAIL
} from "./constants";

// define initial state as done in App.js
const initialStateSearch = {
  searchField: ''
}

// define reducer
export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state; 
  }
}

// define initial state for plants request
const initialStatePlants = {
  isPending: false,
  plants: [],
  error: ''
}

export const requestPlants = (state=initialStatePlants, action={}) => {
  switch(action.type) {
    case REQUEST_PLANTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_PLANTS_SUCCESS:
      return Object.assign({}, state, { plants: action.payload, isPending: false });
    case REQUEST_PLANTS_FAIL:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
}