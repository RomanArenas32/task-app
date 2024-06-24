import React, { useState } from "react";
import { Task } from "../interfaces/interfaces";
import { useTasks } from "../hooks/useTasks";
import { Checkbox } from "@chakra-ui/react";
import { EditTask } from "./EditTask";
import { DeleteTask } from "./forms";

export interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const { toggleTask } = useTasks();

  const handleChangeCompleted = () => {
    toggleTask(task.id); 
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
          <DeleteTask task={task}/>
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


