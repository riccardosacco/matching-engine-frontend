import React, { useReducer } from "react";

import Context from "./app.context";
import reducer from "./app.reducer";

// Import libraries
import axios from "axios"

import settings from "../settings";

import {
  GENERATE_QUERY
} from "./app.types";

const State = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(reducer, initialState);

  // // Load User
  const generateQuery = async () => {
    try {
      const res = await axios.get(settings.API_URL);

      dispatch({ type: GENERATE_QUERY, payload: res.data });
    } catch (err) {
      // dispatch({ type: AUTH_ERROR });
    }
  };
  return (
    <Context.Provider>
    </Context.Provider>
  )

};

export default State;