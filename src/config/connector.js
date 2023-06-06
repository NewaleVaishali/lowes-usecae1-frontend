import React, { useReducer } from "react";

import axiosClient from "./axios";


// context
import userContext from "./context";

// reducer
import Reducer from "./reducer";

// type tags
import {
  GET_CATEGORIES,
  GET_ITEMS,
  POST_CATEGORY,
  POST_ITEMS
} from "./values";

const Context = props => {
  const initialState = {
    user: null,
    currency: null,
    items: [],
    categories: []
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(Reducer, initialState);

 

  // POST Methods
  const addCategory = async category => {
    const res = await axiosClient.post("/categories/add", category);

    dispatch({
      type: POST_CATEGORY,
      payload: res.data
    });
  };
  const addItem = async item => {
    const res = await axiosClient.post("/items/add", item);

    dispatch({
      type: POST_ITEMS,
      payload: res.data
    });
  };

  // GET Methods

  const getCategories = async () => {
    const res = await axiosClient.get("/categories/getall");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  };
  const getItems = async () => {
    const res = await axiosClient.get("/items/getall");

    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  };

  return (
    <userContext.Provider
      value={{
        categories: state.categories,
        items: state.items,
        addCategory,
        addItem,
        getCategories,
        getItems
      }}
    >
      {props.children}
    </userContext.Provider>
  );
    };


export default Context;