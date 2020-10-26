import React, { useReducer } from "react";

import Context from "./app.context";
import reducer from "./app.reducer";

// Import libraries
import axios from "axios";

// Import globals
import globals from "../globals";

import { SET_QUERY, SET_RESULT, RESPONSE_ERROR } from "./app.types";

const State = (props) => {
  const initialState = {
    query: {},
    result: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // changeQuery function
  const changeQuery = async (query) => {
    try {
      dispatch({ type: SET_QUERY, payload: JSON.parse(query) });
      
    } catch(err){
      console.log(`Query is NOT a valid JSON document`)
    }
  };

  // generateQuery function
  const generateQuery = async (params) => {
    try {
      const response = await axios.get(`${globals.API_URL}/queryGenerator`, {
        params,
      });

      dispatch({ type: SET_QUERY, payload: response.data });
    } catch (err) {
      dispatch({ type: RESPONSE_ERROR });
    }
  };

  // executeQuery function
  const executeQuery = async (query) => {
    try {
      const response = await axios.post(
        `${globals.API_URL}/queryCluster`,
        query
      );

      dispatch({ type: SET_RESULT, payload: response.data });
    } catch (err) {
      dispatch({ type: RESPONSE_ERROR });
      console.log(err)
    }
  };

  return (
    <Context.Provider
      value={{
        ...state,
        generateQuery,
        executeQuery,
        changeQuery,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
