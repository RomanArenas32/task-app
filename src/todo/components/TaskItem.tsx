import { Task } from "../interfaces/interfaces";
import { useTasks } from "../hooks/useTasks";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface props {
  task: Task;
}

export const TaskItem = ({ task }: props) => {
  const { toggleTask, removeTask } = useTasks();

  return (
    <div className="taskItem_task">
      <div className="taskItem_task-content">
        <span>Task Title</span>
        <p>{task.description}</p>
      </div>
      <IconButton
        color="yellow.700"
        aria-label="Search database"
        icon={<EditIcon />}
        onClick={() => toggleTask(task.id)}
      />
      <IconButton
        m={1}
        color="red.700"
        aria-label="Search database"
        icon={<DeleteIcon />}
        onClick={() => removeTask(task.id)}
      />
    </div>
  );
};
