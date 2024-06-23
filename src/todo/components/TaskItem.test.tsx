import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskItem } from "./TaskItem";
import { TaskProvider } from "../context/TaskProvider";
import { Task } from "../interfaces/interfaces";

const task: Task = {
  id: "1",
  description: "Test task",
  completed: false,
};

describe("TaskItem Component", () => {
  test("renders task and toggles completion state", () => {
    render(
      <TaskProvider>
        <TaskItem task={task} />
      </TaskProvider>
    );

    expect(screen.getByText(/Task Title/i)).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
});
