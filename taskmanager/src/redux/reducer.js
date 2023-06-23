// declaration file of reducer functions for updating the state
// Reducer is a function that takes the current state and an action as arguments and returns the new state. The reducer determines how the state of the application changes in response to actions sent to the store. Remember that actions only describe what happened, not how the state of the application changes.
import { statusFilters } from "./constants";
// Import the reducer composition function
import { combineReducers } from "redux";

const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];


const tasksReducer = (state = tasksInitialState, action) => {
  // The reducer distinguishes between actions by the value of the type property
  switch (action.type) {
    // Depending on the type of action, different logic will be executed
    case "tasks/addTask":
      // Need to return a new state object
      return [
        // which has all the data of the existing state
        ...state,
        // and a new task array
        // tasks: [
        //   // which has all existing tasks
        //   ...state.tasks,
          // and a new task object
          action.payload];
    case "tasks/deleteTask":
      return state.filter(task => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return {...task, completed: !task.completed };
        });
    // case "filters/setStatusFilter":
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       status: action.payload,
    //     },
    //   };
    default:
      // Each reducer receives all actions sent to the store.
      // If the reducer should not process some type of action,
      // must return the existing state unchanged.
      return state;
  }
};

// sepearating reducers
// filter reducer
const filtersInitialState = {
  status: statusFilters.all,
};

// Only gets the filters property updated
// Now the value of the state parameter will be the filters object
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

// Now we have two separate reducers, but when creating the store, we need to pass one root reducer that is responsible for all the state of Redux.
// We can write the root reducer so that it simply calls two other reducers and passes the necessary state part and action to them. This is the composition of the reducers.

// Code for the tasksReducer and filtersReducer reducers
// export const rootReducer = (state = {}, action) => {
//     // Return the state object
//     return {
//       // We pass only part of the state for which they are responsible to both reducers
//       tasks: tasksReducer(state.tasks, action),
//       filters: filtersReducer(state.filters, action),
//     };
//   };

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer,
  });