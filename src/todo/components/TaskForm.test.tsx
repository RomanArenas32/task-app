import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskForm } from "./TaskForm";
import { TaskProvider } from "../context/TaskProvider";

const mockAddTask = jest.fn();

jest.mock("../hooks/useTasks", () => ({
  useTasks: () => ({
    addTask: mockAddTask,
    tasks: [],
  }),
}));

describe("TaskForm Component", () => {
  test("renders form elements", () => {
    render(
      <TaskProvider>
        <TaskForm />
      </TaskProvider>
    );

    const inputElement = screen.getByPlaceholderText(/Task description/i);
    const buttonElement = screen.getByText(/Add task/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("shows alert for empty description", () => {
    window.alert = jest.fn();

    render(
      <TaskProvider>
        <TaskForm />
      </TaskProvider>
    );

    const buttonElement = screen.getByText(/Add task/i);
    fireEvent.click(buttonElement);

    expect(window.alert).toHaveBeenCalledWith("You must add the description");
  });

  test("shows alert for description with less than 3 characters", () => {
    window.alert = jest.fn();

    render(
      <TaskProvider>
        <TaskForm />
      </TaskProvider>
    );

    const inputElement = screen.getByPlaceholderText(/Task description/i);
    fireEvent.change(inputElement, { target: { value: "ab" } });

    const buttonElement = screen.getByText(/Add task/i);
    fireEvent.click(buttonElement);

    expect(window.alert).toHaveBeenCalledWith(
      "The task must be longer than 3 characters"
    );
  });

  test("updates input value", () => {
    render(
      <TaskProvider>
        <TaskForm />
      </TaskProvider>
    );

    const inputElement = screen.getByPlaceholderText(/Task description/i);
    fireEvent.change(inputElement, {
      target: { value: "New Task Description" },
    });

    expect(inputElement).toHaveValue("New Task Description");
  });

  test("calls addTask function with correct arguments", () => {
    render(
      <TaskProvider>
        <TaskForm />
      </TaskProvider>
    );

    const inputElement = screen.getByPlaceholderText(/Task description/i);
    fireEvent.change(inputElement, {
      target: { value: "Valid Task Description" },
    });

    const buttonElement = screen.getByText(/Add task/i);
    fireEvent.click(buttonElement);

    expect(mockAddTask).toHaveBeenCalledWith(
      expect.objectContaining({
        description: "Valid Task Description",
        completed: false,
      })
    );
  });
});
