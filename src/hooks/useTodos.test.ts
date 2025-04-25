import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act, renderHook, RenderHookResult, waitFor } from '@testing-library/react';

import { useTodos } from './useTodos';
import { mockTodos } from '../mocks/todos';

describe('useTodos', () => { 
  let hook: RenderHookResult<ReturnType<typeof useTodos>, unknown>;

  beforeEach(() => {
    hook = renderHook(() => useTodos());
  })

  afterEach(() => {
    hook.unmount();
  })

  it('onRemoveTodo', async () => { 
    const { result } = hook;

    expect(result.current.todos).toHaveLength(mockTodos.length);
    expect(result.current.activeCount).toBe(2);
    expect(result.current.completedCount).toBe(2);
    
    act(() => {
      result.current.onRemoveTodo({ id: mockTodos[0].id });
    });
    
    await waitFor(() => {
      expect(result.current.todos).toHaveLength(mockTodos.length - 1);
      expect(result.current.activeCount).toBe(2);
      expect(result.current.completedCount).toBe(1);
    });
  });
  
  it('onToggleCompleteTodo True', async () => { 
    const { result } = hook;

    expect(result.current.todos[2].completed).toBeFalsy();
    expect(result.current.activeCount).toBe(2);
    expect(result.current.completedCount).toBe(2);
    
    act(() => {
      result.current.onToggleCompleteTodo({ id: mockTodos[2].id, completed: true });
    })
    
    await waitFor(() => { 
      expect(result.current.todos[0].completed).toBeTruthy();
      expect(result.current.activeCount).toBe(1);
      expect(result.current.completedCount).toBe(3);
    });
  });

  it('onToggleCompleteTodo False', async () => { 
    const { result } = hook;

    expect(result.current.todos[0].completed).toBeTruthy();
    expect(result.current.activeCount).toBe(2);
    expect(result.current.completedCount).toBe(2);
    
    act(() => {
      result.current.onToggleCompleteTodo({ id: mockTodos[0].id, completed: false });
    });
    
    await waitFor(() => { 
      expect(result.current.todos[0].completed).toBeFalsy();
      expect(result.current.activeCount).toBe(3);
      expect(result.current.completedCount).toBe(1);
    });
  });

  it('onClearCompleted', async () => { 
    const { result } = hook;

    expect(result.current.todos).toHaveLength(mockTodos.length);
    expect(result.current.activeCount).toBe(2);
    expect(result.current.completedCount).toBe(2);
    
    act(() => { 
      result.current.onClearCompleted();
    });
    
    await waitFor(() => { 
      expect(result.current.todos).toHaveLength(2)
      expect(result.current.activeCount).toBe(2);
      expect(result.current.completedCount).toBe(0);
    });
  });

  it('onAddTodo', async () => {
    const { result } = hook;

    expect(result.current.todos).toHaveLength(mockTodos.length);
    expect(result.current.activeCount).toBe(2);
    expect(result.current.completedCount).toBe(2);
    
    act(() => {
      result.current.onAddTodo({ title: 'Nuevo ToDo' });
    });

    await waitFor(() => { 
      expect(result.current.todos).toHaveLength(mockTodos.length + 1);
      expect(result.current.todos.find(todo => todo.title === 'Nuevo ToDo')).toBeTruthy();
      expect(result.current.activeCount).toBe(3);
      expect(result.current.completedCount).toBe(2);
    });
  })
});
