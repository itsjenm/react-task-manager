// application action declaration file
// In order to notify the store that some event has occurred in the interface, you need to send an action. To do this, the React Redux library has a hook useDispatch(), which returns a link to the dispatch action dispatch function from the object we created earlier Redux store.
import { nanoid } from "nanoid";

export const addTask = text => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
