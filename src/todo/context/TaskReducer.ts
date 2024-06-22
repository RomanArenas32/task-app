import { Task, TaskState } from "../interfaces/interfaces";

type TaskAction =
  | { type: "addTask"; payload: Task }
  | { type: "toggleTask"; payload: { id: string } }
  | { type: "removeTask"; payload: { id: string } }


export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "toggleTask":
      return {
        ...state,
        tasks: state.tasks.map(({ ...task }) => {
          if (task.id === action.payload.id) {
            task.completed = !task.completed;
          }
          return task;
        }),
      };
    case "removeTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};
