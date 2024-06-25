import React from "react";
import { Task } from "../interfaces/interfaces";
import { useTasks } from "../hooks/useTasks";
import { Checkbox } from "@chakra-ui/react";
import { DeleteTask, EditTaskForm } from "./forms";

export interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {

  const priorityStyles: { [key: string]: React.CSSProperties } = {
    high: { background: "red", color: "white" },
    medium: { background: "orange", color: "white" },
    low: { background: "green", color: "white" },
  };
  const defaultStyle: React.CSSProperties = { background: "black", color: "white" };
  const style = priorityStyles[task.priority] || defaultStyle;

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
          <span>{task.title}</span>
        )}
        <p>{task.description}</p>
        <p style={style}>{task.priority} Priority.!</p>
        <p>Expired: {task.expiration}</p>
      </div>
      <div className="taskItem_task-content_buttons">
        <div>
          <DeleteTask task={task} />
          <EditTaskForm task={task} />
        </div>
        <div className="taskItem_task-content_check">
          <Checkbox
            isChecked={task.completed}
            onChange={handleChangeCompleted}
          ></Checkbox>
        </div>
      </div>
    </div>
  );
};
