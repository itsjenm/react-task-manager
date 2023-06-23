import Styled from "./Task.module.css";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";

// includes checkbox, paragraph, and buttons
export const Task = ({ task }) => {
  // Get a link to the action dispatch function
  const dispatch = useDispatch(); 
  // Call the action generator and pass the task ID
  // Send the result - task delete action
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Call the action generator and pass the task ID
  // Send the result - action to switch task status
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={Styled.wrapper}>
      <input
        type="checkbox"
        className={Styled.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={Styled.text}>{task.text}</p>
      <button className={Styled.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
