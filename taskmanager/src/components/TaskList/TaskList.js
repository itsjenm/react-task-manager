import Styled from "../TaskList/TaskList.module.css";
import { Task } from "../Task/Task";
import { getTasks, getStatusFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Get an array of tasks from the Redux state
//   const tasks = useSelector(state => state.tasks);
  const tasks = useSelector(getTasks);
  // Get filter value from Redux state
  //   const statusFilter = useSelector(state => state.filters.status);
  const statusFilter = useSelector(getStatusFilter);
  // Calculate the array of tasks that need to be displayed in the interface
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={Styled.list}>
      {visibleTasks.map(task => (
        <li className={Styled.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
