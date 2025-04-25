import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';

import { FormCreateTodo } from '.';

describe('<FormCreateTodo />', () => { 
  const addTodoMock = vi.fn();

  beforeEach(() => { 
    render(<FormCreateTodo onAddTodo={addTodoMock} />);
  });

  afterEach(() => { 
    cleanup();
  });

  it('Should be render FormCreateTodo component', () => { 
    const form = screen.getByRole('form');
    const input = screen.getByPlaceholderText('¿Qué deseas hacer?');
    
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  
  it('Should be change input text', () => {
    const input: HTMLInputElement = screen.getByRole('textbox');

    act(() => {
      fireEvent.change(input, { target: { value: 'Nuevo ToDo' } });
    });

    expect(input.value).toBe('Nuevo ToDo');
  });

  it('Should be called addTodo in onSubmit', () => { 
    const form = screen.getByRole('form');
    const input: HTMLInputElement = screen.getByRole('textbox');

    act(() => {
      fireEvent.change(input, { target: { value: 'Nuevo ToDo' } });
      fireEvent.submit(form);
    });

    expect(input.value).toBe('');
    expect(addTodoMock).toHaveBeenCalledTimes(1);
  });
});
