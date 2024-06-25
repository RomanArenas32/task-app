import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { HomeTitle } from './HomeTitle'; 

describe('HomeTitle Component', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<HomeTitle />);

    expect(getByText('task manager')).toBeInTheDocument();
  });
});