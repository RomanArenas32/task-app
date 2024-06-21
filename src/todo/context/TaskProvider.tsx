import { useReducer } from "react";
import { TaskState } from "../interfaces/interfaces";
import { TaskContext } from "./TodoContext";
import { taskReducer } from "./TaskReducer";

const INITIAL_STATE: TaskState = {
  taskCount: 0,
  tasks: [
    {
      id: "1",
      description: "Hacer la prueba tecnica",
      completed: false,
    },
    {
      id: "2",
      description: "Hacer la prueba tecnica",
      completed: false,
    },
    {
      id: "3",
      description: "Hacer la prueba tecnica",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TaskProvider = ({ children }: props) => {
  const [taskState, dispatch] = useReducer(taskReducer, INITIAL_STATE);
  const toggleTask = (id: string) => {
    dispatch({ type: "toggleTask", payload: { id } });
  };
  return (
    <TaskContext.Provider
      value={{
        taskState,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
