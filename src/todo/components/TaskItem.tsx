import { Task } from "../interfaces/interfaces";
import { useTasks } from "../hooks/useTasks";
import { IconButton } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditTask } from "./EditTask";

interface props {
  task: Task;
}

export const TaskItem = ({ task }: props) => {
  const { removeTask, toggleTask } = useTasks();

  const handleChangeCompleted = () => {
    toggleTask(task.id);
    console.log(task);
  };
  return (
    <div className="taskItem_task">
      <div className="taskItem_task-content">
        {task.completed ? (
          <span className="taskItem_task-content_completed">completed!</span>
        ) : (
          <span>Task Title</span>
        )}
        <p>{task.description}</p>
      </div>
      <div className="taskItem_task-content_buttons">
        <div>
          <IconButton
            m={1}
            color="red.700"
            aria-label="Search database"
            icon={<DeleteIcon />}
            onClick={() => removeTask(task.id)}
          />
          <EditTask task={task} />
        </div>
        <div
          className="taskItem_task-content_check"
          onClick={handleChangeCompleted}
        >
          <Checkbox></Checkbox>
        </div>
      </div>
    </div>
  );
};
