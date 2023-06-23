import { Button } from "../Button/Button";
import Styled from "./TaskForm.module.css";
// When submitting a form in the TaskForm component, you must send the action for creating a new task, passing it the value entered by the user in the text field.
// import the hook
import { useDispatch } from "react-redux";
// import the action generator 
import { addTask } from "../../redux/actions";



export const TaskForm = () => {
  // Get a link to the action dispatch function
  const dispatch = useDispatch(); 

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    // Call the action generator and pass the task text for the payload field
    //  Send the result - task creation action
    dispatch(addTask(form.elements.text.value));
    form.reset();
  }

  return (
    <form className={Styled.form} onSubmit={handleSubmit}>
      <input
        className={Styled.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
