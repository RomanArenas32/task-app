import { Task } from "../interfaces/interfaces";
import { useTasks } from "../hooks/useTasks";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditTask } from "./EditTask";

interface props {
  task: Task;
}

export const TaskItem = ({ task }: props) => {
  const { removeTask } = useTasks();

  return (
    <div className="taskItem_task">
      <div className="taskItem_task-content">
        <span>Task Title</span>
        <p>{task.description}</p>
      </div>
      <IconButton
        m={1}
        color="red.700"
        aria-label="Search database"
        icon={<DeleteIcon />}
        onClick={() => removeTask(task.id)}
      />
      <EditTask task={task}/>
    </div>
  );
};
