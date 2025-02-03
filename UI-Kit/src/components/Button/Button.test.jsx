import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button click calls the onClick function', () => {
  const handleClick = jest.fn();

  render(<Button label="Click me" onClick={handleClick} />);

  const button = screen.getByText('Click me');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
