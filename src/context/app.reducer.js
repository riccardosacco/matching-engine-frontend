import { SET_QUERY, SET_RESULT } from "./app.types";

export default (state, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};
