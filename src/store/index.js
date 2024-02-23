import { legacy_createStore as createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  counter: 0,
  showCounter: true,
};



createSlice({

})

const counterReducer = (state = initialState, action = {}) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  // Default case: return the current state
  return state;
};

const store = createStore(counterReducer);

export default store;