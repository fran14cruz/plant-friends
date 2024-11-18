import { CHANGE_SEARCH_FIELD } from "./constants";

// define an action
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})