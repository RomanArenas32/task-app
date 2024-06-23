import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '@chakra-ui/react'; 

describe('Button Components', () => {
  test('renders Add task and Save changes buttons with correct text', () => {
    render(
      <>
        <Button type="submit" colorScheme="blue" mt={4}>
          Add task
        </Button>
        <Button colorScheme="blue" mr={3}>
          Save changes
        </Button>
      </>
    );
    
    expect(screen.getByText(/Add task/i)).toBeInTheDocument();
    expect(screen.getByText(/Save changes/i)).toBeInTheDocument();
  });
});
