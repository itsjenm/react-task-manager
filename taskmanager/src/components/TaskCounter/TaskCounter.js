import { getTasks } from "../../redux/selectors";
import Styled from "./TaskCounter.module.css";
//  Import the hook
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  // Get an array of tasks from the Redux state
  // const tasks = useSelector((state) => state.tasks);
  const tasks = useSelector(getTasks);

  // Based on the Redux state, get derived data
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={Styled.text}>Active: {count.active}</p>
      <p className={Styled.text}>Completed: {count.completed}</p>
    </div>
  );
};
