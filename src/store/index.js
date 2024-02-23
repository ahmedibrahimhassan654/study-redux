import { legacy_createStore as createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { AuthSlice } from "./auth";

// const counterReducer = (state = initialState, action = {}) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   // Default case: return the current state
//   return state;
// };

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  //  reducer: counterSlice.reducer,
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});

//counter actions


export default store;
