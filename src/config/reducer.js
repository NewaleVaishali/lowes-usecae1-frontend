import {
    POST_CATEGORY,
    GET_CATEGORIES,
    GET_ITEMS,
    POST_ITEMS,
  
  } from "./values";
  
  export default (state, action) => {
    switch (action.type) {
      
      case POST_CATEGORY:
        return {
          ...state,
          categories: action.payload
        };
      case POST_ITEMS:
        return {
          ...state,
          items: action.payload
        };
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload
        };
  
      case GET_CATEGORIES:
        return {
          ...state,
          categories: action.payload
        };
  
      default:
        return state;
    }
  };