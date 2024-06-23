import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {PenddingTask} from './PenddingTask';
import { TaskProvider } from '../context/TaskProvider';

describe('PenddingTask Component', () => {
  test('verifies title of h2', () => {
    render(
      <TaskProvider>
        <PenddingTask />
      </TaskProvider>
    );

    // Verificar que el h2 contiene el texto 'Pending Task:' y cualquier contenido dentro del span
    const h2Element = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'h2' && content.startsWith('Pending Task:');
    });

    expect(h2Element).toBeInTheDocument();
  });
});
