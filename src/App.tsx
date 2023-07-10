import { useState } from 'react';

import { Footer, Todos } from './components/';

import type { FilterValue, Todo as TodoType, TodoTypeId } from './types';
import { TODO_FILTERS } from './const';

const mockTodos = [
    {
        id: '0', 
        title: 'Title 1',
        completed: true,
    },
    {
        id: '1', 
        title: 'Title 2',
        completed: false,
    },
    {
        id: '2', 
        title: 'Title 3',
        completed: false,
    },
];

export const App = (): JSX.Element => {
    const [todos, setTodos] = useState(mockTodos);
    const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL);

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

    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.length - activeCount;

    const onFilterChange = (filter: FilterValue): void => setFilter(filter);

    const filteredTodos = todos.filter(todo => {
        if (filter === TODO_FILTERS.ACTIVE) return !todo.completed;
        if (filter === TODO_FILTERS.COMPLETED) return todo.completed;
        return todo;
    });

    const onClearCompleted = (): void => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    };

    return (
        <main className='todoapp'>
            <Todos 
                todos={filteredTodos} 
                onRemoveTodo={onRemoveTodo}
                onToggleCompleteTodo={onToggleCompleteTodo}
            />
            <Footer 
                activeCount={activeCount}
                completedCount={completedCount}
                filterSelected={filter}
                onClearCompleted={onClearCompleted}
                onFilterChange={onFilterChange}
            />
        </main>
    );
}
