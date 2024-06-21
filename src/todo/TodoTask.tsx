import { PenddingTask, TaskList } from "./components";
import { TaskForm } from "./components/TaskForm";
import { TaskProvider } from "./context/TaskProvider";

export const TodoTask = () => {
  return (
    <TaskProvider>
      <>
        <TaskForm />
        <div>
          <PenddingTask />
          <TaskList />
        </div>
      </>
    </TaskProvider>
  );
};
