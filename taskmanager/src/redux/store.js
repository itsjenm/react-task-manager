// redux store creation file
import { legacy_createStore } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from './reducer';

// To create a store, there is a createStore() function that takes several parameters and returns a new store object.
// createStore(reducer, preloadedState, enhancer)
// reducer - function with Redux state change logic. Required parameter.
// preloadedState - the initial state of the application. It must be an object of the same shape as at least part of the state. Optional parameter.
// enhancer - a function to enhance the capabilities of the store. Optional parameter.
// const initialState = {
//     tasks: [
//         { id: 0, text: "Learn HTML and CSS", completed: true },
//         { id: 1, text: "Get good at JavaScript", completed: true },
//         { id: 2, text: "Master React", completed: false },
//         { id: 3, text: "Discover Redux", completed: false },
//         { id: 4, text: "Build amazing apps", completed: false },
//     ],
//     filters: {
//         status: statusFilters.all,
//     },
// };
// // For now, use a reducer that
// // only returns the received state
// const rootReducer = (state = initialState, action) => {
//     return state;
//   };

  // Create a store extension to add developer tools
const enhancer = devToolsEnhancer();
export const store = legacy_createStore(rootReducer, enhancer);
