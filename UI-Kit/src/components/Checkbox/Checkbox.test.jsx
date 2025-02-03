import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom';

test('renders with label', () => {
  render(<Checkbox label="Test Checkbox" />);
  const label = screen.getByText(/Test Checkbox/i);
  expect(label).toBeInTheDocument();
});

test('checkbox is unchecked by default', () => {
  render(<Checkbox label="Test Checkbox" />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox changes state when clicked', () => {
  render(<Checkbox label="Test Checkbox" />);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});

test('calls onChange with the correct value when clicked', () => {
  const onChangeMock = jest.fn();
  render(<Checkbox label="Test Checkbox" onChange={onChangeMock} />);
  
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(onChangeMock).toHaveBeenCalledWith(true);

  fireEvent.click(checkbox);
  expect(onChangeMock).toHaveBeenCalledWith(false);
});

test('sets checked prop correctly', () => {
  render(<Checkbox label="Test Checkbox" checked={true} />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeChecked();
});
