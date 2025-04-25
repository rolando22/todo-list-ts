import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'

import { Todo } from '.';

const onRemoveTodo = vi.fn();
const onToggleCompleteTodo = vi.fn();

describe('<Todo />', () => { 
  beforeEach(() => { 
    render(
      <Todo
        id='1'
        title='Todo 1'
        completed={false}
        onRemoveTodo={onRemoveTodo}
        onToggleCompleteTodo={onToggleCompleteTodo}
      />
    );
  });

  afterEach(() => { 
    cleanup();
    vi.clearAllMocks();
  });

  it('Should be render Todo input', () => { 
    const todoText = screen.getByText('Todo 1');

    expect(todoText).toBeInTheDocument();
  });
  
  it('Should be called onRemoveTodo to be click in button and onToggleCompleteTodo to be click in checkbox', () => { 
    const button = screen.getByRole('button');
    const input = screen.getByRole('checkbox');
    
    act(() => {
      fireEvent.click(button);
      fireEvent.click(input);
    });
    
    expect(onRemoveTodo).toHaveBeenCalledTimes(1);
    expect(onToggleCompleteTodo).toHaveBeenCalledTimes(1);
  });
});
