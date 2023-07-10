import { useState } from "react";

import type { TodoList, Todo as TodoType, TodoTypeId, TodoTypeTitle } from "../types";
import { mockTodos } from "../mocks/todos";

export const useTodos = (): {
    todos: TodoList,
    activeCount: number,
    completedCount: number,
    onRemoveTodo: ({ id }: TodoTypeId) => void,
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void,
    onClearCompleted: () => void,
    onAddTodo: ({ title }: TodoTypeTitle) => void,
} => {
    const [todos, setTodos] = useState(mockTodos);

    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.length - activeCount;

    const onRemoveTodo = ({ id }: TodoTypeId) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    const onToggleCompleteTodo = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) return { ...todo, completed };
            return todo;
        });
        setTodos(newTodos);
    };

    const onClearCompleted = (): void => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    };

    const onAddTodo = ({ title }: TodoTypeTitle): void => {
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
        };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    };

    return {
        todos,
        activeCount,
        completedCount,
        onRemoveTodo,
        onToggleCompleteTodo,
        onClearCompleted,
        onAddTodo,
    };
};
