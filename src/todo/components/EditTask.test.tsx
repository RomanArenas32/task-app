import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EditTask } from './EditTask';
import { Task } from '../interfaces/interfaces';
import { TaskProvider } from '../context/TaskProvider';

const mockTask: Task = {
  id: '1',
  description: 'Test Task',
  completed: false,
};

const mockEditTask = jest.fn();

jest.mock('../hooks/useTasks', () => ({
  useTasks: () => ({
    editTask: mockEditTask,
  }),
}));

describe('EditTask Component', () => {
  test('renders edit button', () => {
    render(
      <TaskProvider>
        <EditTask task={mockTask} />
      </TaskProvider>
    );

    const editButton = screen.getByLabelText(/Edit Button/i);
    expect(editButton).toBeInTheDocument();
  });

  test('opens modal on edit button click', async () => {
    await act(async () => {
      render(
        <TaskProvider>
          <EditTask task={mockTask} />
        </TaskProvider>
      );
    });

    const editButton = screen.getByLabelText(/Edit Button/i);
    fireEvent.click(editButton);

    const modalHeader = screen.getByText(/Edit you task/i);
    expect(modalHeader).toBeInTheDocument();
  });

 

  test('updates input value', async () => {
    await act(async () => {
      render(
        <TaskProvider>
          <EditTask task={mockTask} />
        </TaskProvider>
      );
    });

    const editButton = screen.getByLabelText(/Edit Button/i);
    fireEvent.click(editButton);

    const input = screen.getByPlaceholderText(/Task Description/i);
    fireEvent.change(input, { target: { value: 'New Description' } });

    expect(input).toHaveValue('New Description');
  });

  test('shows alert for empty description', async () => {
    window.alert = jest.fn();

    await act(async () => {
      render(
        <TaskProvider>
          <EditTask task={mockTask} />
        </TaskProvider>
      );
    });

    const editButton = screen.getByLabelText(/Edit Button/i);
    fireEvent.click(editButton);

    const saveButton = screen.getByText(/save changes/i);
    fireEvent.click(saveButton);

    expect(window.alert).toHaveBeenCalledWith("You must add the description");
  });

  test('shows alert for description with less than 3 characters', async () => {
    window.alert = jest.fn();

    await act(async () => {
      render(
        <TaskProvider>
          <EditTask task={mockTask} />
        </TaskProvider>
      );
    });

    const editButton = screen.getByLabelText(/Edit Button/i);
    fireEvent.click(editButton);

    const input = screen.getByPlaceholderText(/Task Description/i);
    fireEvent.change(input, { target: { value: 'ab' } });

    const saveButton = screen.getByText(/save changes/i);
    fireEvent.click(saveButton);

    expect(window.alert).toHaveBeenCalledWith("The task must be longer than 3 characters");
  });

  test('calls editTask function with correct arguments', async () => {
    await act(async () => {
      render(
        <TaskProvider>
          <EditTask task={mockTask} />
        </TaskProvider>
      );
    });

    const editButton = screen.getByLabelText(/Edit Button/i);
    fireEvent.click(editButton);

    const input = screen.getByPlaceholderText(/Task Description/i);
    fireEvent.change(input, { target: { value: 'New Description' } });

    const saveButton = screen.getByText(/save changes/i);
    fireEvent.click(saveButton);

    expect(mockEditTask).toHaveBeenCalledWith('New Description', mockTask.id);
  });
});
