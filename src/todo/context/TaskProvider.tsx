import { useReducer } from "react";
import { Task, TaskState } from "../interfaces/interfaces";
import { TaskContext } from "./TodoContext";
import { taskReducer } from "./TaskReducer";

const INITIAL_STATE: TaskState = {
  taskCount: 0,
  tasks: [],
  completed: 0,
  pending: 0,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TaskProvider = ({ children }: props) => {
  const [taskState, dispatch] = useReducer(taskReducer, INITIAL_STATE);
  
  const toggleTask = (id: string) => {
    dispatch({ type: "toggleTask", payload: { id } });
  };

  const addTask = (task: Task) => {
    dispatch({ type: "addTask", payload: task }); 
  };

  const removeTask = (id: string) => {
    dispatch({ type: "removeTask", payload:  { id } }); 
  };

  const editTask = (editedTask: Task) => {
    dispatch({ type: "editTask", payload: editedTask });
  };
  
  return (
    <TaskContext.Provider
      value={{
        taskState,
        toggleTask,
        addTask,
        removeTask,
        editTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
