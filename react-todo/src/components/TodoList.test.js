import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import TodoList from '../components/TodoList'; // adjust the path if necessary

describe('TodoList Component', () => {
  test('renders the initial todo list', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('completed'); // Assuming 'completed' class indicates completed state
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('completed');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByLabelText('Delete Learn React');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});
