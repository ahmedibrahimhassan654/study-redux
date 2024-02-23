import { legacy_createStore as createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counterslice",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAutState = {
  isAuth: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAutState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
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

export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;

export default store;
