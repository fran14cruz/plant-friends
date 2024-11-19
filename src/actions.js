import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PLANTS_PENDING,
  REQUEST_PLANTS_SUCCESS,
  REQUEST_PLANTS_FAIL
} from "./constants";

// define an action
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

// define 3 actions
export const requestPlants = () => (dispatch) => {
  dispatch({ type: REQUEST_PLANTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users') // make an HTTP request
    .then(response => response.json()) // parse JSON to JS object
    .then(data => dispatch({ type: REQUEST_PLANTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_PLANTS_FAIL, payload: error })
    )
}