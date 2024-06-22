import { createContext } from "react";
import { Task, TaskState } from "../interfaces/interfaces";

export type TaskContextProps = {
    taskState: TaskState,
    toggleTask: (id: string) => void;
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps );