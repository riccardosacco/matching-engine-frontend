import {
  GENERATE_QUERY
} from "./app.types";

export default (state, action) => {
  switch (action.type) {
    case GENERATE_QUERY:
      return {
        ...state
      };
    default:
      return state;
  }
};