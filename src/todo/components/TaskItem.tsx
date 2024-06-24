import React from "react";
import { Task } from "../interfaces/interfaces";
import { useTasks } from "../hooks/useTasks";
import { IconButton } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditTask } from "./EditTask";

export interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const { removeTask, toggleTask } = useTasks();

  const handleChangeCompleted = () => {
    toggleTask(task.id); // Toggle global task.completed state
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
            aria-label="Delete task"
            icon={<DeleteIcon />}
            onClick={() => removeTask(task.id)}
          />
          <EditTask task={task} />
        </div>
        <div className="taskItem_task-content_check">
          <Checkbox isChecked={task.completed} onChange={handleChangeCompleted}>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};


