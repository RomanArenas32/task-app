import { TaskItem } from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

export const TaskList = () => {


    const {tasks} = useTasks();


  return (
    <ul>
        {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
    </ul>
  )
}
